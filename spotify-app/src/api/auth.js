import { useEffect, useState } from "react";

export const useGetToken = () => {
  const [clientToken, setClientToken] = useState(null);

  useEffect(() => {
    async function loadToken() {
      try {
        let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
        let token = urlParams.get("access_token");
    
        setClientToken(token);
      } catch (error) {
        console.log(error);
      }
    }

    loadToken();
  }, [])

  return [clientToken, setClientToken];
}