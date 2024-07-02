import { ApiParams } from "../modals/api-params.modal";

//replace '.' with '-' in params from API Response
export class DataTransformService {

    static getObjectWithFormattedParams(apiResponse: ApiParams) {
        const formaatedDto: ApiParams = {};
        Object.entries(apiResponse).forEach(([key, value]) => {
            key = key.split('.').join('-');
            formaatedDto[key] = value;
        });
        return formaatedDto;
    }

    static sortArray(arrayToSort: ApiParams[], keyToSort: string, desc: boolean) {
        arrayToSort.sort((a: ApiParams, b: ApiParams) => {
            if (a[keyToSort] > b[keyToSort]) {
                return !desc ? 1 : -1;
            } else if (a[keyToSort] < b[keyToSort]) {
                return !desc ? -1 : 1;
            }
            return 0;
        })
    }

    static deepCopy(obj: any | null): any {
        let copy;

        if (null === obj || "object" != typeof (obj)) return obj;

        //Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        //Array
        if (obj instanceof Array) {
            copy = [];
            for (let i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.deepCopy(obj[i]);
            }
            return copy;
        }

        //object
        if (obj instanceof Object) {
            copy = {};
            for (let attr in obj) {
                if (obj.hasOwnProperty(attr))
                    (copy as any)[attr] = this.deepCopy(obj[attr]);
            }
            return copy;
        }
    }

    static convertUTCToAEST(utcDateTime: Date) {
        const dateOptions: Intl.DateTimeFormatOptions = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric"
        };
        return utcDateTime.toLocaleString('en-AU', dateOptions).replace(/\//g, '-').replace(',', '').toUpperCase();
    }
}