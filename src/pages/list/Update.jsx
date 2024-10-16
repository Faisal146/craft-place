import { FaPlus } from 'react-icons/fa';
import titleBg from '../../assets/back-7.webp'
 import Swal from 'sweetalert2';
 import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateItem = () => {

    const item = useLoaderData();
    const navigate = useNavigate()
    
    let {_id,image,name,subcategory,short_description, customization, stock_status, price, rating, Processing_time} = item
 
     console.log(item)
   
    


    const handleAdd = (e) => {
       e.preventDefault()
      let imagei =  e.target.image.value
      let namei =  e.target.name.value
      let subcategoryi =  e.target.subcategory.value
      let short_descriptioni =  e.target.short_description.value
      let customizationi =  e.target.customization.value
      let stock_statusi =  e.target.stock_status.value
      let pricei =  e.target.price.value
      let ratingi =  e.target.rating.value
      let Processing_timei =  e.target.Processing_time.value
    
      const new_item = {imagei,namei,subcategoryi,short_descriptioni, customizationi, stock_statusi, pricei, ratingi, Processing_timei}

      console.log(new_item)

      fetch(`http://localhost:5000/item/${_id}` , {
        method: "PUT" , 
        headers: {
            "content-type" : "application/json" 
        },
        body: JSON.stringify(new_item)
    })
    .then(res => res.json())
    .then(data => {
        // const newUsers = [...users , data];
        // setUsers(newUsers)
        
        Swal.fire({
            title: 'Success!',
            text: 'This Item Updated Successfully !!',
            icon: 'success',
            confirmButtonText: 'Back'
          }).then(result => {
            if(result.isConfirmed){
                navigate('/list')
            }
          })
        
        console.log(data)
    })
    }


    return (
        <div>
             <div className='bg-base-200 py-16 my-10 ' style={{background: `url(${titleBg})`, backgroundSize:'cover'}}> 
                <h1 className='text-4xl text-center'>Update <br />  -{name}-  </h1>
            </div>
        <div className='my-12 mx-4'>
        <form action="" onSubmit={handleAdd}>
            <div className='max-w-6xl mx-auto md:flex block gap-6 my-4'>
                <input type="text" className="input w-full my-2 input-bordered flex-1" defaultValue={image} placeholder="Image URL"  name='image'/>
                <input type="text" defaultValue={name} className="input w-full my-2 input-bordered flex-1" placeholder="Item Name" name='name'/>

             </div>
            <div className='max-w-6xl mx-auto md:flex block gap-6 my-4'>
                <input type="text" defaultValue={subcategory} className="input w-full my-2 input-bordered flex-1" placeholder="Subcategory Name" name='subcategory' />
                <input type="text" defaultValue={short_description} className="input w-full my-2 input-bordered flex-1" placeholder="Short description" name='short_description' />

             </div>
            <div className='max-w-6xl mx-auto md:flex block gap-6 my-4'>
                <input type="number" defaultValue={price} className="input w-full my-2 input-bordered flex-1" placeholder="price" name='price' />
                <input  type="number" defaultValue={rating}  min="0" max="5"  className="input w-full my-2 input-bordered flex-1" placeholder="rating (0-5)" name='rating' />

             </div>
            <div className='max-w-6xl mx-auto md:flex block gap-6 my-4'>
            <select defaultValue={customization} className="select select-bordered w-full my-2 flex-1" name='customization'>
                <option disabled selected>Customization ?</option>
                <option value='yes'>yes</option>
                <option value='no'>no</option>
            </select>

                <input type="text" defaultValue={Processing_time} className="input w-full my-2 input-bordered flex-1" placeholder="Processing time" name='Processing_time' />

             </div>
             <div className='max-w-6xl mx-auto  gap-6 my-4'>
             <select defaultValue={stock_status} className="select select-bordered w-full  block " name='stock_status'>
                <option disabled selected>Stock Status ?</option>
                <option value='Made to order'>made to order</option>
                <option  value='In stock'>In stock</option>
            </select>
              

             </div>
           <div className='text-center'>
             <button type='submit' className='btn btn-primary w-64'><FaPlus></FaPlus> Update </button>
           </div>
        </form> 
        </div>
        </div>
    );
};

export default UpdateItem;