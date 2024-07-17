# Attachment File Helper

## Summary

The **Attachment File Helper** is a utility class designed to facilitate operations related to file attachments in an Angular application. This includes formatting file sizes, validating file extensions, checking file size limits, and reading file contents.

## Features

- Convert file sizes from bytes to a human-readable format.
- Validate allowed file extensions for attachments.
- Check if the file size is within specified limits.
- Read file contents asynchronously.

## Constants

This class relies on the following constants, which should be defined in your `constants/constant.ts` file:

```typescript
export const ATTACHMENT_FILE_EXTENSION_TYPE_ALLOWED = [
    'jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx', 'xls', 'xlsx'
];
