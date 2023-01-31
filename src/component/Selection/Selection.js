import React from 'react';
import person from '../../images/p.jpg'
import './Selection.css'
const Selection = (props) => {
    const {selection}=props;
   // console.log(cart)
   let time =0;
   for(const task of selection){
    time=time+task.time
   }

    function myFunction (){
        document.getElementById('demo').innerHTML="10 min"

    }
        function myFunction1 (){
            document.getElementById('demo').innerHTML="20 min"
        }

        function myFunction2 (){
            document.getElementById('demo').innerHTML="30 min"
    
        }
        function myFunction3 (){
            document.getElementById('demo').innerHTML="40 min"
    
        }

    return (
        <div className='select' >
        <div className='author-info'>
         <img src={person} alt="" />
         <p>Mahin Ferdous</p>
        </div>
        <div className='height'>
        <div className='height2'>
        <h4>75<small>kg</small></h4>
        <p>width</p>
        </div>
        <div className='height2'>
        <h4>6.5</h4>
        <p>height</p>                                                                       
        </div>
        <div className='height2'>
        <h4>25<small>yrs</small></h4>
        <p>age</p>
        </div>
        </div>  
        <div className='break'>
            <h3>Choose a break time :</h3>
        <button class="button button5" onClick={myFunction}>10 min</button>
        <button class="button button5" onClick={myFunction1}>20 min</button>
        <button class="button button5" onClick={myFunction2} >30 min</button>
        <button class="button button5" onClick={myFunction3}>40 min</button>
        <div className='time'>
              <h3>Exercise Time:</h3>
              <p>{time} min</p>
        </div>
        <div className="breaktime">
        <h3>Break time:</h3>
        <p id='demo'></p>
        </div>
            

        </div>
        </div>
    );
};

export default Selection;