import React, { useEffect, useState } from 'react';

import  TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
import fire from '../fire';

const WeightList = () =>{
    const [weights, setWeights] = useState([]);

    TimeAgo.addDefaultLocale(en);
    const timeAgo = new TimeAgo('en-US');

    const ref = fire.firestore().collection("user").orderBy('Timestamp','desc');

    const getData = ()=>{
        ref.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
            setWeights(items);
        })
    }

    useEffect(()=>{
        getData();
    },[]);

    return <div>
        <div className='login-card'>
            <h1>Recent Updates</h1>
            <ol>
                {
                    weights.map(w=>{
                        if (weights!==[]) {
                            return <li>
                                <h3>{w.Weight} Kg</h3>
                                <p> - {timeAgo.format(w.Timestamp.seconds*1000)}</p>
                                </li>
                        }
                        return <p>No entries!</p>
                    })
                }
            </ol>
        </div>
    </div>
}

export default WeightList;