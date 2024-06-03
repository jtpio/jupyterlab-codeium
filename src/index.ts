import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { Dialog, showDialog } from '@jupyterlab/apputils';
import { ICompletionProviderManager } from '@jupyterlab/completer';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { CodeiumProvider } from './provider';

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-codeium:inline-provider',
  autoStart: true,
  requires: [ICompletionProviderManager, ISettingRegistry],
  activate: (
    app: JupyterFrontEnd,
    manager: ICompletionProviderManager,
    settingRegistry: ISettingRegistry
  ): void => {
    const provider = new CodeiumProvider();
    manager.registerInlineProvider(provider);

    settingRegistry
      .load(plugin.id)
      .then(settings => {
        const updateKey = () => {
          const apiKey = settings.get('apiKey').composite as string;
          provider.apiKey = apiKey;

          if (!apiKey) {
            const message = 'Codeium API key is not set';
            console.warn(message);
            void showDialog({
              title: message,
              body: 'Please set the Codeium API key in the settings editor',
              buttons: [Dialog.okButton()]
            });
          }
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
