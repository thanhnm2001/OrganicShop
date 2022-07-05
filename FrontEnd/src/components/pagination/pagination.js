import { Button } from "@mui/material";
import React from "react";
export default function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { page, size, totalRows } = pagination;
    function handlePageChange(newPage) {
        if (onPageChange) {
            console.log("new page:" + newPage)
            onPageChange(newPage);
        }
    }
    return (
        <div>
            <Button onClick={() => handlePageChange(page - 1)} variant="outlined">Pre</Button>
            <Button onClick={() => handlePageChange(page + 1)} variant="outlined">Next</Button>
        </div>
    )
}