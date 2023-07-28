import { useEffect, useState, useContext, useCallback } from 'react';
import { AuthContext } from "@galvanize-inc/jwtdown-for-react";
import { useNavigate } from "react-router-dom";


export default function UserPage() {
    const { token, setToken } = useContext(AuthContext);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    console.log(user);

    const fetchUsers = useCallback(async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/token`, {
                method: "GET",
                credentials: "include",
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
                console.log(data.user);
            } else {
                setToken(null);
            }
        } catch (e) {
            console.error(e);
        }
    }, [setToken]);

    //delete account
    const handleDelete = async (userId) => {
        const fetchConfig = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        };
        try {
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/users/${userId}`, fetchConfig);
            if (response.ok) {
                console.log("User deleted successfully.");
                await fetch(`${process.env.REACT_APP_API_HOST}/token`, {
                    method: "DELETE",
                    credentials: "include",
                });
                setToken(null);
                document.cookie = "fastapi_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                navigate("/");
            } else {
                console.error("Failed to delete user.");
            }
        } catch (error) {
            console.error("Error while deleting user:", error);
        }
    };

    //edit account
    // const handleUpdate = () => {
    //     navigate('/update/id');
    // };



    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);


    return (
        <>
            <div className='container overflow-hidden'>
                <h1>User Information</h1>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Profile Picture</th>
                            <th>Security Question</th>
                            <th>Security Answer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td><img src={user.profile_picture} style={{ height: 100, width: 100, marginRight: 20, borderRadius: '50%' }} alt="profile_pic" /></td>
                            <td>{user.security_question}</td>
                            <td>{user.security_answer}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        handleDelete(user.id);
                                    }}
                                >
                                    Delete Account
                                </button>
                                {/* <button
                                    className="btn btn-warning"
                                    onClick={() => {
                                        handleUpdate(user.id);
                                    }}
                                >
                                    Edit Account Settings
                                </button> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        </>
    );
}
