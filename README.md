# data-paginate

`data-paginate` is a React hook for handling pagination with an array of data. It provides an easy way to paginate data with simple navigation functions.

## Installation
```sh
npm install react-pagination-component
```

## Usage

```jsx
import React from 'react';
import { usePagination } from 'react-pagination-component';

const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // Add more items as needed
];

function MyComponent() {
    const limit = 10; // Number of items per page
    const { paginatedData, page, totalPages, nextPage, prevPage, goToPage } = usePagination(data, limit);

    return (
        <div>
            <ul>
                {paginatedData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <div>
                <button onClick={prevPage} disabled={page === 1}>
                    Previous
                </button>
                <span>
                    Page {page} of {totalPages}
                </span>
                <button onClick={nextPage} disabled={page === totalPages}>
                    Next
                </button>
            </div>
            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => goToPage(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default MyComponent;
```

## Props

### `usePagination` Hook Parameters
- **`data`** *(Array)* - Array of items to paginate.
- **`limit`** *(Number)* - Number of items per page.
- **`initialPage`** *(Number, optional, default: `1`)* - Initial page number.

### `usePagination` Hook Return Value
- **`paginatedData`** *(Array)* - Items for the current page.
- **`page`** *(Number)* - Current page number.
- **`totalPages`** *(Number)* - Total number of pages.
- **`nextPage`** *(Function)* - Moves to the next page.
- **`prevPage`** *(Function)* - Moves to the previous page.
- **`goToPage(pageNumber)`** *(Function)* - Navigates to a specific page.

## License
This project is licensed under the ISC License.

