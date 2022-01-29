import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import productApi from "../../../Api/productApi";
import ProductList from "../components/ProductFeature/ProductList";
import ProductSkeleton from "../components/Skeletons/ProductSkeleton";

function ListProductPages(props) {
    // state to save data product list...
    const [productList, setProductList] = useState()
    const [loading, setLoading] = useState(true)
    console.log(productList);

    // call API 
    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll({ _page: 1, _limit: 10 })
                setProductList(data)
            } catch (error) {
                console.log('Failed when fetch products api :', error);
            }
            setLoading(false)
        })()
    }, [])

    // render
    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    <Grid item sx={{ width: '260px' }}>
                        <Paper elevation={0} variant="outlined" square>Left Column</Paper>
                    </Grid>
                    <Grid item sx={{ flex: '1' }}>
                        <Paper elevation={0} variant="outlined" square>
                            {loading
                                ? <ProductSkeleton />
                                : <ProductList product_data={productList} />}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
}

export default ListProductPages;
