import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import QuantityField from "../../../../components/FormControl/QuantityField";

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit }) {
    const schema = yup.object().shape({
        quantity: yup
            .number()
            .min(1, "Minimum value is 1.")
            .max(100, "Maximum value is 100.")
            .required("Please enter quantity.")
            .typeError("Please enter a number."),
    });

    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Box>
                <QuantityField
                    id="outlined-basic"
                    name="quantity"
                    label="Số lượng*"
                    variant="outlined"
                    form={form}
                />
                <Button
                    type="submit"
                    sx={{ mt: 1, mb: 2, width: "250px", backgroundColor: "#FF6871" }}
                    variant="contained"
                >
                    Mua Ngay
                </Button>
            </Box>
        </form>
    );
}

export default AddToCartForm;
