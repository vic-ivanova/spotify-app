import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaCompactDisc } from "react-icons/fa";

export const ArtistList = ({ artists, searchKey, getArtistId }) => {
  const filteredArtists = artists.filter(artist => artist.name.toLowerCase().includes(searchKey.toLowerCase()));
  const defaultImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  return (
    <Container className="d-flex flex-wrap mb-4" style={{ gap: "8px" }}>
      {filteredArtists.map((artist) => {
        return (
          <Card key={artist.id} style={{ width: "24%" }}>
          <div style={{ height: "250px" }}>
            <Card.Img 
              className="p-3 h-100" 
              variant="top"
              style={{ objectFit: "cover" }}
              src={artist.images.length === 0 ? defaultImage : artist.images[0].url} 
            />
          </div>
          <Card.Body className="pt-0 d-flex flex-wrap flex-row">
            <Card.Text className="text-dark mb-0 w-100" style={{ fontSize: "1.2rem"}}>
              {artist.name}
            </Card.Text>
            <Button 
              variant="success" 
              className="w-100 align-self-end" 
              style={{ maxHeight: "38px" }}
              onClick={() => getArtistId(artist.id)}
            >
              View Discography <FaCompactDisc />
            </Button>
          </Card.Body>
        </Card>
        )
      })}
    </Container>
  );
}

