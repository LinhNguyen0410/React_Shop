import React from "react";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const bannerUrl = [
    "https://hocvien.tiki.vn/wp-content/uploads/2021/12/1440-768x768.jpg",
    "https://salt.tikicdn.com/ts/brickv2og/6b/3c/20/4d3fb8feadc7a8ffc73c94b1098d3be5.png",
];

function Banner(props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                justifyContent: "center",
                alignItems: "center",
                mt: 5,
            }}
        >
            {bannerUrl.map((url, index) => (
                <Box key={index} sx={{ position: "relative" }}>
                    <img
                        key={index}
                        style={{
                            width: "200px",
                            height: "200px",
                            boxShadow: "0 1px 8px #ccc",
                        }}
                        src={url}
                        alt=""
                    />
                    <CloseIcon
                        sx={{
                            position: "absolute",
                            top: 0,
                            right: "5px",
                            opacity: "0.3",
                            cursor: "pointer",
                        }}
                    />
                </Box>
            ))}
        </Box>
    );
}

export default Banner;
