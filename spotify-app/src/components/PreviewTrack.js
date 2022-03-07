import React from "react";

export const PreviewTrack = ({ src }) => {
  return (
    <>
      <video height="30" width="220" src={src} controls /> 
    </>
  )
}