import { Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./DetailTabs.scss";

function DetailTabs(props) {
    return (
        <Box sx={{ p: 1 }}>
            <Box
                component="ul"
                sx={{
                    listStyleType: "none",
                    display: "flex",
                    gap: "180px",
                    justifyContent: "center",
                }}
            >
                <li>
                    <Link className="detail__link" component={NavLink} to="" >
                        Mô tả
                    </Link>
                </li>
                <li>
                    <Link className="detail__link" component={NavLink} to='additional'>
                        Thông Tin Vận Chuyển
                    </Link>
                </li>
                <li>
                    <Link className="detail__link" component={NavLink} to='review'>
                        Đánh giá
                    </Link>
                </li>

            </Box>
        </Box>
    );
}

export default DetailTabs;
