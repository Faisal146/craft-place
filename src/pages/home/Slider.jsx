import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from '../../assets/Painting-vs-Drawing.webp'
import banner2 from '../../assets/istockphoto-1190200652-612x612.jpg'
import banner3 from '../../assets/tray-filled-paintbrushes-watercolor-palettes-260nw-2470175785.jpg'
import { Link } from "react-router-dom";

import { FaPaintBrush } from "react-icons/fa";

const Slide = () => {
    const settings = {
        dots: true,
        
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
       autoplaySpeed: 2000,
       cssEase: "linear"
      };
    return (
        <div className=" mx-auto">
              <div className="slider-container">
      <Slider {...settings}>
        <div>
      <div  style={{height: "calc(100vh - 70px)", background: `linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)) ,url(${banner1})  no-repeat center/cover` }}
        className="  text-white  flex items-center   "
        
      ><div className=" max-w-6xl mx-auto px-2 text-center">
        <h1 className="md:text-8xl text-5xl capitalize pb-5">Modern Painting Make <br /> Better Life </h1>
        <Link to='all' className="btn btn-primary rounded-full mt-5 w-60"> <FaPaintBrush></FaPaintBrush>  All Painting And Drawing</Link>
        </div>
      </div>
      </div>
        <div>
      <div  style={{height: "calc(100vh - 70px)", background: `linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)) ,url(${banner2})  no-repeat center/cover` }}
        className="  text-white  flex items-center   "
        
      ><div className=" max-w-6xl mx-auto px-2 text-center">
        <h1 className="md:text-8xl text-5xl capitalize pb-5">Experiences for the Artist in you </h1>
        <Link to='all' className="btn btn-primary rounded-full mt-5 w-60"> <FaPaintBrush></FaPaintBrush>  All Painting And Drawing</Link>
        </div>
      </div>
      </div>
        <div>
      <div  style={{height: "calc(100vh - 70px)", background: `linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)) ,url(${banner3})  no-repeat center/cover` }}
        className="  text-white  flex items-center   "
        
      ><div className=" max-w-6xl mx-auto px-2 text-center">
        <h1 className="md:text-8xl text-5xl capitalize pb-5">pursue your passion. Create your life </h1>
        <Link to='all' className="btn btn-primary rounded-full mt-5 w-60"> <FaPaintBrush></FaPaintBrush>  All Painting And Drawing</Link>
        </div>
      </div>
      </div>
        
       
        
      </Slider>
    </div>
        </div>
    );
};

export default Slide;