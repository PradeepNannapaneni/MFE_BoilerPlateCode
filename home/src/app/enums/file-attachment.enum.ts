export enum AttachmentFilesizeConverter {
    bytes, // Index 0 : File read is in bytes so this is used for converting
    kB, // Index 1 : 
    MB, // Index 2 : indicating multiplier of 2 to convert to MB
    GB
}