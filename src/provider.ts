import {
  CompletionHandler,
  IInlineCompletionContext,
  IInlineCompletionProvider
} from '@jupyterlab/completer';

import { PromiseClient, createPromiseClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-web';
import { IEditorLanguageRegistry } from '@jupyterlab/codemirror';
import { LanguageServerService } from './api/proto/exa/language_server_pb/language_server_connect';
import { PUBLIC_API_SERVER, PUBLIC_WEBSITE } from './urls';
import { registerUser } from './auth';
import { Dialog, showDialog } from '@jupyterlab/apputils';

import { getCodeiumCompletions, simplifyCompletions } from './codeium';
import { v4 as uuidv4 } from 'uuid';

function languageServerClient(
  baseUrl: string
): PromiseClient<typeof LanguageServerService> {
  const transport = createConnectTransport({
    baseUrl,
    useBinaryFormat: true
  });
  return createPromiseClient(LanguageServerService, transport);
}

export function getApiServerUrl(portalUrl: string): string {
  if (portalUrl === '') {
    return PUBLIC_API_SERVER;
  }
  return `${portalUrl.replace(/\/$/, '')}/_route/api_server`;
}

export function getLanguageServerUrl(portalUrl: string): string {
  if (portalUrl === '') {
    return PUBLIC_API_SERVER;
  }
  return `${portalUrl.replace(/\/$/, '')}/_route/language_server`;
}

export class CodeiumProvider implements IInlineCompletionProvider {
  readonly identifier = 'codeium';
  readonly name = 'Codeium';

  constructor(options: CodeiumProvider.IOptions) {
    this._editorLanguageRegistry = options.editorLanguageRegistry;
    this._portalUrl = options.portalUrl;
    this._ideName = options.appname;
    this._ideVersion = options.version;
    this._client = languageServerClient(getApiServerUrl(options.portalUrl));
  }

  set portalUrl(portalUrl: string) {
    if (portalUrl == this._portalUrl && this._apiKey !== '') {
      // Do not show dialog if portalUrl is the same and api key is already set.
      return;
    }
    this._portalUrl = portalUrl;
    this._client = languageServerClient(getLanguageServerUrl(portalUrl));
    showDialog({
      title: 'Portal URL changed',
      body: 'Click below to get new auth token.',
      buttons: [
        Dialog.cancelButton({ label: 'Cancel' }),
        Dialog.okButton({ label: 'Get auth token' })
      ]
    }).then(result => {
      if (result.button.label === 'Get auth token') {
        window.open(this.getAuthTokenUrl(), '_blank');
      }
    });
  }

  set authToken(authToken: string) {
    registerUser(authToken, getApiServerUrl(this._portalUrl))
      .then(apiKeyAndName => {
        this._apiKey = apiKeyAndName.api_key;
        console.log('Welcome,', apiKeyAndName.name);
      })
      .catch(error => console.error(error));
  }

  getProfileUrl(): string {
    if (this._portalUrl === '') {
      return PUBLIC_WEBSITE + '/profile';
    }
    return this._portalUrl.replace(/\/$/, '') + '/profile';
  }

  getAuthTokenUrl(): string {
    const profileUrl = this.getProfileUrl();
    const params = new URLSearchParams({
      response_type: 'token',
      redirect_uri: 'chrome-show-auth-token',
      scope: 'openid profile email',
      prompt: 'login',
      redirect_parameters_type: 'query',
      state: uuidv4()
    });
    return `${profileUrl}?${params}`;
  }

  async fetch(
    request: CompletionHandler.IRequest,
    context: IInlineCompletionContext
  ) {
    const { text, offset: cursorOffset, mimeType } = request;
    const language = this._editorLanguageRegistry.findByMIME(mimeType ?? '');
    const results = await getCodeiumCompletions({
      client: this._client,
      text,
      cursorOffset,
      config: {
        apiKey: this._apiKey,
        language: language?.support?.language.name,
        ideName: this._ideName,
        ideVersion: this._ideVersion
      },
      otherDocuments: []
    });

    const simplified = simplifyCompletions(results).map(part => ({
      from: part.offset,
      to: part.offset,
      insert: part.completion
    }));

    // TODO(kevin): What were the offsets even for?
    return {
      items: simplified.map(part => ({ insertText: part.insert }))
    };
  }

  private _apiKey = '';
  private _portalUrl = '';
  private _ideName: string;
  private _ideVersion: string;

  private _editorLanguageRegistry: IEditorLanguageRegistry;
  private _client: PromiseClient<typeof LanguageServerService>;
}

export namespace CodeiumProvider {
  export interface IOptions {
    editorLanguageRegistry: IEditorLanguageRegistry;
    portalUrl: string;
    appname: string;
    version: string;
  }
}
