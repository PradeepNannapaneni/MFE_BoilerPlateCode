import { TestBed } from "@angular/core/testing";
import { DataTransformService } from "./data-transform.service";

describe('DataTransformService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('deepCopy should return clone', () => {
        let returnValue = DataTransformService.deepCopy('clone');
        expect(returnValue).toEqual('clone');

        let date = new Date();
        returnValue = DataTransformService.deepCopy(date);
        expect(returnValue).toEqual(date);

        returnValue = DataTransformService.deepCopy({ 'test': 'test' });
        expect(returnValue).toEqual({ 'test': 'test' });
    });

    it('should replace . with -', () => {
        const mockResponse = {
            'test.title': 'test value'
        }
        const mockFormattedResponse = DataTransformService.getObjectWithFormattedParams(mockResponse);
        expect(mockFormattedResponse).toEqual({
            'test-title': 'test value'
        });
    });

    it('should sort array in descending order based on key', () => {
        const arrayToSort1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }, { id: 3, name: 'Bob' }];
        const arrayToSort2 = [{ id: 3, name: 'John' }, { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

        DataTransformService.sortArray(arrayToSort1, 'name', true);
        expect(arrayToSort1).toEqual([{ id: 1, name: 'John' },  { id: 3, name: 'Bob' }, { id: 2, name: 'Alice' } ]);

        DataTransformService.sortArray(arrayToSort2, 'id', false);
        expect(arrayToSort2).toEqual([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'John' }]);

    });

    it('should convert UTC time to AEST format', () => {
        const AESTDate = DataTransformService.convertUTCToAEST(new Date());
        const dateOptions: Intl.DateTimeFormatOptions = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric"
        };
        expect(AESTDate).toEqual(new Date().toLocaleString('en-AU', dateOptions).replace(/\//g, '-').replace(',', '').toUpperCase());
    })

})