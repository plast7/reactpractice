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

    const samename = useRef(false);
    const samemail = useRef(false);

    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
        };

        samename.current = false;

        for(let i = 0; i < users.length; i++) {
            const curname = users[i].username;
            if(curname === user.username) {
                samename.current = true;
            }
        }

        samemail.current = false;

        for(let i = 0; i < users.length; i++) {
            const curmail = users[i].email;
            if(curmail === user.email) {
                samemail.current = true;
            }
        }

        if(!samename.current && !samemail.current) {
            setUsers(users.concat(user));

            setInputs({
                username: '',
                email: '',
            });
            nextId.current += 1;
        }
        return (
            <>
                <h1>{samename.current && '중복된 user가 존재합니다.'}</h1>
                <h1>{samemail.current && '중복된 mail이 존재합니다.'}</h1>
            </>

        );
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
            <h1>{samename.current && '중복된 user가 존재합니다.'}</h1>
            <h1>{samemail.current && '중복된 mail이 존재합니다.'}</h1>
        </>
    );
}

export default App;