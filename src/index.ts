import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { IEditorLanguageRegistry } from '@jupyterlab/codemirror';
import { ICompletionProviderManager } from '@jupyterlab/completer';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { CodeiumProvider } from './provider';

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'codeium-jupyter:inline-provider',
  autoStart: true,
  requires: [
    ICompletionProviderManager,
    IEditorLanguageRegistry,
    ISettingRegistry
  ],
  activate: (
    app: JupyterFrontEnd,
    manager: ICompletionProviderManager,
    editorLanguageRegistry: IEditorLanguageRegistry,
    settingRegistry: ISettingRegistry
  ): void => {
    settingRegistry
      .load(plugin.id)
      .then(settings => {
        const portalUrl = settings.get('portalUrl').composite as string;
        const provider = new CodeiumProvider({
          editorLanguageRegistry,
          portalUrl,
          appname: app.name,
          version: app.version
        });
        manager.registerInlineProvider(provider);
        const authToken = settings.get('authToken').composite as string;
        if (authToken !== '') {
          provider.authToken = authToken; // This should reset the API key as well.
        }

        const updateKey = () => {
          const portalUrl = settings.get('portalUrl').composite as string;
          provider.portalUrl = portalUrl;
          const authToken = settings.get('authToken').composite as string;
          if (authToken !== '') {
            provider.authToken = authToken; // This should reset the API key as well.
          }
        };

        settings.changed.connect(() => updateKey());
      })
      .catch(reason => {
        console.error(`Failed to load settings for ${plugin.id}`, reason);
      });
  }
};

export default plugin;
