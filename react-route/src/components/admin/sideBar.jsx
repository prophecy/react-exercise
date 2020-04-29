import React, { Component } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin/posts">Posts</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
