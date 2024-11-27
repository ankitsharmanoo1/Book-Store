import Cards from "./Cards"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
  const [book,setBook] = useState([]);
  useEffect(()=>{
      const getBook = async()=>{
        try {
         let response = await axios.get('http://localhost:3000/book');
         console.log(response.data);
         setBook(response.data)
         
        } catch (error) {
           console.error("error",error);
           
        }
      }
      getBook();
  },[])


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
             <h1 className="text-2xl font-semibold md:text-4xl">{`We're delighted to have you `} <span className="text-yellow-500">Here!</span></h1>
             <p className="mt-12">
             Discover a vast collection of books across genres on our website. From bestsellers to classics, enjoy seamless browsing, personalized recommendations, and secure purchasing.
             </p>
            <Link to="/">

             <button className="bg-yellow-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-yellow-700 duration-300">Back</button>
            </Link>
        </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {
              book.map((item)=>(
                <Cards key={item.id} item={item}/>
              ))
          }
          </div>
      </div>
    </>
  )
}

export default Course