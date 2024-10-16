import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

 


const Profile = () => {
    const { user, logOut } = useContext(AuthContext);
 

    return (
        
        <div className="min-h-screen mx-auto pt-20 max-w-6xl flex flex-col items-center text-center">
            

      {
        user ? <>
  
                <img src={user.photoURL} alt="profile pic" className="border-2 p-4 rounded-xl" />  
            
               
            
           
            <div className="">
                <h1 className="text-5xl py-5">{user.displayName}</h1>
                <p className="text-xl mb-10">Email : <span className="font-bold">{user.email}</span></p>
                <Link to='/update-profile' className='btn mr-3 btn-info'> Update Profile</Link>
                <button className='btn btn-error' onClick={logOut}> Log Out</button>
            </div>
        </> :  <span className="loading mt-20 mb-20 loading-dots loading-lg"></span>  
      }
         
           

        </div>
    );
};

export default Profile;