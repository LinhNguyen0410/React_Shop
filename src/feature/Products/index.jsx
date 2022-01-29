import { Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import ListProductPages from './pages/ListProductPages';

function ProductFeature(props) {

    return (
        <Box paddingTop={4} >
            <Routes>
                {/* if u want use path of parent component -> let to it is an empty path. */}
                <Route path="" element={<ListProductPages />} />
            </Routes>
        </Box>

    );
}

export default ProductFeature;