import React, { useState, useEffect, useContext } from "react";
import { Context } from "../_context/ContextProvider";
import Layout from "../components/Layout/Layout";
import { testApi } from "../utils/apiRequests";

export default () => {
  const Theme = useContext(Context);
  const [ res, setRes ] = useState(null);
  const [ trigger, setTrigger ] = useState(false);
  const handleClick = () => {
    setTrigger(!trigger);
  };

  useEffect(()=>{
    testApi(setRes);
    console.log(res)
  },[trigger])

  return (
    <Layout mainHeight="100vh" theme={Theme}>
      <div style={{ 
        height:"100%", 
        width:"100%", 
        display:"flex",
        justifyContent:"center", 
        alignItems:"center", 
        }}>
        HOME
        <button onClick={handleClick}>GET</button>
      </div>
    </Layout>
  )
}