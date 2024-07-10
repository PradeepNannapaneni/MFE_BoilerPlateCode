export interface Section {
    sectionName: string,
    display: boolean,
    collapsible: boolean,
    order: number,
    fields: Field[]
}

export interface Field {
    key: string,
    value: string,
}

export interface BookDetailData {  
    sections: Section[]
    imageLink?: string,
    title: string,
    authors: string,
    description: string,
}
  
export interface BookDetail{
    "kind": "string",
    "id": "string",
    "etag": "string",
    "selfLink": "string",
    "volumeInfo": {
      "title": "string",
      "authors": ["string"],
      "publisher": "string",
      "publishedDate": "string",
      "description": "string",
      "industryIdentifiers": [
        {
          "type": "string",
          "identifier": "string"
        }
      ],
      "pageCount": "integer",
      "categories": ["string"],
      "averageRating": "number",
      "ratingsCount": "integer",
      "imageLinks": {
        "smallThumbnail": "string",
        "thumbnail": "string"
      },
      "language": "string",
      "previewLink": "string",
      "infoLink": "string",
      "canonicalVolumeLink": "string"
    },
    "saleInfo": {
      "country": "string",
      "saleability": "string",
      "isEbook": "boolean"
    },
    "accessInfo": {
      "country": "string",
      "viewability": "string",
      "embeddable": "boolean",
      "publicDomain": "boolean",
      "textToSpeechPermission": "string",
      "epub": {
        "isAvailable": "boolean",
        "acsTokenLink": "string"
      },
      "pdf": {
        "isAvailable": "boolean",
        "acsTokenLink": "string"
      },
      "webReaderLink": "string",
      "accessViewStatus": "string"
    },
    "searchInfo": {
      "textSnippet": "string"
    }
  }

