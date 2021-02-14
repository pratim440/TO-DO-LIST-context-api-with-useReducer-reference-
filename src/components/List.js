import React from "react";
import "./../css/List.css";
import Date from "./Date";
import ListItems from "./ListItems";
import { useStateValue } from "./../StateProvider";

function List() {
  const [{ items }, dispatch] = useStateValue();
  const item = items.length;
  return (
    <div className="list_container">
      <Date />
      {items.map((item, index) => (
        <ListItems value={item} key={index} />
      ))}
    </div>
  );
}

export default List;
