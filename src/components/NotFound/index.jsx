import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    root: {
        cursor: 'pointer',
        color: 'red',
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bold'
    },

});

function NotFound(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            404 - NOT FOUND
        </div>
    );
}

export default NotFound;