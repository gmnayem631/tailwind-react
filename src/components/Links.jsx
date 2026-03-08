import React from "react";

const Links = ({ link }) => {
  return (
    <li key={link.id} className="">
      <a href={link.path}>{link.menuName}</a>
    </li>
  );
};

export default Links;
