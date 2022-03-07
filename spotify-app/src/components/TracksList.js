import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { PreviewTrack } from "./PreviewTrack";

export const TrackList = ({ tracks }) => {
  return (
    <Container className="d-flex flex-wrap mb-4">
      <Card className="w-100">
        {/* <div style={{ height: "250px" }}>
          <Card.Img 
            className="p-3 h-100" 
            variant="top"
            style={{ objectFit: "cover" }}
            src={album.images.length === 0 ? defaultImage : album.images[0].url} 
          />
        </div> */}
        <Card.Body className="pt-0 d-flex flex-wrap flex-row">
          {/* <Card.Text className="text-dark mb-0 w-100" style={{ fontSize: "1.2rem"}}>
            {album.name}
          </Card.Text> */}
          <ol>
            {tracks.map((track) => {
              return (
              <li key={track.id} style={{ textAlign: "left" }}><PreviewTrack src={track.preview_url} /> {track.name}</li>
              )
            })}
          </ol>
        </Card.Body>
      </Card>
    </Container>
  );
}

