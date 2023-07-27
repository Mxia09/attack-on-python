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
                setUser(data);
                console.log(data);
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

    // return()
}
