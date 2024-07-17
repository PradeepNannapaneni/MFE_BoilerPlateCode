# Readonly Form Component

## Summary

The **Readonly Form Component** is an Angular component designed to display form data in a read-only format. It presents structured data in sections, allowing users to expand or collapse sections as needed.

## Features

- Displays an array of form data organized into sections.
- Allows toggling of section visibility (expand/collapse).
- Customizable display properties for each section.

## Inputs

| Input               | Type               | Default Value              | Description                          |
|---------------------|--------------------|----------------------------|--------------------------------------|
| `readOnlyFormData`  | `ReadOnlyFormData[]` | `[]`                       | An array of data to be displayed in the form. |

## Example Usage

To use the `ReadonlyFormComponent`, simply include it in your template and pass the required input.

**app.component.html**

```html
<styleguide-readonly-form [readOnlyFormData]="formData"></styleguide-readonly-form>
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