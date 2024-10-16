import { FaCamera, FaGithub, FaGoogle } from 'react-icons/fa';
import img from '../assets/1693632036481.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateProfile = () => {
  const { updateProfilee} = useContext(AuthContext)

  const  handleRegister = (e)=>{
    e.preventDefault()
    // const email = e.target.email.value
   //  const password = e.target.password.value
    const photo = e.target.photo.value
    const name = e.target.name.value

    console.log(photo,name)
    updateProfilee(name, photo).then(()=>{
        Swal.fire({
            title: 'Success!',
            text: 'Your Profile Updated',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
    }).catch((error)=>{
        Swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    })



    
     



  
 }
    return (
        <div className='flex ' style={{height: 'calc(100vh - 70px)'}}>
            <div className="left w-1/2 md:block hidden" style={{background: `url(${img})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                
            </div>
            <div className="right md:w-1/2 w-full p-5 md:p-10 self-center">
            <h1 className='text-4xl text-center mb-7 font-bold'>Update Profile.</h1>
            
<form action="#" onSubmit={handleRegister}>
<label className="input input-bordered flex  items-center gap-2  my-3">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Your name" name='name' required/>
</label>


<label className="input input-bordered flex items-center gap-2 my-3">
  <FaCamera className='text-gray-500'></FaCamera>
  <input type="text" className="grow" placeholder="Photo URL" name='photo' required/>
</label>



<button type='submit' className='btn w-full btn-accent mt-5'> Update </button>
</form>


            </div>
        </div>
    );
};

export default UpdateProfile;