import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipstergatewaySharedModule } from 'app/shared/shared.module';
import { JhipstergatewayCoreModule } from 'app/core/core.module';
import { JhipstergatewayAppRoutingModule } from './app-routing.module';
import { JhipstergatewayHomeModule } from './home/home.module';
import { JhipstergatewayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipstergatewaySharedModule,
    JhipstergatewayCoreModule,
    JhipstergatewayHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipstergatewayEntityModule,
    JhipstergatewayAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipstergatewayAppModule {}
