import "slick-carousel/slick/slick.css";
import axios from "axios";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useEffect, useState } from "react";

const FreeBook = () => {

  const [book,setBook] = useState([]);
    useEffect(()=>{
        const getBook = async()=>{
          try {
           let response = await axios.get('/book');
           console.log(response.data);
           setBook(response.data)
           
          } catch (error) {
             console.error("error",error);
             
          }
        }
        getBook();
    },[])






    const filterData = book.filter((data)=>data.category === "Free");
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
  return (
    <>
       <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
          <div>
          <h1 className="font-semibold text-xl pb-2 ">Free Offered Courses</h1>
           <p>Discover a vast collection of books across genres on our website. From bestsellers to classics</p>

          </div>
       <div>
       <Slider {...settings}>
         {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
         ))}
      </Slider>
       </div>
       </div>

    </>
  )
}

export default FreeBook