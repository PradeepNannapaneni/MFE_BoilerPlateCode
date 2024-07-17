# Readonly Form Component
## Summary

The **Readonly Form Component** is an Angular component designed to display structured read-only form data in a collapsible format. It organizes data into sections and allows users to expand or collapse sections to view detailed information.

## Features

- Displays form data sections dynamically based on input.
- Collapsible sections for better user experience.
- Supports custom styling to fit the application's design.

## Usage
```html
<styleguide-readonly-form [readOnlyFormData]="yourFormData"></styleguide-readonly-form>
```

## Sample readOnlyFormData
```json
"sections": [
    {
        "sectionName": "Volume Info",
        "display": true,
        "collapsible": false,
        "order": 1,
        "fields": [
        {
            "key": "Publisher",
            "value": "Simon and Schuster"
        },
        {
            "key": "Published Date",
            "value": "2024-05-28"
        },
        {
            "key": "Page Count",
            "value": "848"
        },
        {
            "key": "Categories",
            "value": "Computers / Internet / Web Programming, Computers / Languages / HTML, Computers / Languages / JavaScript"
        },
        {
            "key": "Average Rating"
        },
        {
            "key": "Ratings Count"
        },
        {
            "key": "Language",
            "value": "en"
        },
        {
            "key": "Preview Link",
            "value": "http://books.google.com.au/books?id=ufL6EAAAQBAJ&hl=&source=gbs_api"
        },
        {
            "key": "Info Link",
            "value": "https://play.google.com/store/books/details?id=ufL6EAAAQBAJ&source=gbs_api"
        },
        {
            "key": "Canonical Volume Link",
            "value": "https://play.google.com/store/books/details?id=ufL6EAAAQBAJ"
        }
        ]
    },
    {
        "sectionName": "Sale Info",
        "display": true,
        "collapsible": false,
        "order": 2,
        "fields": [
        {
            "key": "Country",
            "value": "AU"
        },
        {
            "key": "Saleability",
            "value": "FOR_SALE"
        },
        {
            "key": "Is Ebook",
            "value": "true"
        }
        ]
    },
    {
        "sectionName": "Access Info",
        "display": true,
        "collapsible": false,
        "order": 3,
        "fields": [
        {
            "key": "Country",
            "value": "AU"
        },
        {
            "key": "Viewability",
            "value": "PARTIAL"
        },
        {
            "key": "Embeddable",
            "value": "true"
        },
        {
            "key": "Public Domain",
            "value": "false"
        },
        {
            "key": "Text To Speech Permission",
            "value": "ALLOWED_FOR_ACCESSIBILITY"
        },
        {
            "key": "Epub Available",
            "value": "true"
        },
        {
            "key": "Acs Token Link",
            "value": "http://books.google.com.au/books/download/Pro_Angular_16-sample-epub.acsm?id=ufL6EAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        {
            "key": "Pdf Available",
            "value": "false"
        }
        ]
    }
    ]
```