import React from 'react'
import { Routes,Route,useParams,useNavigate} from 'react-router-dom'
import {Link} from "react-router-dom"
import styles from "./proddetail.module.css"
export const Proddetail = () => {
    let {id}=useParams()
    let [indi,setIndi]=React.useState({})
    React.useEffect(()=>{
            fetch(`  http://localhost:8000/products/${id}`)
            .then((resp)=>(resp.json()))
            .then((resp)=>{
                  
                setIndi(resp)})
        },[id])

    return((Object.keys(indi)).length===0 ? (<h2>Product not found</h2>):(<div className={styles.container}>
        <div className={styles.leftdiv}>
        <div>Name:{indi.name}</div>
        <div>Price:{indi.price}</div>
        </div>
        <div><img src={indi.img}/></div>
       </div>))
}
