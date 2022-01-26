import React, {useRef, useState} from 'react';
import styles from './App.css'
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';
import {getCookie, setCookie} from './utils.js';
import {Box, Divider, FormControl, FormGroup, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    regPage : {
        color: "#555",
        padding: "30px",
        background: "#fefefe",
        border: "solid 1px #eee",
        boxShadow: "0 0 3px #eee"
    },

    regHeader : {
        color: '#555',
        textAlign: 'center',
        marginBottom: '35px',
        borderBottom: 'solid 1px #eee',
        '& h2': {
            fontSize: '24px',
            marginBottom: '15px'
        }
    },

    marginBottom20 : {
        marginBottom: '20px'
    },

    margin30 : {
        marginBottom: '30px',
        marginTop: '30px'
    },

    inputGroup : {
        position: 'relative',
        display: 'table',
        borderCollapse: 'separate'
    }
}))

function App() {
    const[inputs, setInputs] = useState({
        username: '',
        email: '',
    });

    const {username, email} = inputs;
    const onChange = (e) => {
        const{ name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [users, setUsers] = useState(
        getCookie("helloworld") ? getCookie("helloworld") :
        [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]

    );


    const [checker, setChecker] = useState({
        username: false,
        mail: false
    })

    const [nextId, setNextId] = useState(getCookie('hihihi') ? getCookie('hihihi') : 4)

    const checkUsername = (user) => {
        for(let i = 0; i < users.length; i++) {
            const curname = users[i].username;
            if(curname === user.username) {
                setChecker((prev) => ({
                    ...prev,
                    username: true
                }))
                return true;
            }
        }

        return false;
    }

    const checkMail = (user) => {
        for (let i = 0; i < users.length; i++) {
            const curmail = users[i].email;
            if (curmail === user.email) {
                setChecker((prev) => ({
                    ...prev,
                    mail: true
                }))
                return true;
            }
        }

        return false;
    }

    const onCreate = () => {
        const user = {
            id: nextId,
            username,
            email,
            active: false
        };

        setChecker(prev => ({
            username: false,
            mail: false
        }))
        
        checkUsername(user)
        if(checkMail(user) || checkUsername(user)) return;

        const next_users = users.concat(user);
        setUsers(next_users);

        setInputs({
            username: '',
            email: '',
        });

        const newnextId = nextId + 1
        setCookie("helloworld", next_users, {})
        setCookie("hihihi", newnextId, {})
        setNextId(newnextId)
    };

    const onRemove = id => {
        const next_users = users.filter(user => user.id !== id);
        setUsers(next_users);

        setCookie("helloworld", next_users, {})
    }

    const onToggle = id => {
        const next_users = users.map(user =>
            user.id === id ? {...user, active: !user.active} : user
        );

        setUsers(next_users);

        setCookie("helloworld", next_users, {})
    };

    const classes = useStyles();

    return (
        <>
            <FormControl className={classes.regPage}
                  style={{
                margin: '30px auto 0',
                display: 'block',
                width: '325px',
            }}>
                <Box className={classes.regHeader}>
                    <Typography variant="h2">로그인</Typography>
                </Box>
                <CreateUser
                    username={username}
                    email={email}
                    onChange={onChange}
                    onCreate={onCreate}
                />
                <Divider className={classes.margin30}/>
                <Typography>아이디나 비밀번호를 잊었을 때는, 여기를 눌러주세요.</Typography>
                <Typography>회원 가입은 여기에서 할 수 있습니다.</Typography>
            </FormControl>
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
            <Typography variant="h1">{checker.username && '중복된 user가 존재합니다.'}</Typography>
            <Typography variant="h1">{checker.mail && '중복된 mail이 존재합니다.'}</Typography>
        </>
    );
}

export default App;