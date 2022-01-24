import React from 'react';
import {Box, Button, makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    input: {
        fontSize: 20,
        color: "red"
    },
    button: {
        borderRadius: "40px",
    }
}))

function CreateUser({ username, email, onChange, onCreate }) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <TextField
                name="username"
                label="계정명"
                onChange={onChange}
                value={username}
                inputProps={{
                    className: classes.input
                }}
            />
            <TextField
                inputProps={{
                    className: classes.input
                }}
                name="email"
                label="이메일"
                onChange={onChange}
                value={email}
            />
            <Button
                variant={"contained"}
                onClick={onCreate}
                className={classes.button}
            >
                등록
            </Button>
        </Box>
    );
}

export default CreateUser;