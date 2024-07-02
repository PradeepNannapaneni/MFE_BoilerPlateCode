import { ATTACHMENT_FILE_EXTENSION_TYPE_ALLOWED, FILE_BYTE_CONVERTER_FACTOR } from "../constants/constant";
import { Observable, Subject } from "rxjs";

export class AttachmentFileHelper {
    static formatBytes(byteSizeToConvert: number, byteIndex: number, decimals = 3): number {
        if (byteSizeToConvert === 0) {
            return 0;
        }
        return parseFloat((byteSizeToConvert / Math.pow(FILE_BYTE_CONVERTER_FACTOR, byteIndex)).toFixed(decimals < 0 ? 0 : decimals));
    }

    static isFileAttachmentExtensionAllowed(fileExtension: string) {
        return ATTACHMENT_FILE_EXTENSION_TYPE_ALLOWED.includes(fileExtension);
    }

    static isFileSizeWithInLimits(fileAttachmentSize: number, fileAttachmentAllowedSizeLimit: number) {
        return fileAttachmentSize <= fileAttachmentAllowedSizeLimit;
    }

    static readFile(file: File): Observable<string> {
        const fileReadAsSubject = new Subject<string>();
        var reader = new FileReader();
        reader.onload = () => {
            const content: string = reader.result as string;
            fileReadAsSubject.next(content);
            fileReadAsSubject.complete();
        }
        reader.readAsDataURL(file);

        return fileReadAsSubject.asObservable();
    }
}