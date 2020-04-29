import React from "react";
import SideBar from "./sideBar";
import Posts from "./posts";
import { Route } from "react-router-dom";
import Users from "./users";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Route path="/admin/users" component={Users} />
      <Route path="/admin/posts" component={Posts} />
    </div>
  );
};

export default Dashboard;
