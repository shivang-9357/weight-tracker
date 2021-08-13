import React, { useState } from 'react';
import fire from '../fire';

import './Weight.css';
import WeightList from './WeightList';

const Weight = (props) => {

    const [isData, setIsData] = useState(false);
    const [myWeight, setMyWeight] = useState(null);

    const submitHandler = async(event) =>{
        event.preventDefault();
        const newWeight = event.target.newWeight.value;
        setMyWeight(newWeight);
        console.log(props.userId);
        await fire.firestore().collection('user').doc(props.userId).set({
            uid:props.userId,
            Weight: newWeight,
            Timestamp: new Date()
        })
        setIsData(true);
    }

    const deleteHandler = async()=>{
        await fire.firestore().collection('user').doc(props.userId).delete();
        setIsData(false);
    }

    return <React.Fragment>
        <div className="nav-div">
        <button onClick={props.onClickLogout} className='custom-button'>Logout</button>
        </div>
    <div className='login-card'>
        
        <form onSubmit={submitHandler}>
        <h1>{!isData?"Let's get your weight.":"Your Weight is"}</h1>
        <div>
            <input name="newWeight" className="weight-input" placeholder={!isData?'Enter your weight(in kg)....':myWeight + ' Kg'}/>
            <button type="submit" className="custom-button">{!isData?'Submit':'Update'}</button>
            {isData && <button className="custom-button" type="button" onClick={deleteHandler}>Delete your Entry</button>}
        </div>
        </form>
    </div>
    <WeightList />
    </React.Fragment>
}

export default Weight;