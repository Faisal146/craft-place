import { FaGithub, FaGoogle } from 'react-icons/fa';
import img from '../assets/1693632036481.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)

  const {userLogin, GoogleSign,githubSign} = useContext(AuthContext)

  const  handleLogin = (e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
 
    console.log(email, password)

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isMinLength = password.length >= 6;

    if (!hasUppercase) {
        Swal.fire({
            title: 'Error!',
            text: 'Password must contain atleast one Uppercase',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
      }else if(!hasLowercase){
        Swal.fire({
            title: 'Error!',
            text: 'Password must contain atleast one Lowercase',
            icon: 'error',
            confirmButtonText: 'Ok'
          })

      }else if(!isMinLength){
        Swal.fire({
            title: 'Error!',
            text: 'Password must be 6 charecters long',
            icon: 'error',
            confirmButtonText: 'Ok'
          })

      } else {
        console.log('pass okey');

        // creating user in firebase

        userLogin(email, password).then(res => {
          console.log(res.user)
          Swal.fire({
           title: 'Success!',
           text: 'You Logged in !!',
           icon: 'success',
           confirmButtonText: 'Ok'
         })
         navigate(location?.state ? location.state : '/')
       }).catch(error => {
        let msg;
        if(error == 'FirebaseError: Firebase: Error (auth/invalid-credential).'){
            msg = 'information Did not Match the record'
        }
        Swal.fire({
            title: 'Error!',
            text: msg ? msg : error,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
      })
    
    }



  
 }

 const googlesign = () => {
  GoogleSign().then(
    result =>{

      Swal.fire({
        title: 'Success!',
        text: 'Your Register is Successfull !!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      navigate(location?.state ? location.state : '/')

      // navigate(location?.state ? location.state : '/') 
      }).catch( error => {
        Swal.fire({
          title: 'Error!',
          text: error,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    )
 }
 const githubsign = () => {
  githubSign().then(
    result =>{

      Swal.fire({
        title: 'Success!',
        text: 'Your Register is Successfull !!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })

       navigate(location?.state ? location.state : '/') 
      }).catch( error => {
        Swal.fire({
          title: 'Error!',
          text: error,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    )
 }




    return (
        <div className='flex ' style={{height: 'calc(100vh - 70px)'}}>
            <div className="left w-1/2 md:block hidden" style={{background: `url(${img})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                
            </div>
            <div className="right md:w-1/2 w-full p-5 md:p-10 self-center">
            <h1 className='text-4xl text-center mb-7 font-bold'>Log In.</h1>
    <form action="#" onSubmit={handleLogin}>
<label className="input input-bordered flex items-center gap-2 my-3">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="email" className="grow" placeholder="Email" name='email' required />
</label>

<label className="input input-bordered flex items-center gap-2  my-3">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" placeholder='*******' name='password' required />
</label>

<button type='submit' className='btn w-full btn-accent mt-5'> Log in </button>
</form>

<div className="provider text-center flex flex-wrap gap-3 justify-center my-5 pt-5">
                <button  className="btn-primary btn md:flex-1 w-full" onClick={githubsign}><FaGoogle></FaGoogle> Continue With Google</button>
                <button className="btn-info btn md:flex-1 w-full" onClick={googlesign}><FaGithub></FaGithub> Continue With Github</button>
     </div>
     <div className="massage text-center mt-5">
                <p>Donot Have any account ? <Link state={location.state} className="underline" to="/register">Register Now</Link></p>
              </div>
            </div>
        </div>
    );
};

export default Login;