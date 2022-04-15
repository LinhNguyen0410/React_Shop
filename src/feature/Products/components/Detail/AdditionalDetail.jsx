import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

AdditionalDetail.propTypes = {
    product: PropTypes.object,
};

function AdditionalDetail({ product = {} }) {
    const rows = [
        createData(
            product.name,
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 10),
            Math.ceil(Math.random() * 10),
            product.isFreeShip ? "Có ✅" : "Không ❌"
        ),
    ];

    return (
        <TableContainer
            component={Paper}
            sx={{ width: "90%", margin: "10px auto" }}
        >
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption style={{ textAlign: "center" }}>
                    TiKi cam kết cung cấp những sản phẩm chính hãng.
                </caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Tên Sản phẩm</TableCell>
                        <TableCell align="right">Khối lượng (g)</TableCell>
                        <TableCell align="right">Chiều dài(cm)</TableCell>
                        <TableCell align="right">Chiều rộng(cm)</TableCell>
                        <TableCell align="right">Free Ship</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, indx) => (
                        <TableRow key={indx}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default AdditionalDetail;
