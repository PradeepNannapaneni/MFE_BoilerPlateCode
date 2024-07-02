export interface AddAttachments {
    Id: string;
    fileName: string;
    fileType: string;
    fileData: string
}

export interface AttachmentsInData {
    Id: string;
    fileMaxSize: number;
    fileUnit: string;
    fileDescription: string;
    fileAction: string;
    header: string;
    isOpen: boolean
}