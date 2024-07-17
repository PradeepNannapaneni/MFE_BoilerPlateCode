# This Repo Contains 4 Applications

## 1. single-spa-root
**Description:** A framework for building and deploying JavaScript micro frontends in a single app.

### Config:
- **src/index.ejs:** Update paths for MFE builds.
- **src/Org-root-config.ts:** Register the MFE.

---

## 2. styleguide
**Description:** An Angular app with reusable components for all Angular MFEs.

### Components:
- **ErrorPageComponent:** Customizable error page.
- **LoaderComponent:** Loading spinner.
- **NoDataComponent:** Message for no data available.
- **ReadonlyFormComponent:** Read-only form display.
- **TableComponent:** Displays tabular data with sorting and pagination.
- **TableActionsComponent:** Action list for table rows.

---

## 3. Utility
**Description:** An Angular app with generic services for all MFEs.

### Services:
- **AuthService:** Manages authentication and sessions.
- **DataTransformService:** Transforms API responses.
- **StorageService:** Handles local storage and CSV export.
- **UtilityApiService:** Simplifies HTTP requests.
- **ErrorInterceptor:** Manages request errors and retries.
- **GlobalErrorHandler:** Central error handling for the app.
- **CustomEventService:** Tracks server errors and logs events.

---

## 4. Home
**Description:** An Angular app showcasing the usage of components and services from the styleguide and Utility.

### Components:
- **BookDetailsComponent:** Shows detailed book info and navigation options using `ReadonlyFormComponent` from the Styleguide.
- **BookListComponent:** Displays a list of books with sorting and pagination using `TableComponent` from the Styleguide.
- **BookSearchComponent:** User interface for searching books.

### Services:
- **BookService:** Manages book data API interactions.
- **ApiService:** Centralized HTTP request service using `HttpClient`.
