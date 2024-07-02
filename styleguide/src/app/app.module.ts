import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AssetUrlPipe } from './pipes/asset-url.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { TableComponent } from './components/table/table.component';
import { TableActionsComponent } from './components/table-actions/table-actions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReadonlyFormComponent } from './components/readonly-form/readonly-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    InfoDialogComponent,
    LoaderComponent,
    NoDataComponent,
    TableComponent,
    TableActionsComponent,
    ReadonlyFormComponent,
    AssetUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
