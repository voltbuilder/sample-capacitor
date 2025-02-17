import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader before the bootstrapModule/bootstrapApplication call
defineCustomElements(window);
