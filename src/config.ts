// Some of this code is based on the code from https://github.com/val-town/codemirror-codeium/blob/main/src/config.ts
// licensed under the ISC License: https://github.com/val-town/codemirror-codeium/blob/main/LICENSE

export interface ICodeiumConfig {
  /**
   * Codeium API key
   */
  apiKey: string;

  /**
   * The programming language of the given document.
   */
  language?: string;
  /**
   * Time in millseconds after typing to fetch
   * completions from codeium
   */
  timeout?: number;

  authSource?: number;
}
