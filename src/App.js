import {useDispatch,useSelector} from "react-redux";
import { incrementCreator } from "./redux/actions";

import React, {useState} from "react";
import "./style.css";

let App = ()=>{

  let state = useSelector(function(state){
    return state });

    let dispatch = useDispatch();

    return(
      
      <>
      <button onClick={()=>{
        dispatch(incrementCreator)
      }}> + </button>
      <p>{state}</p>
      <button> - </button>
      </>

    );
}
