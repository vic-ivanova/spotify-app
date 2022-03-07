import React from "react";
import { AlbumList } from "../../components/AlbumList";

const Albums = ({clientToken, albums, searchKey, getAlbumId}) => {
  return(
    <>
      {clientToken && (
        <AlbumList albums={albums} searchKey={searchKey} getAlbumId={getAlbumId} />
      )}
    </>
  )
}

export default Albums;