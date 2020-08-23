import React, { useContext } from "react";
import { Context } from "../_context/ContextProvider";
import Layout from "../components/Layout/Layout";

export default () => {
  const Theme = useContext(Context);
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
      </div>
    </Layout>
  )
}