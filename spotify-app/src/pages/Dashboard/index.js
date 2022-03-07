import React from "react";
import Login from "../../components/Login";
import { SearchArtists } from "../../components/SearchArtists";
import { ArtistList } from "../../components/ArtistList";
import Container from 'react-bootstrap/Container';

const Dashboard = ({ onSubmit, onChange, onClick, artists, searchKey, getArtistId, clientToken }) => {
  return(
    <Container className="px-4">
      {clientToken ? 
        (
          <>
            <SearchArtists
              onClick={onClick} 
              onSubmit={onSubmit} 
              onChange={onChange}
            />
            {searchKey && artists && (
              <ArtistList 
                artists={artists} 
                searchKey={searchKey} 
                getArtistId={getArtistId} 
              />
            )}
          </>
        )
        :
        (
          <Login />
        )}

    </Container>
  );
}

export default Dashboard;