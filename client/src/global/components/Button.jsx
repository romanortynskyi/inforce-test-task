import React from 'react';
import { 
    Box,
    Button as MuiButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    button: {
        width: '100%',
    }
}));

export const Button = ({
    color,
    onClick,
    text,
    disabled,
    variant,
}) => {
    const classes = useStyles();

    return (
        <Box marginBottom={1}>
            <MuiButton className={classes.button}
                variant={variant}
                color={color}
                onClick={onClick}
                disabled={disabled}
                disableElevation
            >
              {text}
            </MuiButton>
        </Box>
    );
};
