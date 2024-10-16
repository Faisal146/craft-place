import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import titleBg from '../../assets/postero-bg-6.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const List = () => {

  const [items, setItems] = useState(null)
  const {user} = useContext(AuthContext);

  // user ? setUser(user): ''
  // const email = user.email

  useEffect(()=>{
    if(user){
     fetch(`http://localhost:5000/allitems/${user.email}`).then(res => res.json()).then(data => setItems(data))}
  },[user])


  const handleDelete = (userItem) => {
    console.log(userItem)
    Swal.fire({
      title: 'Are You Sure!',
      text: 'Delete - ' + userItem.name ,
      icon: 'error',
      confirmButtonText: 'Confirm',
      showCancelButton: true,
    }).then( result => {
      if(result.isConfirmed){
        console.log('deleting' + userItem._id)
        fetch(`http://localhost:5000/item/${userItem._id}` , {
          method : 'DELETE'
        }).then(res => res.json()).then(data => {
         console.log(data)
         if(data.deletedCount > 0){
          fetch(`http://localhost:5000/allitems/${user.email}`).then(res => res.json()).then(data => setItems(data))
          Swal.fire({
           
            icon: "success",
            title: "Successfully Deleted",
            showConfirmButton: false,
            timer: 1500
          });

         }
 
        })
      }
    })
  }

    return (
        <div>
              <div className='bg-base-200 py-16 my-10 ' style={{background: `url(${titleBg})`, backgroundSize:'cover', backgroundPosition: "center center"}}> 
                <h1 className='text-4xl text-center'>My Art and Drawing Items</h1>
             </div>

             <div className='max-w-6xl mx-auto'>
             <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>image</th>
        <th>Subcategory Name</th>
        <th>Price</th>
       <th>
          Actions
       </th>
      </tr>
    </thead>
    <tbody>
      {
        items ? items.map((item,index)=>{

          return(
            
            <tr key={index}>
            <th>{index + 1}</th>
            <td>{item.name}</td>
            <td><img src={item.image} alt="item img" /></td>
            <td>{item.subcategory}</td>
            <td>{item.price}</td>
            <th>
                <Link to={`/update/${item._id}`}  className='btn btn-sm btn-success mr-2'><FaEdit></FaEdit></Link>
                <button  onClick={()=>handleDelete(item)} className='btn btn-sm btn-error'><FaTrash></FaTrash></button>
            </th>
          </tr>
          )
         }) : <h1 className='text-2xl text-center my-8'>Data is Loading</h1>
      }

     
      
    </tbody>
  </table>


</div>
             </div>

             <div className='text-center mb-14'>
  <Link to='/add' className='btn mt-6 btn-primary w-64'><FaPlus></FaPlus> Add Item</Link>
  </div>
        </div>
    );
};

export default List;