import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableAkitaProdMode, persistState } from '@datorama/akita';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

const storage = persistState({
  key: 'Subramanya',
  include: ['search'],
  preStorageUpdate: (storeName, state) => {
      return state;
  },
  preStoreUpdate(storeName: string, state: any) {
      return state;
  }
});


const providers = [{ provide: 'persistStorage', useValue: storage }];

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
