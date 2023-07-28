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
    }, [setToken, user]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);


    return (
        <div className="py-5">
            <div className="container rounded-lg shadow p-246">
                <div className="text-center">
                    {user.profile_picture ? (
                        <img
                            className="rounded-circle border border-dark w-36 h-36"
                            src={user.profile_picture}
                            alt="Extra large avatar"
                        />
                    ) : (
                        <img
                            className="rounded-circle border border-primary w-36 h-36"
                            src="https://cdn1.iconfinder.com/data/icons/random-115/24/person-512.png"
                            alt="Extra large avatar"
                        />
                    )}
                </div>
                <div className="user-info text-center mt-4">
                    <p className="h2 fw-bold">
                        {user.first_name} {user.last_name}
                    </p>
                    <p className="h5 fw-bold">Username: {user.username}</p>
                    <p className="h5 fw-bold">Email: {user.email}</p>
                    <p className="h5 fw-bold">First Name: {user.first_name}</p>
                    <p className="h5 fw-bold">Last Name: {user.last_name}</p>
                    <p className="h5 fw-bold">Security Answer: {user.security_question}</p>
                    <p className="h5 fw-bold">Security Question: {user.security_answer}</p>
                </div>
            </div>
        </div>
    );




}
