import { TestBed } from "@angular/core/testing";
import { StorageService } from "./storage.service";

describe('StorageService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should set item', () => {
        expect(StorageService.setItem('test', 'test')).toBeFalsy();
    });

    it('should get item', () => {
        const key = 'testKey';
        const expectedValue = 'testValue';
        spyOn(localStorage, 'getItem').and.returnValue(expectedValue);
        StorageService.getItem(key);
        expect(localStorage.getItem).toHaveBeenCalledWith(key);
    });

    it('should remove item', () => {
        expect(StorageService.removeItem('test')).toBeFalsy();
    });

    it('should clear items', () => {
        expect(StorageService.clearAll()).toBeFalsy();
    });

    it('should download file', () => {
        expect(StorageService.exportToCSV([], 'test')).toBeFalsy();
    });

    it('getExportData should called', () => {
        expect(StorageService.getExportData(mockData(), mockheader())).toBeDefined();
    });
})

function mockheader() {
    return [
        {
            'value': 'header1',
            'width': 1,
            'sort': null,
            'isSortable': true,
            'calculatedwidth': '12.6'
        },
        {
            'value': 'header2',
            'width': 1,
            'sort': null,
            'isSortable': true,
            'calculatedwidth': '12.6'
        },
        {
            'value': 'header3',
            'width': 1,
            'sort': null,
            'isSortable': true,
            'calculatedwidth': '12.6'
        }
    ]
}

function mockData() {
    return {
        'rows': [
            {
                'cells': [
                    {
                        'value': 'XXX',
                        'color': null,
                        'iconShowAfter': false,
                        'width': 1
                    },
                    {
                        'value': '23-06-2023',
                        'color': null,
                        'iconShowAfter': false,
                        'width': 0.8
                    },
                    {
                        'value': 'name',
                        'color': null,
                        'iconShowAfter': false,
                        'width': 1
                    }
                ]
            },
            {
                'cells': [
                    {
                        'value': 'XXX',
                        'color': null,
                        'iconShowAfter': false,
                        'width': 1
                    },
                    {
                        'value': '23-06-2023',
                        'color': null,
                        'iconShowAfter': false,
                        'width': 0.8
                    },
                    {
                        'value': 'name',
                        'color': null,
                        'iconShowAfter': false,
                        'width': 1
                    }
                ]
            }
        ]
    }
}