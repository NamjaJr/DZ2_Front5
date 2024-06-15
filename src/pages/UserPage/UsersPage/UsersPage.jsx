import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFunctionOne } from "../../../reduxjs/actions";
import { Link, useParams } from "react-router-dom";

const UsersPage = () => {
  const user = useSelector((state) => state.fetchUsers.user);
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(asyncFunctionOne(id));
  }, [dispatch]);

  return (
      <div>
          <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaeRH12x9D0m44rTSmNl4g8Z7-SDfsvuTc8w&s${user.email}.png`}
              alt="User Avatar"
              className="user-avatar"
          />
          <h1>{user.email}</h1>
          <h2>{user.name}</h2>
          <h3>{user.username}</h3>
          <h4>{user.phone}</h4>
          <h4>{user.website}</h4>
          <Link to={"/"}>
              <button>Вернуться</button>
          </Link>
      </div>
  );
};

export default UsersPage;
