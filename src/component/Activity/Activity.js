import React, { useEffect, useState } from 'react';
import Selection from '../Selection/Selection';
import Task from '../Task/Task';
import './Activity.css';

const Activity = () => {
    const[tasks,setTasks]=useState([])
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('activities.json')
       // fetch('products.json')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[])
     
    const clickHandle=(selectedTask)=>{

      let newList=[]
      newList=[...cart,selectedTask]
      setCart(newList)
      
    }
    return (
        
            <div className='activity'>
            <div className='task-container'>
              {
                tasks.map(task=><Task
                    key={task.id}
                    task={task}
                    handleAddToCart={clickHandle}
                >

                </Task>)
              }

            </div>
            <div className='selection-container'>
                   <Selection selection={cart} ></Selection>
            </div>
        </div>
    );
};

export default Activity;