import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

NotData.propTypes = {

};

function NotData(props) {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <img src="https://www.sudeepintl.com/assets/website/image/oops.png" alt="" />
        </Box>
    );
}

export default NotData;