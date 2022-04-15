import { Box, Typography } from "@mui/material";
import LinearProgress, {
    linearProgressClasses
} from "@mui/material/LinearProgress";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import React from "react";

ReviewDetail.propTypes = {};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
}));

const valueProgress = [80, 60, 50, 30, 1];
const valueStars = [5, 4, 3, 2, 1];

const averageStar = Math.ceil(Math.random() * 5);

function ReviewDetail(props) {
    return (
        <Box>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                    }}
                >
                    <Typography component="span" variant="h4" sx={{ fontSize: "70px" }}>
                        {`${averageStar}.0`}
                    </Typography>
                    <Rating
                        name="half-rating-read"
                        defaultValue={averageStar}
                        precision={1}
                        readOnly
                    />
                    <Typography component="span">Đánh giá trung bình</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {valueProgress.map((value, index) => (
                        <BorderLinearProgress
                            key={index}
                            sx={{ width: "400px" }}
                            variant="determinate"
                            value={value}
                        />
                    ))}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                    {valueStars.map((value, index) => (
                        <Box key={index} sx={{ display: "flex", gap: "12px" }}>
                            <Rating
                                name="half-rating-read"
                                defaultValue={value}
                                precision={1}
                                readOnly
                            />
                            <Box sx={{ color: "#1976D2" }} component="span">{`${value * 10
                                }%`}</Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* component review */}
        </Box>
    );
}

export default ReviewDetail;
