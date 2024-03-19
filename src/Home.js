import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
  //setName is used to chnage the value
  //can be of any DataType 
  const [blogs,setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
  //KEY property react uses to keep track of each output in dom
  //so if data changes in any point then react can keep track of those items
  // So we need to Add KEY Property
  //event Listner / Click Events
  //e = different types of event objects
 //useState is a fucntion (React Hook) used to make a reactive value and helps us to update the value.
  return (
    <div className="home">
      {/* Anonymos Function to <button onClick={handleClick}> handle dynamic Values for on Click*/}
     <BlogList blogs={blogs} title = "All Blogs !"/> {/* Type pf Props*/}
    </div>
  );
};

export default Home;
