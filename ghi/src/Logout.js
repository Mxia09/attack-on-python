import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@galvanize-inc/jwtdown-for-react";

export default function Logout() {
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await fetch(`${process.env.REACT_APP_API_HOST}/api/token`, {
                method: "DELETE",
                credentials: "include",
            });
            setToken(null);
            document.cookie =
                "fastapi_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
}
