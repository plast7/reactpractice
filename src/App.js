import React, {useRef, useState} from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';

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

    const [users, setUsers] = useState([
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
    ]);

    const [checker, setChecker] = useState({
        username: false,
        mail: false
    })

    const nextId = useRef(4);

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
        for(let i = 0; i < users.length; i++) {
            const curmail = users[i].email;
            if(curmail === user.email) {
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
            id: nextId.current,
            username,
            email,
        };

        setChecker(prev => ({
            username: false,
            mail: false
        }))


        checkUsername(user)
        if(checkMail(user) || checkUsername(user)) return;

        setUsers(users.concat(user));

        setInputs({
            username: '',
            email: '',
        });
        nextId.current += 1;
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    }

    const onToggle = id => {
        setUsers(
            users.map(user =>
                user.id === id ? {...user, active: !user.active} : user
            )
        );
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
            <h1>{checker.username && '중복된 user가 존재합니다.'}</h1>
            <h1>{checker.mail && '중복된 mail이 존재합니다.'}</h1>
        </>
    );
}

export default App;