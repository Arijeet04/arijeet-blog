import { Link } from "react-router-dom";

//Link Tags Are basically used to preventing the req going to server.
const Navbar = () => {
  return (
   <nav className='navbar'>
    <h1>Arijeet 'S Blog</h1>
    <div className='links'>  
        <Link to='/'>Home</Link>
        <Link to='/create'>New BLog</Link>
    </div>
   </nav>
  )
}

export default Navbar
