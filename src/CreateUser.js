import React from 'react';
import styles from './App.css'
import {Box, Button, Checkbox, Divider, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import clsx from "clsx";
import {blue, green, pink} from "@material-ui/core/colors";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(theme => ({
    marginBottom20 : {
        marginBottom: '20px'
    },

    inputGroup : {
        position: 'relative',
        display: 'table',
        borderCollapse: 'separate'
    },

    row: {
        marginRight: '-15px',
        marginLeft: '-15px'
    },

    checkbox: {
        position: 'relative',
        display: 'block',
        minHeight: '20px',
        marginTop: '10px',
        marginBottom: '10px',
    },

    colMd6: {
        paddingRight: '15px',
        paddingLeft: '15px',
    },

    checkRoot: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },

    icon: {
        borderRadius: 3,
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },

    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },

    btnU: {
        backgroundColor: '#0076C0',
        border: '0',
        color: '#fff',
        fontSize: '14px',
        cursor: 'pointer',
        fontWeight: '400',
        padding: '6px 13px',
        position: 'relative',
        whiteSpace: 'nowrap',
        display: 'inline-block',
        textDecoration: 'none',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: '#2980b9',
            boxShadow: 'none',
        },
    },

    pullRight: {
        margin: '0 0 0 auto',
    },

    useflex: {
        display: 'flex',
    },

    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    textField: {
        fontSize: '20',
        width: '200px',
        //color: 'red',
    },

    squareField: {
        border: '1px solid #ccc',
    },

    loginKeep: {
        fontSize: '14px',
    },
}))

function CreateUser({ username, email, onChange, onCreate }) {

    const classes = useStyles();

    return (
        <>
            <Box className={clsx(classes.inputGroup, classes.marginBottom20, classes.useflex)}>
                <Box
                    className={clsx(classes.useflex, classes.squareField)}
                    style={{height: '40px', width: '40px', borderRight: 'none',}}>
                    <PersonIcon
                        fontSize='small'
                        style={{color: '#b3b3b3', margin: 'auto',}}
                    />
                </Box>
                <Box>
                    <TextField
                        className={classes.textField}
                        name="username"
                        placeholder="계정명"
                        onChange={onChange}
                        value={username}
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Box>
            <Box className={clsx(classes.inputGroup, classes.marginBottom20, classes.useflex)}>
                <Box
                    className={clsx(classes.useflex, classes.squareField)}
                    style={{height: '40px', width: '40px', borderRight: 'none',}}>
                    <LockIcon
                        fontSize='small'
                        style={{color: '#b3b3b3', margin: 'auto'}}
                    />
                </Box>
                <Box>
                    <TextField
                        className={classes.textField}
                        name="email"
                        placeholder="이메일"
                        onChange={onChange}
                        value={email}
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Box>
            <Box className={classes.row}>
                <Box className={clsx(classes.colMd6, classes.checkbox)}>
                    <Grid className={classes.useflex} style={{alignItems: 'center'}}>
                        <Checkbox
                            className={classes.checkRoot}
                            disableRipple
                            color="default"
                            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)}/>}
                            icon={<span className={classes.icon}/>}
                            inputProps={{'aria-label': 'decorative checkbox'}}
                        />
                        <Typography variant="h6" className={classes.loginKeep}>
                            로그인 상태 유지
                        </Typography>
                    </Grid>
                </Box>
                <Box className={clsx(classes.colMd6, classes.useflex)}>
                    <Button
                        variant={"contained"}
                        onClick={onCreate}
                        className={clsx(classes.btnU, classes.pullRight)}
                    >
                        로그인
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default CreateUser;