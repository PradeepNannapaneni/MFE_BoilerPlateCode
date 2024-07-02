import { TestBed } from "@angular/core/testing";
import { DateService } from "./date.service";

describe('DateService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('getPastDate should return past date', () => {
        const format = 'yyyy-MM-dd';
        let day = new Date();
        day.setDate(day.getDate() - 1);
        const pastDate = DateService.getPastDate(1, format);
        expect((new Date(pastDate)).getDate()).toEqual(day.getDate());
    });

    it('getPastDate should return past date without any format', () => {
        let day = new Date();
        day.setDate(day.getDate() - 1);
        const pastDate = DateService.getPastDate(1);
        expect((new Date(pastDate)).getDate()).toEqual(day.getDate());
    });

    it('getPastDateBySeconds should return past date', () => {
        const format = 'yyyy-MM-dd';
        let day = new Date();
        day.setSeconds(day.getSeconds() - 1)
        const pastDate = DateService.getPastDateBySeconds(10, format, false);
        expect((new Date(pastDate)).getDate()).toEqual(day.getDate());
    });

    it('getPastDateBySeconds should return past date with utc as true', () => {
        const format = 'yyyy-MM-dd';
        let day = new Date();
        day.setSeconds(day.getSeconds() - 1);
        const pastDate = DateService.getPastDateBySeconds(10, format, true);
        expect((new Date(pastDate)).getDate()).toEqual(day.getDate());
    });

    it('getDatePart should return date part', () => {
        const date: string = '23-08-2022 11:11:12';
        let finalDate = DateService.getDatePart(date);
        expect(finalDate).toBe('23-08-2022');
    });

    it('getCurrentDate should return current date', () => {
        const format = 'yyyy-MM-dd';
        let day = new Date();
        day.setDate(day.getDate());
        const currentDate = DateService.getCurrentDate(format);
        expect((new Date(currentDate)).getDate()).toEqual(day.getDate());
    });

    it('timeSince should return elapsed time', () => {
        const spanMin = DateService.timeSince('31-01-2023 11:11:11', '31-01-2023 11:12:12');
        expect(spanMin).toEqual('1 min ago');

        const spanHour = DateService.timeSince('31-01-2023 11:11:11', '31-01-2023 12:12:12');
        expect(spanHour).toEqual('1 hour ago');

        const spanMonth = DateService.timeSince('31-01-2023 11:11:11', '31-02-2023 11:11:11');
        expect(spanMonth).toEqual('1 month ago');
    });

    it('timeSinceSeconds should return elapsed time', () => {
        const spanMin = DateService.timeSinceSeconds(80);
        expect(spanMin).toEqual('1 min ago');

        const spanHour = DateService.timeSinceSeconds(3700);
        expect(spanHour).toEqual('1 hour ago');

        const spanDay = DateService.timeSinceSeconds(120003);
        expect(spanDay).toEqual('1 day ago');

        const spanMonth = DateService.timeSinceSeconds(3092000);
        expect(spanMonth).toEqual('1 month ago');

        const spanYear = DateService.timeSinceSeconds(50536000);
        expect(spanYear).toEqual('1 year ago');

        const spanJustNow = DateService.timeSinceSeconds(0);
        expect(spanJustNow).toEqual('Just Now');
    });

    it('formatTimeSince should return time in format', () => {
        const span = DateService['formatTimeSince'](2, 'min');
        expect(span).toEqual('2 mins ago');
    });

    it('getDateSearchParam should return formatted search pattern', () => {
        const date = DateService.getDateSearchParam('31-01-2023');
        expect(date).toEqual('2023-01-31');
    });

    it('getDateSearchParam should return formatted search pattern', () => {
        const date = DateService.getDateSearchParam('2023');
        expect(date).toEqual('2023');
    });

    it('should return false for invalid Date Range, startDate > endDate', () => {
        expect(DateService.dateDifference('01/12/2022', '01/11/2022', 12)).toBe(false);
    });

    it('should return false for if selected range exceeds 12 months', () => {
        expect(DateService.dateDifference('01/12/2022', '02/12/2023', 12)).toBe(false);
    });

    it('should return false for if date format is invalid', () => {
        expect(DateService.dateDifference('2022/10/01', '02/12/2023', 12)).toBe(false);
    });

    it('should validate date pattern', () => {
        const isVaid = DateService.validateDateFormat('12-10-2023');
        expect(isVaid).toBeFalse();
    });

    it('should set time to 00:00:00.000', () => {
        const testDate = new Date('2023-11-16T15:45:30.000Z');
        const expectDate = new Date(testDate);
        expectDate.setHours(0, 0, 0, 0);
        const resultDate = DateService.getTodayDate(testDate);

        expect(resultDate).toEqual(expectDate);
        expect(expectDate.getHours()).toEqual(0);
        expect(expectDate.getMinutes()).toEqual(0);
        expect(expectDate.getSeconds()).toEqual(0);
        expect(expectDate.getMilliseconds()).toEqual(0);
    });

    it('formatDate should format date', () => {
        const formatDate = DateService.formatDate(new Date(2024, 2, 4).toLocaleString(), 'YYYY-MM-DD');
        expect(formatDate).toBeTruthy();
    });

    it('should return date in reverse format', () => {
        const reverseDate = DateService.reverseDate('4-4-2024');
        expect(reverseDate).toEqual('2024/4/4');
    });

})