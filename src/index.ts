import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { IEditorLanguageRegistry } from '@jupyterlab/codemirror';
import { ICompletionProviderManager } from '@jupyterlab/completer';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { CodeiumProvider } from './provider';

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-codeium:inline-provider',
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
    const provider = new CodeiumProvider({ editorLanguageRegistry });
    manager.registerInlineProvider(provider);

    settingRegistry
      .load(plugin.id)
      .then(settings => {
        const updateKey = () => {
          const apiKey = settings.get('apiKey').composite as string;
          provider.apiKey = apiKey;
        };

        settings.changed.connect(() => updateKey());
        updateKey();
      })
      .catch(reason => {
        console.error(`Failed to load settings for ${plugin.id}`, reason);
      });
  }
};

export default plugin;
