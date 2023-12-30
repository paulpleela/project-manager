import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function Home() {
  const [user, setUser] = useState({});

  function handleCredentialResponse(response) {
    var userObject = jwtDecode(response.credential);
    setUser(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "150068986952-ebop5k60dc4asiqtdg747t7ogarh5353.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      width: 220,
      height: 50,
    });
  }, []);

  return (
    <>
      <div id="signInDiv"></div>
    </>
  );
}
