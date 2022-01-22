import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
export default function GoBack() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Button color="orange" onClick={goBack}>
      <i style={{marginRight:5}} className="fad fa-chevron-left"></i>Geri
    </Button>
  );
}
