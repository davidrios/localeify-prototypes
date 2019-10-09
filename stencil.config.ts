import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'localeify',
  globalScript: 'src/utils/global-script.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
