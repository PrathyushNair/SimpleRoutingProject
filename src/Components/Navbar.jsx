import React from 'react'
import { Home } from './Home'
import { Products } from './Products'
import {Link} from "react-router-dom"
export const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"gold"}}>
         <Link to="/"><span style={{color:"black",fontSize:"Larger"}}>Home</span></Link>
         <Link to="/products"><span style={{color:"black",fontSize:"Larger"}}>Products</span></Link>   
    </div>
  )
}
