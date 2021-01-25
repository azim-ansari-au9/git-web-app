import React from 'react';
import UserItem from './UserItems';
import Giphy from "./Giphy";
import PropTypes from 'prop-types';


const User = ({ users, loading }) => {
    if(loading){
        return <Giphy />
    }else {
        return (
            <div className="userstyle">
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}
User.propTypes = {
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
}

export default User
