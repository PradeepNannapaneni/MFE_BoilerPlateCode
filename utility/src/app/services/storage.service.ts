import * as XLSX from 'xlsx';

export class StorageService {
    static setItem(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    static getItem(key: string) {
        localStorage.getItem(key);
    }

    static removeItem(key: string) {
        localStorage.removeItem(key);
    }

    static clearAll() {
        localStorage.clear();
    }

    static exportToCSV(data: any, fileName: string): void {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'data');
        XLSX.writeFile(wb, fileName);
    }

    static getExportData(allTableData: any, header: any) {
        let data: any[] = [];
        if (allTableData?.rows?.length > 0) {
            allTableData?.rows?.map((item: any) => {
                let object: any = {};
                item.cells?.map((i: any, idx: number) => {
                    object[header[idx].value] = i.value;
                });
                if (object) data.push(object);
            });
        }
        return data;
    }
}