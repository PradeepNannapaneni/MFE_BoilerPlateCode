import { DatePipe } from "@angular/common";
import * as moment from 'moment';
import { DATE_REGEX } from "../constants/constants";

export class DateService {
    static getCurrentDate(format?: string, utc?: boolean): string {
        return DateService.getPastDateBySeconds(0, format, utc);
    }

    static formatDate(date: string, format: string) {
        return moment(date).format(format);
    }

    static getPastDate(noOfDays: number, format?: string, utc?: boolean): string {
        return DateService.getPastDateBySeconds(noOfDays * 24 * 60 * 60, format, utc);
    }

    static getPastDateBySeconds(noOfSeconds: number, format?: string, utc?: boolean): string {
        const today = new Date();
        let pastDate = utc ? new Date(today.getTime() + today.getTimezoneOffset() * 60000) : new Date(today);
        pastDate = new Date(pastDate.getTime() - (noOfSeconds * 1000));
        const datePipe: DatePipe = new DatePipe('en-AU');
        return datePipe.transform(pastDate, format) ?? '';
    }

    static getDatePart(date: string) {
        let datePart = date;
        if (date.indexOf(' ') > -1) {
            datePart = date.toString().split(' ')[0];
        }
        return datePart;
    }

    static reverseDate(date: string) {
        const dateParts: string[] = date.split('-');
        const part1 = dateParts[0];
        const part2 = dateParts[1];
        const part3 = dateParts[2];
        return `${part3}/${part2}/${part1}`;
    }

    static timeSince(date: string, from: string, format: string = 'YYYY-MM-DD hh:mm:ss') {
        let dateMomentObject = moment(date, format);
        let dateObject = dateMomentObject.toDate();
        let fromObject = new Date();
        if (from) {
            dateMomentObject = moment(from, format);
            fromObject = dateMomentObject.toDate();
        }
        let seconds = (fromObject.getTime() - dateObject.getTime()) / 1000;

        return this.timeSinceSeconds(seconds);
    }

    static timeSinceSeconds(seconds: number) {
        let intervals = [
            { interval: 31536000, unit: 'year' },
            { interval: 2592000, unit: 'month' },
            { interval: 86400, unit: 'day' },
            { interval: 3600, unit: 'hour' },
            { interval: 60, unit: 'min' }
        ];
        let formattedTime = '';
        intervals.forEach(obj => {
            let timeInterval = seconds / obj.interval;
            if (timeInterval > 1 && !formattedTime) {
                formattedTime = this.formatTimeSince(Math.floor(timeInterval), obj.unit);
            }
        });

        return formattedTime ? formattedTime : this.formatTimeSince(0, "Just Now");
    }

    static formatTimeSince(interval: number, timeSpan: string) {
        const pluralText = interval === 1 ? '' : 's';
        return interval ? interval + ' ' + timeSpan + pluralText + ' ago' : timeSpan;
    }

    static getDateSearchParam(searchTerm: string): string {
        let dateSearchTerm = searchTerm;
        if (searchTerm.indexOf('-') > -1 || searchTerm.indexOf('/') > -1) {
            dateSearchTerm = searchTerm.split(/[-/]+/).reverse().join('-');
        }
        return dateSearchTerm;
    }

    static validateDateFormat(date: string) {
        return DATE_REGEX.test(date);
    }

    static dateDifference(startDateStr: string, endDateStr: string, maxMonthDifference: number): boolean {
        const [startDay, startMonth, startYear] = startDateStr.split('/').map(Number);
        const [endDay, endMonth, endYear] = endDateStr.split('/').map(Number);
        const startdate = new Date(startYear, startMonth - 1, startDay);
        const enddate = new Date(endYear, endMonth - 1, endDay);
        if (startdate > enddate) {
            return false;
        }
        const diffMillSeconds = enddate.getTime() - startdate.getTime();
        const diffDays = diffMillSeconds / (1000 * 60 * 60 * 24);
        return diffDays <= Math.floor(maxMonthDifference * 30.44)
    }

    static getTodayDate(today: Date): Date {
        today.setHours(0, 0, 0, 0);
        return today;
    }
}