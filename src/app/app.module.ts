import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {WeasyLearnRoutingModule} from './weasy-learn-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ComponentsModule} from './components/components.module';
import {ProvidersModule} from './providers/providers.module';
import {AuthGuard} from './providers/AuthGuard.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';

export function kcInitializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init(environment.keycloakOptions);
        console.log('Keycloak is initialized');
        resolve();
      } catch (error) {
        console.log('Error thrown in init ' + error);
        reject(error);
      }
    });
  };
}

@NgModule({
  imports: [
    ComponentsModule,
    BrowserModule,
    BrowserAnimationsModule,
    WeasyLearnRoutingModule,
    KeycloakAngularModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ProvidersModule,
    AuthGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: APP_INITIALIZER, useFactory: kcInitializer, multi: true, deps: [KeycloakService]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// required for AOT compilation
// tslint:disable-next-line:typedef
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
