import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import productApi from "../../../Api/productApi";
import ProductList from "../components/ProductFeature/ProductList";
import ProductSkeleton from "../components/Skeletons/ProductSkeleton";
import ProductSort from "../components/Sort/ProductSort";
import ProductFilters from "../components/Filters/ProductFilters";
import ScrollTop from "../../ScrollTop";
import FiltersViewer from "../components/Filters/FiltersViewer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from 'query-string'

function ListProductPages(props) {
    let navigate = useNavigate();
    const { search } = useLocation()
    const queryParams = queryString.parse(search)
    // get search params

    // state to save data product list...
    const [productList, setProductList] = useState();
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        limit: 10,
        total: 10,
        page: 1,
    });

    // const [filters, setFilters] = useState({
    //     _page: 1,
    //     _limit: 12,
    //     _sort: "salePrice:ASC",
    // });
    const [filters, setFilters] = useState(() => ({
        ...queryParams,
        _page: Number.parseInt(queryParams._page) || 1,
        _limit: Number.parseInt(queryParams._limit) || 12,
        _sort: queryParams._sort || "salePrice:ASC",
    }));


    // call API
    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log("Failed when fetch products api :", error);
            }
            setLoading(false);
        })();
    }, [filters]);
    // every each filter change -> we will get product list again..

    // sync filters to URL
    useEffect(() => {
        navigate({
            pathname: '/products',
            search: queryString.stringify(filters)
        });
    }, [navigate, filters])

    // event
    const handleChangePage = (e, page) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: page,
        }));
    };
    const handleSortChange = (newSortValue) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _sort: newSortValue,
        }));
    };
    const handleFiltersChange = (newFilters) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        }));
    };

    const handleFiltersViewer = (newFilters) => {
        setFilters(newFilters);
    };
    // render
    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    <Grid item sx={{ width: "280px" }}>
                        <Paper elevation={0} variant="outlined" square>
                            <ProductFilters
                                filters={filters}
                                onChange={handleFiltersChange}
                            />
                        </Paper>
                    </Grid>
                    <Grid item sx={{ flex: "1" }}>
                        <Paper elevation={0} variant="outlined" square>
                            <ProductSort
                                conditionSort={filters._sort}
                                onChange={handleSortChange}
                            />
                            <FiltersViewer filters={filters} onChange={handleFiltersViewer} />

                            {loading ? (
                                <ProductSkeleton />
                            ) : (
                                <ProductList product_data={productList} />
                            )}

                            <Box
                                sx={{ display: "flex", justifyContent: "center", mt: 4, pb: 4 }}
                            >
                                <Pagination
                                    onChange={handleChangePage}
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    color="primary"
                                    page={pagination.page}
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <ScrollTop />
        </Box>
    );
}

export default ListProductPages;
