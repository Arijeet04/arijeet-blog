import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const {data:blogs , isPending , error} = useFetch('http://localhost:8000/blogs')
  //HOOKS: useState,useEffect
  //setName is used to chnage the value
  //can be of any DataType

  // Dependency Array [] only runs the useEffect only once
  //This Type of Hook that runs everytime we Render the Page/delete/update something in this page
 //when the name changes we want to run the useEffect Function.

  //used for deleting the Data We use fucntion in Home as We need to be update it and used it Like A Prop.
  {
    /*const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id); //if Blog id == input id then delete the blog.
    setBlogs(newBlogs);
  };*/
  }

  //KEY property react uses to keep track of each output in dom
  //so if data changes in any point then react can keep track of those items
  // So we need to Add KEY Property
  //event Listner / Click Events
  //e = different types of event objects
  //useState is a fucntion (React Hook) used to make a reactive value and helps us to update the value.

  return (
    <div className="home">
      {/* Anonymos Function to <button onClick={handleClick}> handle dynamic Values for on Click*/}
      {/* && condtional operator if first condition is true then only it moves to the next block*/}
      {error && <div>{error}</div>}
      {isPending && <div>Loading.......</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs !" />}
      {/* Type pf Props*/}
      {/*Filterting the Blogs */}
      {/*<p>{name}</p>
      <button onClick={() => setName("datla")}>Change Name</button>*/}
      {/*<BlogList blogs={blogs.filter((blog)=>blog.author == 'mario') title = "Mario's Blogs !" handleDelete={handleDelete}/> */}
    </div>
  );
};

export default Home;
