import React from 'react';
import './Task.css'

const Task = (props) => {
    const{name,img,time}=props.task
    const{handleAddToCart,task}=props
    return (
        <div>
            <div className='task'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Time to complete: {time} min</p>
            </div>
            <button onClick={()=>handleAddToCart(task)} className='button-cart'>
                <p className='btn-text' > Add To Cart</p>
                
            </button>
            </div>
        </div>
    );
}; 

export default Task;