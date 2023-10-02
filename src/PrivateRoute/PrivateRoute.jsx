import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types'; // ES6

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();


    // console.log(loading)
    // we Have to set loader

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    // 
    if (!user?.email) {
        return <Navigate to={"/login"} />
    }
    return children

};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;