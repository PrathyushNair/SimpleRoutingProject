import React from 'react'
import styles from "./home.module.css"
export const Home = () => {
  return (
    <div>
        
        <div className={styles.container}>
            <div>
                <img style={{width:"100%",height:"400px"}} src="https://www.gizbot.com/img/2019/10/amazon-fab-phone-fest-offers-on-smartphones-dasara-discounts-1570262929.jpg"/>
            </div>
        </div>
        <div className={styles.div1}>
        <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzmrznOU7WPzXCxFRh_rHHfaZu1MeRm3kFauRaW2v0FyiFys76jk6JIJz9rMdAseaua8&usqp=CAU"/>
        </div>
        <div >
            <img src="data:image/jpeg;base64,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"/>
        </div>
        <div >
            <img src="https://asset22.ckassets.com/resources/image/staticpage_images/Titan-Mobile-10April2018.jpg"/>
        </div>
        <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzmrznOU7WPzXCxFRh_rHHfaZu1MeRm3kFauRaW2v0FyiFys76jk6JIJz9rMdAseaua8&usqp=CAU"/>
        </div>
        </div>
             
    </div>
  )
}