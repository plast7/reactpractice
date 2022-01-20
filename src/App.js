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

    const [samename, setSamename] = useState(false);
    const [samemail, setSamemail] = useState(false);

    const changeSameName = () => {
        setSamename(true)
    }

    const changeSameMail = () => {
        setSamemail(true);
    }

    const resetSameName = () => {
        setSamename(false);
    };

    const resetSameMail = () => {
        setSamemail(false);
    };

    const nextId = useRef(4);
    const onCreate = () => {
        let isMultiple = false;

        const user = {
            id: nextId.current,
            username,
            email,
        };

        resetSameName()
        resetSameMail()

        for(let i = 0; i < users.length; i++) {
            const curname = users[i].username;
            if(curname === user.username) {
                changeSameName();
                isMultiple = true;
            }
        }

        for(let i = 0; i < users.length; i++) {
            const curmail = users[i].email;
            if(curmail === user.email) {
                changeSameMail();
                isMultiple = true;
            }
        }

        console.log('userlength :', users.length)
        console.log('samename :', samename);
        console.log('samemail :', samemail);

        if(!isMultiple) {
            setUsers(users.concat(user));

            setInputs({
                username: '',
                email: '',
            });
            nextId.current += 1;
        }
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
            <h1>{samename && '중복된 user가 존재합니다.'}</h1>
            <h1>{samemail && '중복된 mail이 존재합니다.'}</h1>
        </>
    );
}

export default App;