import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <NavLink
            to={"/dahboard/admin/create-category"}
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to={"/dahboard/admin/create-product"}
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to={"/dahboard/admin/users"}
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
