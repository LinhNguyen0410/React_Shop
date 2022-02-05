import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import productApi from "../../../Api/productApi";
import { addToCart, showMiniCart } from "../../Cart/cartSlice";
import AdditionalDetail from "../components/Detail/AdditionalDetail";
import AddToCartForm from "../components/Detail/AddToCartForm";
import DescriptionDetail from "../components/Detail/DescriptionDetail";
import DetailTabs from "../components/Detail/DetailTabs";
import ProductInfo from "../components/Detail/ProductInfo";
import ProductThumbnail from "../components/Detail/ProductThumbnail";
import ReviewDetail from "../components/Detail/ReviewDetail";

function DetailPage(props) {
    const dispatch = useDispatch()
    const params = useParams();
    const productID = params.productId;
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const responseProduct = await productApi.get(productID);
                setProductDetail(responseProduct);
            } catch (error) {
                console.log("Failed to fetch data :", error);
            }
        })();
    }, []);

    //...event
    const handleSubmitQuantityForm = (formValues) => {
        const action = addToCart({
            id: productDetail.id,
            productDetail,
            quantity: formValues.quantity
        })
        dispatch(action)
        dispatch(showMiniCart())
    };

    return (
        <Box>
            <Container>
                {/* Info product components */}
                <Paper elevation={0}>
                    <Grid container spacing={3} sx={{ mt: 1 }}>
                        <Grid
                            item
                            sx={{ width: "450px", p: 1, borderRight: "1px solid #ccc" }}
                        >
                            <ProductThumbnail product={productDetail} />
                        </Grid>
                        <Grid item sx={{ flex: "1", p: 1 }}>
                            <ProductInfo product={productDetail} />
                            <AddToCartForm onSubmit={handleSubmitQuantityForm} />
                        </Grid>
                    </Grid>
                </Paper>

                {/* Tabs components */}
                <Paper sx={{ mt: 4, pb: 5 }}>
                    <DetailTabs />
                    <Routes>
                        <Route
                            path={""}
                            element={<DescriptionDetail product={productDetail} />}
                        ></Route>
                        <Route path="additional" element={<AdditionalDetail />}></Route>
                        <Route path="review" element={<ReviewDetail />}></Route>
                    </Routes>
                </Paper>
            </Container>
        </Box>
    );
}

export default DetailPage;
