import { registerPlugin } from '@capacitor/core';

import type { AppVersionPlugin } from './definitions';

const AppVersion = registerPlugin<AppVersionPlugin>('AppVersion', {
  web: () => import('./web').then(m => new m.AppVersionWeb()),
});

export * from './definitions';
export { AppVersion };
