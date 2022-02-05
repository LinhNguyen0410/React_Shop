import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import DOMPurify from 'dompurify';

DescriptionDetail.propTypes = {
    product: PropTypes.object,
};

function DescriptionDetail({ product }) {
    const safeDescription = DOMPurify.sanitize(product.description)

    return (
        <Box sx={{ pl: 2, pr: 2 }} dangerouslySetInnerHTML={{ __html: safeDescription }}></Box>
    );
}

export default DescriptionDetail;