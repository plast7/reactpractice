import React, { useEffect } from 'react';
import {IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


function User({user, onRemove, onToggle}) {
    useEffect(() => {
        return() => {
        };
    });

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >{user.username}</b> <span>({user.email})</span>
            <IconButton aria-label="delete" onClick={() => onRemove(user.id)}><DeleteIcon /></IconButton>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default UserList;