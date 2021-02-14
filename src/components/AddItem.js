import React, { useState } from "react";
import "./../css/AddItem.css";
import TextField from "@material-ui/core/TextField";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { useStateValue } from "./../StateProvider";

function AddItem() {
  const [item, setItem] = useState("");
  const [{ items }, dispatch] = useStateValue();

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleClick = (event) => {
    if (item === "") {
      return 0;
    }
    dispatch({ type: "ADD", value: item });
    setItem("");
    event.preventDefault();
  };
  return (
    <div className="addItem flex">
      <div className="input flex">
        <TextField
          autoComplete="off"
          value={item}
          onChange={handleChange}
          id="standard-basic"
        />
        <AddOutlinedIcon onClick={handleClick} className="icon" />
      </div>
    </div>
  );
}

export default AddItem;
