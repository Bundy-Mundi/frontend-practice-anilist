import React from "react";

export default ({ height, children }) => {
  return (
    <main style={{
      height: height ?? null,
      width:"100%"
    }}>
      { children }
    </main>
  )
}