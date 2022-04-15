import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

CategoryListSkeleton.propTypes = {
    lengthSkeleton: PropTypes.number,
};

function CategoryListSkeleton({ lengthSkeleton = 6 }) {
    const skeletonList = Array.from(new Array(lengthSkeleton))
    return (
        <Box sx={{ width: '75%', margin: '20px auto' }}>
            {skeletonList.map((skeleton, index) => (
                <Skeleton sx={{ mt: 1 }} key={index} animation="wave" />
            ))}
        </Box>
    );
}

export default CategoryListSkeleton;
/*


  
*/