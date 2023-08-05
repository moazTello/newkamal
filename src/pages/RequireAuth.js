import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    // console.log(auth.admin);
    console.log(auth);
    return(
        JSON.parse(localStorage.getItem('auth'))?.admin === 'admin' ? <Outlet/>:<Navigate to='/login' state={{from:location}} replace/>
    )
}

export default RequireAuth;