import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { InfoDialogComponent } from "../components/info-dialog/info-dialog.component";
import { MEDIUM_MODAL_WIDTH } from "../constants/constant";

export class styleGuideHelper {

    static composeInfoMessage(dialog: MatDialog, header: string, message: string, buttonName: string, width = MEDIUM_MODAL_WIDTH) {
        let dialogConfig = new MatDialogConfig();
        dialogConfig.width = width;
        dialogConfig.data = {
            infoHeader: header,
            infoMessage: message,
            buttonName: buttonName
        };
        return dialog.open(InfoDialogComponent, dialogConfig);
    }
}