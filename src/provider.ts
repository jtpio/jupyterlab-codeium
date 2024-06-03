import {
  CompletionHandler,
  IInlineCompletionContext,
  IInlineCompletionProvider
} from '@jupyterlab/completer';

import { getCodeiumCompletions, simplifyCompletions } from './codeium';

export class CodeiumProvider implements IInlineCompletionProvider {
  readonly identifier = 'codeium';
  readonly name = 'Codeium';

  set apiKey(apiKey: string) {
    this._apiKey = apiKey;
  }

  async fetch(
    request: CompletionHandler.IRequest,
    context: IInlineCompletionContext
  ) {
    const { text, offset: cursorOffset } = request;
    const results = await getCodeiumCompletions({
      text,
      cursorOffset,
      config: {
        apiKey: this._apiKey
      },
      otherDocuments: []
    });

    const simplified = simplifyCompletions(results).map(part => ({
      from: Number(part.offset),
      to: Number(part.offset),
      insert: part.text
    }));

    return {
      items: simplified.map(part => ({ insertText: part.insert }))
    };
  }

  private _apiKey = '';
}
