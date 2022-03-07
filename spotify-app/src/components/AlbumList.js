import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const AlbumList = ({ albums, getAlbumId, searchKey }) => {
  const defaultImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  return (
    <Container className="d-flex flex-wrap mb-4" style={{ gap: "8px" }}>
      {searchKey && <h3 className="w-100" style={{ textTransform: "capitalize" }}>{searchKey}'s discography</h3>}
      {albums.map((album) => {
        return (
          <Card key={album.id} style={{ width: "24%" }}>
          <div style={{ height: "250px" }}>
            <Card.Img 
              className="p-3 h-100" 
              variant="top"
              style={{ objectFit: "cover" }}
              src={album.images.length === 0 ? defaultImage : album.images[0].url} 
            />
          </div>
          <Card.Body className="pt-0 d-flex flex-wrap flex-row">
            <Card.Text className="text-dark mb-0 w-100" style={{ fontSize: "1.2rem"}}>
              {album.name}
            </Card.Text>
            <Button 
              variant="success" 
              className="w-100 align-self-end" 
              style={{ maxHeight: "38px" }}
              onClick={() => getAlbumId(album.id)}
            >
              View Album
            </Button>
          </Card.Body>
        </Card>
        )
      })}
    </Container>
  );
}

