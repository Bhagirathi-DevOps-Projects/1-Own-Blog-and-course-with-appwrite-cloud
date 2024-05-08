import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ Children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    console.log("authStatus :: ", authStatus);
    //TODO: make it more easy
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>loading..</h1> : <div>{Children}</div>;
}

export default Protected;
