import React from 'react';
import Slide from './Slider';



// imagages

import oil from '../../assets/categories/oil.jpeg'
import cartoon from '../../assets/categories/cartoon.jpeg'
import charcoal from '../../assets/categories/CharcoalSketching.jpeg'
import land from '../../assets/categories/lanscape.jpeg'
import portrait from '../../assets/categories/protrait.jpeg'
import water from '../../assets/categories/water.jpeg'
import Items from '../items/Items';
import aboutImage from '../../assets/about-img.webp'
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Index = () => {
    return (
        <div>
           <Slide></Slide>


           <div className="my-12  max-w-6xl mx-auto ">
            <div className="items flex  justify-center flex-wrap">
            <div className="item flex w-96 flex-col justify-center items-center       text-center py-8 border px-3 hover:bg-gray-200  transition">
                <img src={land} className='h-20 w-40 mb-3 rounded-xl object-cover' alt="" />
                <h1 className="text-3xl pb-1 ">  Landscape Painting</h1>
                <p className="text-lg  text-gray-400">Mountain view canvas, Forest based Landscape painting,</p>
            </div>
            <div className="item flex w-96  flex-col justify-center items-center     text-center py-8 border px-3 hover:bg-gray-200  transition">
                <img src={portrait} className='h-20 w-40 mb-3 rounded-xl object-cover' alt="" />
                <h1 className="text-3xl pb-1 "> Portrait Drawing</h1>
                <p className="text-lg text-gray-400"> Pencil Sketch Portrait, Ink Outline Portrait, Acrylic Portrait Canvas</p>
            </div>
            <div className="item flex w-96 flex-col justify-center items-center     text-center py-8 border px-3 hover:bg-gray-200  transition">
                <img src={oil} className='h-20 w-40 mb-3 rounded-xl object-cover' alt="" />
                <h1 className="text-3xl pb-1 ">Oil Painting</h1>
                <p className="text-lg text-gray-400">Realistic Oil Portrait, Abstract Oil Painting</p>
            </div>
            <div className="item flex w-96 flex-col justify-center items-center     text-center py-8 border px-3 hover:bg-gray-200  transition">
                <img src={charcoal} className='h-20 w-40 mb-3 rounded-xl object-cover' alt="" />
                <h1 className="text-3xl pb-1 "> Charcoal Sketching</h1>
                <p className="text-lg text-gray-400">Figure Charcoal Sketch, Architectural Charcoal  Drawing</p>
            </div>
            <div className="item flex w-96 flex-col justify-center items-center     text-center py-8 border px-3 hover:bg-gray-200  transition">
                <img src={water} className='h-20 w-40 mb-3 rounded-xl object-cover' alt="" />
                <h1 className="text-3xl pb-1 "> Watercolour Painting</h1>
                <p className="text-lg text-gray-400"> Floral Watercolor Art, Animal Watercolor Portrait</p>
            </div>
            <div className="item flex w-96 flex-col justify-center items-center     text-center py-8 border px-3 hover:bg-gray-200  transition">
                <img src={cartoon} className='h-20 w-40 mb-3 rounded-xl object-cover' alt="" />
                <h1 className="text-3xl pb-1 "> Cartoon Drawing</h1>
                <p className="text-lg text-gray-400">Comic Strip Drawing, Superhero Cartoon Design</p>
            </div>
            
            
            
            </div>
        </div>

      <Items></Items>

 
      <div className="about max-w-6xl mx-auto flex flex-wrap mt-16 mb-16">
          
         <div className="left md:w-1/2">
             <img src={aboutImage} alt="about img" />
         </div>
         <div className="right md:w-1/2 md:pl-10 px-3">
         <h1 className="text-4xl font-bold mb-4 pt-8">The Art From The Core And Pursue Your Passion</h1>

         <p className='text-orange-700 text-md my-7 text-xl'> we are First online painting  seller in the country</p>
         <p>Here you will find posters; posters with illustrations, paintings, graphics and photographs made by renowned artists from around the world. We hand-pick every single art piece from the many artists and make sure that you get exclusive posters in quality print for your home or workplace.</p>

         <Link to='/about' className="btn btn-primary w-64 mt-6">
            About Us <FaPaperPlane></FaPaperPlane>
         </Link>
         </div>

      
      </div>




     </div>
    );
};

export default Index;