import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const PrivateRoute = ({children}) => {

    const location = useLocation();



    const{ user, loader } = useContext(AuthContext)

    if(loader){
        return ( <div className="text-center py-20  ">
            <span className="loading loading-dots loading-lg"></span>
        </div>
        )
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivateRoute;