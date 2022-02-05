import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { HOST } from "../../../../constant/hostURL";
import { formatPrice } from "../../../../utils/common";
import "./MiniCartItem.scss";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../cartSlice";

MiniCartItems.propTypes = {
    cartList: PropTypes.array,
};

function MiniCartItems({ cartList = [] }) {
    const dispatch = useDispatch()

    const handleRemoveCartItem = (idNeedToRemove) => {
        dispatch(removeFromCart(idNeedToRemove))
    }

    return (
        <Box component="ul" className="cart__list">
            {cartList.map((item) => (
                <li key={item.id} className="cart__item">
                    <img
                        src={
                            item.productDetail.thumbnail?.url
                                ? `${HOST.BASE_URL}${item.productDetail.thumbnail?.url}`
                                : HOST.PLACEHOLDER_IMAGE
                        }
                        alt={item.productDetail.name}
                        style={{ width: "50px", height: "50px" }}
                    />
                    <Typography sx={{ width: '230px', fontSize: '16px' }}>{item.productDetail.name}</Typography>

                    <Typography>{formatPrice(item.productDetail.salePrice)}</Typography>

                    <Typography>{item.quantity}</Typography>

                    <Typography sx={{ fontWeight: 'bold' }}>
                        {formatPrice(item.productDetail.salePrice * item.quantity)}
                    </Typography>

                    <DeleteForeverOutlinedIcon sx={{ color: "red", cursor: 'pointer' }} onClick={() => handleRemoveCartItem(item.id)} />
                </li>
            ))}
        </Box>
    );
}

export default MiniCartItems;
