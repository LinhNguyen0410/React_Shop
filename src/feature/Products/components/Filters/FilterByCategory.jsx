import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import categoryApi from "../../../../Api/categoryAPI";
import CategoryListSkeleton from "../Skeletons/CategoryListSkeleton";
import './style.css'

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
    const [loading, setLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);
    const [activeId, setActiveId] = useState();

    // call API
    useEffect(() => {
        (async () => {
            try {
                const responseCategories = await categoryApi.getAll();
                setCategoryList(responseCategories);
            } catch (error) {
                console.log("Failed to fetch category list", error);
            }
            setLoading(false);
        })();
    }, []);

    // event
    const handleCategoryClick = (category, index) => {
        if (onChange) onChange(category.id);
        setActiveId(category.id);
    };

    return (
        <Box>
            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    pt: 2,
                }}
            >
                Danh Mục
            </Typography>
            {loading ? (
                <CategoryListSkeleton />
            ) : (
                <ul
                    style={{
                        listStyle: "none",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        minHeight: "180px",
                    }}
                >
                    {categoryList.map((category, index) => (
                        <li className={activeId === category.id ? "active" : ""}
                            key={category.id} onClick={() => handleCategoryClick(category, index)}>
                            {category.name}
                        </li>
                    ))}
                </ul>
            )
            }
        </Box >
    );
}

export default FilterByCategory;
