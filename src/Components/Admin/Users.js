import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';

const Users = () => {
    const { userData } = useContext(AppContext);
    const [users, setUsers] = useState(userData);
    const [isUpdate, setIsUpdate] = useState(false);
    const [formData, setFormData] = useState({});
    const [updateUser, setUpdateUser] = useState({});
    const handleSearch = (e) => {
        const searchResult = userData.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setUsers(searchResult);
    }

    const handleDelete = (email) => {
        //email = test@test.com
        const newUsers = users.filter(user => user.email !== email);
        setUsers(newUsers);
    }

    const isUpdateUser = (user) => {
        setIsUpdate(true);
        setUpdateUser(user);
    }
    const handleChange = (e) => {
        const newUser = {};
        newUser[e.target.name] = e.target.value;
        setFormData({ ...formData, ...newUser });
    }
    const handleUpdate = (email) => {
        const newUsers = users.map(user => {
            if (user.email === email) {
                return { ...user, ...formData };
            }
            return user;
        })
        setUsers(newUsers);
        setIsUpdate(false);
        setFormData({});
    }
    return (
        <div>
            <input type="text" placeholder="Search" onChange={handleSearch} />
            {
                isUpdate === true ? <div>
                    <input type="text" placeholder="Enter your name" value={formData.name || updateUser?.name} name="name" onChange={handleChange} />
                    <input type="text" placeholder="Enter your email" name="email" value={formData.email || updateUser?.email} onChange={handleChange} />
                    <button onClick={() => handleUpdate(updateUser?.email)}>Update</button>
                </div> : <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className="ms-5">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr>
                                <td>{user.name}</td>
                                <td className="ms-5">{user.email}</td>
                                <td ><button onClick={() => isUpdateUser(user)}>Edit</button> <button onClick={() => handleDelete(user.email)}>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            }
        </div>
    );
};

export default Users;