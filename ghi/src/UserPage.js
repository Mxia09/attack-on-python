import { useEffect, useState, useContext, useCallback } from 'react';
import { AuthContext } from "@galvanize-inc/jwtdown-for-react";

export default function UserPage() {
    const { setToken } = useContext(AuthContext);
    const [user, setUser] = useState([]);
    console.log(user)
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
                console.log(user)
            } else {
                setToken(null);
            }
        } catch (e) {
            console.error(e);
        }
    }, [setToken]);

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
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <img src={user.profile_picture} style={{ height: 100, width: 100, marginRight: 20, borderRadius: '50%' }} alt="profile_pic" />
                            <td>{user.security_question}</td>
                            <td>{user.security_answer}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
