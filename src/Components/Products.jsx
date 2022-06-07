import React from 'react'
import {Link} from "react-router-dom"
import styles from "./products.module.css"
export const Products = () => {
let [prod,setProd]=React.useState([])
React.useEffect(()=>{
    fetch(` http://localhost:8000/products`)
    .then((resp)=>(resp.json()))
    .then((resp)=>{
        setProd(resp)
    })
},[])
  return (
    <div style={{marginTop:"10%"}}className={styles.container}>
        <table className={styles.table} >
            <tr>
                <th>NAME</th>
                <th>PRICE</th>
                <th>MORE DETAILS</th>
            </tr>
            
                {prod.map((el)=>(
                    <tr>
                        <td>{el.name}</td>
                        <td>{el.price}</td>
                        <Link to={`/products/${el.id}`}> <td>Click here</td></Link>
                       
                    </tr>
                ))

                }
            
        </table>

    </div>
  )
}
