import { useState, useMemo } from 'react';

interface UsePaginationResult<T> {
    paginatedData: T[];
    page: number;
    totalPages: number;
    nextPage: () => void;
    prevPage: () => void;
    goToPage: (pageNumber: number) => void;
}

function usePagination<T>(data: T[], limit: number, initialPage: number = 1): UsePaginationResult<T> {
    const [page, setPage] = useState<number>(initialPage);

    const totalPages = useMemo<number>(() => {
        return Math.ceil(data.length / limit);
    }, [data.length, limit]);

    const paginatedData = useMemo<T[]>(() => {
        const start = (page - 1) * limit;
        const end = start + limit;
        return data.slice(start, end);
    }, [data, page, limit]);

    const nextPage = () => {
        setPage((prevPage:number) => Math.min(prevPage + 1, totalPages));
    };

    const prevPage = () => {
        setPage((prevPage:number) => Math.max(prevPage - 1, 1));
    };

    const goToPage = (pageNumber: number) => {
        const page = Math.max(1, Math.min(pageNumber, totalPages));
        setPage(page);
    };

    return {
        paginatedData,
        page,
        totalPages,
        nextPage,
        prevPage,
        goToPage,
    };
}

export default usePagination;
