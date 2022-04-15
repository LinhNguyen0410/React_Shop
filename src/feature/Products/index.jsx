import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdditionalDetail from "./components/Detail/AdditionalDetail";
import DescriptionDetail from "./components/Detail/DescriptionDetail";
import ReviewDetail from "./components/Detail/ReviewDetail";
import DetailPage from "./pages/DetailPage";
import ListProductPages from "./pages/ListProductPages";

function ProductFeature(props) {
    return (
        <Box paddingTop={4}>
            <Routes>
                {/* if u want use path of parent component -> let to it is an empty path. */}
                <Route path="" element={<ListProductPages />} />
                <Route path="/:productId/*" element={<DetailPage />}>
                </Route>
            </Routes>
        </Box>
    );
}

export default ProductFeature;
