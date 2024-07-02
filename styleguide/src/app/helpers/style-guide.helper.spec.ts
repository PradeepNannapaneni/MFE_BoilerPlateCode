import { DialogData } from "../components/info-dialog/info-dialog.component";
import { styleGuideHelper } from "./style-guide.helper";

describe('styleGuideHelper', () => {

    const infoDialogComponent = jasmine.createSpyObj('InfoDialogComponent', {
        open: mockDialogData()
    });

    const mockDialog = jasmine.createSpyObj('MatDialog', {
        dialog: mockDialogData()
    });

    const mockSubject = jasmine.createSpyObj('Subject', {
        readAsDataUrl: ''
    });

    const mockreader = jasmine.createSpyObj('reader', {
        readAsDataUrl: ''
    });

    it('should open dialog test', () => {
        let data: object = styleGuideHelper.composeInfoMessage(infoDialogComponent, "Header", "message", "ok");
        expect(data).toBeDefined();
        expect(data.hasOwnProperty('infoHeader')).toBeTruthy();
        expect(data.hasOwnProperty('infoMessage')).toBeTruthy();
        expect(data.hasOwnProperty('buttonName')).toBeTruthy();
    });

    function mockDialogData() {
        let dialogData: DialogData = { infoHeader: "Header", infoMessage: "Message", buttonName: "OK" };
        return dialogData;
    }

});
