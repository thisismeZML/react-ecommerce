import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationProduct = ({ currentPage, itemPerPage, totalItem, paginate }) => {
    const totalPages = Math.ceil(totalItem / itemPerPage);
    const paginationNumber = [];

    if (totalPages <= 5) {
        // If total pages are less than or equal to 5, show all pages
        for (let i = 1; i <= totalPages; i++) {
            paginationNumber.push(i);
        }
    } else {
        // Always show first page
        paginationNumber.push(1);
        if (currentPage > 3) {
            paginationNumber.push('ellipsis-left');
        }
        // Show current page, one page before, and one page after
        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            paginationNumber.push(i);
        }

        if (currentPage < totalPages - 2) {
            paginationNumber.push('ellipsis-right');
        }
        // Always show last page
        paginationNumber.push(totalPages);
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                    />
                </PaginationItem>
                {paginationNumber.map((number, index) => (
                    <PaginationItem key={index}>
                        {number === 'ellipsis-left' || number === 'ellipsis-right' ? (
                            <PaginationEllipsis />
                        ) : (
                            <PaginationLink
                                href="#"
                                className="pagination-link"
                                onClick={() => paginate(number)}
                                isActive={currentPage === number}
                            >
                                {number}
                            </PaginationLink>
                        )}
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationProduct;
