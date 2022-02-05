import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
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
    const queryParams = useMemo(() => {
        const params = queryString.parse(search)
        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 12,
            _sort: params._sort || "salePrice:ASC",
            isFreeShip: params.isFreeShip === 'true',
            isPromotion: params.isPromotion === 'true',
        }
    }, [search])
    // useMemo nó giúp mình làm 1 việc là trả về 1 cái gì đó khi và chỉ khi cái depedence nó thay đổi...url thay đổi thì thằng search nó cũng đổi theo , do đó sẽ gọi lại queryParams để mình lấy dc 1 object search mới...


    // state to save data product list...
    const [productList, setProductList] = useState();
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        limit: 10,
        total: 10,
        page: 1,
    });

    // const [filters, setFilters] = useState(() => ({
    //     ...queryParams,
    //     _page: Number.parseInt(queryParams._page) || 1,
    //     _limit: Number.parseInt(queryParams._limit) || 12,
    //     _sort: queryParams._sort || "salePrice:ASC",
    // }));


    // call API
    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(queryParams);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log("Failed when fetch products api :", error);
            }
            setLoading(false);
        })();
    }, [queryParams]);
    // every each filter change -> we will get product list again..

    // sync filters to URL
    // useEffect(() => {
    //     navigate({
    //         pathname: '/products',
    //         search: queryString.stringify(filters)
    //     });
    // }, [navigate, filters])

    // event
    const handleChangePage = (e, page) => {
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     _page: page,
        // }));

        const filters = {
            ...queryParams,
            _page: page,
        }
        navigate({
            pathname: '/products',
            search: queryString.stringify(filters)
        });
    };
    const handleSortChange = (newSortValue) => {
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     _sort: newSortValue,
        // }));


        const filters = {
            ...queryParams,
            _sort: newSortValue,
        }
        navigate({
            pathname: '/products',
            search: queryString.stringify(filters)
        });
    };
    const handleFiltersChange = (newFilters) => {
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     ...newFilters,
        // }));
        const filters = {
            ...queryParams,
            ...newFilters,
        }
        navigate({
            pathname: '/products',
            search: queryString.stringify(filters)
        });
    };

    const handleFiltersViewer = (newFilters) => {
        // setFilters(newFilters);
        navigate({
            pathname: '/products',
            search: queryString.stringify(newFilters)
        });
    };
    // render
    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    <Grid item sx={{ width: "280px" }}>
                        <Paper elevation={0} variant="outlined" square>
                            <ProductFilters
                                filters={queryParams}
                                onChange={handleFiltersChange}
                            />
                        </Paper>
                    </Grid>
                    <Grid item sx={{ flex: "1" }}>
                        <Paper elevation={0} variant="outlined" square>
                            <ProductSort
                                conditionSort={queryParams._sort}
                                onChange={handleSortChange}
                            />
                            <FiltersViewer filters={queryParams} onChange={handleFiltersViewer} />

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
