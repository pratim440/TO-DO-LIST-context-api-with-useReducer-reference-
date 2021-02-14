import React, { useState } from "react";
import "./../css/ListItems.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStateValue } from "./../StateProvider";

function ListItems({ value }) {
  const [animate, setAnimate] = useState(true);
  const [{ items }, dispatch] = useStateValue();
  const handleClick = (event) => {
    dispatch({ type: "DELETE", value: value });
  };
  return (
    <div className="listItems flex">
      <p>{value}</p>
      <DeleteIcon className="icon" onClick={handleClick} />
    </div>
  );
}

export default ListItems;
