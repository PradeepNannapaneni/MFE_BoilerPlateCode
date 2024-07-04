import { Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { ErrorPageComponent } from "../components/error-page/error-page.component";
import { InfoDialogComponent } from "../components/info-dialog/info-dialog.component";
import { LoaderComponent } from "../components/loader/loader.component";
import { NoDataComponent } from "../components/no-data/no-data.component";
import { ReadonlyFormComponent } from "../components/readonly-form/readonly-form.component";
import { TableComponent } from "../components/table/table.component";
import { TableActionsComponent } from "../components/table-actions/table-actions.component";
import { CUSTOM_ELEMENT_TAG } from '../constants/constant';

export class CustomElementHelper {

    static elements = [
        { control: ErrorPageComponent, name: 'error-page' },
        { control: InfoDialogComponent, name: 'info-dialog' },
        { control: LoaderComponent, name: 'loader' },
        { control: NoDataComponent, name: 'no-data' },
        { control: ReadonlyFormComponent, name: 'readonly-form' },
        { control: TableComponent, name: 'table' },
        { control: TableActionsComponent, name: 'table-actions' }
    ];

    static registerCustomElementsFunc = createCustomElement;
    static registerCustomElements = customElements;
    static defineCustomElements(injector: Injector) {
        this.elements.forEach(element => {
            const el = CustomElementHelper.registerCustomElementsFunc(element.control, { injector });
            CustomElementHelper.registerCustomElements.define(CUSTOM_ELEMENT_TAG + '-' + element.name, el);
        });
    }
}