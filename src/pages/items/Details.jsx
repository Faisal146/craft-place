 import { Link, Navigate, useLoaderData, useLocation } from 'react-router-dom';
import img from '../../assets/1693632036481.png'
import { FaArrowLeft, FaStar } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';


const Details = () => {
    const item = useLoaderData();
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()

    
   let {_id,image,name,subcategory,short_description, customization, stock_status, price, rating, Processing_time, user_email, user_name} = item

    console.log(location.pathname)


    if(loader){
        return ( <div className="text-center py-20  ">
            <span className="loading loading-dots loading-lg"></span>
        </div>
        )
    }
    if(!user){
          return <Navigate state={location.pathname} to='/login'></Navigate>
    }

    return (
        <div className='max-w-6xl mx-auto my-12'>
           <div className='md:flex block'>
            <div className="left md:w-1/2 w-full md:h-auto h-96 rounded" style={{background: `url(${image})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                
            </div>
            <div className="right md:w-1/2 w-full pl-5 md:pl-10 ">

            {/* <table>
                <tr className='text-2xl'>
                    <td> <span className='text-gray-500 block text-xl' >Name :</span> </td>
                    <td><span className=' font-bold'> {name}</span></td>
                </tr>
                <tr className='text-2xl'>
                    <td> <span className='text-gray-500 block text-xl' >Price :</span> </td>
                    <td><span className=' font-bold'> {price}</span></td>
                </tr>
                <tr className='text-2xl'>
                    <td> <span className='text-gray-500 block text-xl' >Subcategory Name :</span> </td>
                    <td><span className=' font-bold'> {subcategory}</span></td>
                </tr>
                <tr className='text-2xl'>
                    <td> <span className='text-gray-500 block text-xl' >Short Description : </span> </td>
                    <td><span className=' font-bold'> {short_description}</span></td>
                </tr>
                <tr className='text-2xl'>
                    <td> <span className='text-gray-500 block text-xl' >Rating : </span> </td>
                    <td> <span className=' font-bold flex items-center gap-4'> 
                    <p>{rating}</p> <FaStar className='text-yellow-500'></FaStar></span></td>
                 </tr>   
                 <tr className='text-2xl'>
                    <td> <span className='text-gray-500 block text-xl' >Customization : </span> </td>
                    <td><span className=' font-bold'> {customization}</span></td>
               
                </tr>
                 <tr className='text-2xl'>
                    <td> <span className='text-gray-500 block text-xl' >Processing Time : </span> </td>
                    <td><span className=' font-bold'> {Processing_time}</span></td>
               
                </tr>
                 <tr className='text-2xl'>
                    <td> <span className='text-gray-500 block text-xl' >Stock Status : </span> </td>
                    <td><span className=' font-bold'> {stock_status}</span></td>
               
                </tr>
                
               

            </table> */}
               
               <h1 className='text-2xl my-3 text-center md:text-left  '>
                <span className='text-gray-500 block text-xl ' >Name :</span> 
                <span className=' font-bold'> {name}</span>
               </h1>
               <h1 className='text-2xl my-3 text-center md:text-left'>
                <span className='text-gray-500 block text-xl'>Price :</span> 
                <span className=' font-bold'> {price}</span>
               </h1>
               
               <h1 className='text-2xl my-3 text-center md:text-left'>
                <span className='text-gray-500 block text-xl'>Subcategory Name :</span> 
                <span className=' font-bold'> {subcategory}</span>
               </h1>

               <h1 className='text-2xl my-3 text-center md:text-left'>
                <span className='text-gray-500 block text-xl'>Short Description :</span> 
                <span className=' font-bold'> {short_description}</span>
               </h1>

               <h1 className='text-2xl my-3 text-center md:text-left flex md:justify-start justify-center  items-center'>
                <span className='text-gray-500 w-40 block text-xl' >Rating :</span> 
                <span className=' font-bold flex items-center gap-4'> 
                   <p>{rating}</p> <FaStar className='text-yellow-500'></FaStar></span>
               </h1>

               <h1 className='text-2xl my-3 text-center md:text-left flex  md:justify-start justify-center  items-center'>
                <span className='text-gray-500 w-40 block text-xl' >Customization :</span> 
                <span className=' font-bold'> {customization} </span>
               </h1>
               
              

               <h1 className='text-2xl my-3 text-center md:text-left'>
                <span className='text-gray-500 block text-xl' >Processing Time :</span> 
                <span className=' font-bold'> {Processing_time} </span>
               </h1>
              
               <h1 className='text-2xl my-3 text-center md:text-left'>
                <span className='text-gray-500 block text-xl' >Stock Status :</span> 
                <span className=' font-bold'> {stock_status} </span>
               </h1>
              
            </div>  
               
            </div>

            <div className='my-12 mx-8'>
                <h1 className='md:w-80 w-full md:mx-auto text-3xl border-b-2 text-center  '>Author Detalis</h1>

                <h1 className='text-2xl text-center mt-4 mb-2'>{user_name}</h1>
                <h1 className='text-2xl text-center '>{user_email}</h1>

                
            </div>
           <div className="text-center mx-4">
             <Link to='/all' className='btn btn-accent md:w-96 w-full'><FaArrowLeft></FaArrowLeft> Back</Link>

           </div>
           

        </div>

    );
};

export default Details;