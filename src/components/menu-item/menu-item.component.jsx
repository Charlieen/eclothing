import React from 'react';
import { withRouter,Link }from 'react-router-dom';
import './menu-item.style.scss';
import { CollectionShop } from '../collection-shop/collection-shop.component';
//


const MenuItem =({title,imageUrl,size,linkUrl,match,history})=>(
    <div className={`${size} menu-item`} 
    onClick={()=>history.push(`${match.url}${linkUrl}`)}>
     <div 
        className="background-image"
        style ={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
        <div className="content"> 
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>

   

)
/**
 * HOC: higher order component is just a  function that takes another component as an argument
 * transform it into another component and returns that transformed component out of itself so we'll
 * definitely explore that further;
 */
export default withRouter(MenuItem);