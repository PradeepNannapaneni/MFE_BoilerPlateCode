import { DialogData } from "../components/info-dialog/info-dialog.component";
import { AttachmentFilesizeConverter } from "../enums/file-attachment.enum";
import { AttachmentFileHelper } from "./file-attachment.helper";
import { styleGuideHelper } from "./style-guide.helper";

describe('AttachmentFileHelper', () => {

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

    it('should check format bytes - Negative', () => {
        let result = AttachmentFileHelper.formatBytes(0, 0);
        expect(result).toEqual(0);
    });

    it('should check format bytes - Positive', () => {
        let bytesIndex = AttachmentFilesizeConverter.MB.valueOf();
        let result = AttachmentFileHelper.formatBytes(1024 * 1024, bytesIndex);
        expect(result).toEqual(1);
    });

    it('should check file extension - Negative', () => {
        let result = AttachmentFileHelper.isFileAttachmentExtensionAllowed('msi');
        expect(result).toBeFalsy();
    });

    it('should check file extension - Positive', () => {
        let result = AttachmentFileHelper.isFileAttachmentExtensionAllowed('txt');
        expect(result).toBeTruthy();
    });

    it('should check file sixe - negative', () => {
        let result = AttachmentFileHelper.isFileSizeWithInLimits(100, 10);
        expect(result).toBeFalsy();
    });

    it('should check file sixe - positive', () => {
        let result = AttachmentFileHelper.isFileSizeWithInLimits(100, 100);
        expect(result).toBeTruthy();
    });

    it('should check file sixe - positive', () => {
        let result = AttachmentFileHelper.isFileSizeWithInLimits(10, 100);
        expect(result).toBeTruthy();
    });

    it('should open dialog test', () => {
        let data: object = styleGuideHelper.composeInfoMessage(infoDialogComponent, "Header", "message", "ok");
        expect(data).toBeDefined();
        expect(data.hasOwnProperty('infoHeader')).toBeTruthy();
        expect(data.hasOwnProperty('infoMessage')).toBeTruthy();
        expect(data.hasOwnProperty('buttonName')).toBeTruthy();
    });

    it('should read file', () => {
        let files = mockFiles();
        const mockReader = {
            addEventListener: jasmine.createSpy().and.callFake((event, listener) => {
                listener();
            }),
            readAsDataURL: jasmine.createSpy(),
        };
        spyOn(window, 'FileReader').and.returnValue(
            (mockReader as unknown) as FileReader

        );
        let data = AttachmentFileHelper.readFile(files.target.files[0]);
        expect(data).toBeDefined();
    })

    function mockDialogData() {
        let dialogData: DialogData = { infoHeader: "Header", infoMessage: "Message", buttonName: "OK" };
        return dialogData;
    }

    function mockFiles() {
        const fileImage = new File(['("123")'], 'File.png', { type: 'image/png' })
        return { target: { files: [fileImage] } }
    }
});