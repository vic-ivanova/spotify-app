import React from "react";
import { TrackList } from "../../components/TracksList";

const Tracks = ({ clientToken, tracks, searchKey }) => {
  return(
    <>
      {clientToken && (
        <TrackList tracks={tracks} searchKey={searchKey} />
      )}
    </>
  )
}

export default Tracks;