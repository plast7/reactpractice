import React, {useRef, useState} from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';
import {getCookie, setCookie} from './utils.js';

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
        console.log('/users/')
        console.log(users)
        console.log('/cookie')
        setCookie("helloworld", next_users, {})
        setCookie("hihihi", newnextId, {})
        setNextId(newnextId)
        console.log(getCookie("helloworld"))
    };

    const onRemove = id => {
        const next_users = users.filter(user => user.id !== id);
        setUsers(next_users);
        console.log('/users/')
        console.log(users)
        console.log('/cookie')

        setCookie("helloworld", next_users, {})
        console.log(getCookie("helloworld"))
    }

    const onToggle = id => {
        const next_users = users.map(user =>
            user.id === id ? {...user, active: !user.active} : user
        );

        setUsers(next_users);

        console.log('/users/')
        console.log(users)
        console.log('/cookie')
        setCookie("helloworld", next_users, {})
        console.log(getCookie("helloworld"))
    };

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
            <h1>{checker.username && '????????? user??? ???????????????.'}</h1>
            <h1>{checker.mail && '????????? mail??? ???????????????.'}</h1>
        </>
    );
}

export default App;