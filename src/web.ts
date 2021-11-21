import { WebPlugin } from '@capacitor/core';

import type { AppVersionPlugin } from './definitions';

export class AppVersionWeb extends WebPlugin implements AppVersionPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
