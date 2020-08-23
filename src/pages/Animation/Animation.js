import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { BY_YEAR_AND_SEASON } from "../../graphql/queries";
import { request_test, year_season } from "../../graphql/requests";

export default () => {
  const [ data, setData ] = useState({});
  useEffect(()=>{
    year_season(BY_YEAR_AND_SEASON, 2019)
      .then(res => {
        const data = res.Media
        console.log(res)
        setData(data)
      })
      .catch(err => console.log(err))
  },[])
  return (
  <>
    <Layout>
      <div>
        {
          data.english
        }
        {
          data.native
        }
      </div>
    </Layout>
  </>)
}