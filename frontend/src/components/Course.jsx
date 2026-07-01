import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async() => {
      try {
      const res = await axios.get("https://bookstore-wzcp.onrender.com/book");
       console.log(res.data)
       setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[]);

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-16 items-center justify-center text-center dark:bg-slate-900 dark:text-white">
            <h1 className="text-2xl md:text-4xl">
                We're delighted to have you{" "}
            <span className="text-pink-500">Here :)</span>
            </h1>
            <p className="mt-12">
             Explore our curated selection of book-related courses designed for avid readers, aspiring writers, and literature enthusiasts. From creative writing and literary analysis to publishing basics and book marketing, our courses empower you to grow your skills and passion. Learn at your own pace with expert-led modules and interactive content. Start your literary journey with us today!
                </p>
                <Link to="/">
            <button className="mt-6 btn btn-secondary hover:bg-pink-700">
              Back
            </button>
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {
             book.map((item) => (
              <Cards key={item.id} item={item}/>
             ))
          }
        </div>
    </div>
    </>
  );
}

export default Course
