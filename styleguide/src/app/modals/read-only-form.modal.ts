export interface ReadOnlyFormData {
    sectionName: string;
    display: boolean;
    collapsed: boolean;
    order: number;
    fields: {
        key: string;
        value: string;
        type?: string;
    }[];
}