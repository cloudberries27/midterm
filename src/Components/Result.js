import React, { useEffect, useState } from 'react';
import axios from 'axios';

const [src, setSrc] = useState('');

useEffect(()=>{
  axios.get("https://pixabay.com/api/?key=14127947-cc08d94ef47172b150050df0d&q=star+wars&image_type=photo").then(response=>{
    console.log(response);
    setSrc(reponse.hits[0]);
  }).catch(err => console.log(err));;
}, []);

function Result(){
  return(
    <div>
      <img src="{src.webformatURL}"></img>
    </div>
  )
}

export default Result;
