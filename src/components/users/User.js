import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    title: "",
    author: "",
    rating: "",  
    gender: "",
    publisher: "",
    availability: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/book/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Title: {user.title}</li>
        <li className="list-group-item">Author name: {user.author}</li>
        <li className="list-group-item">Rating: {user.rating}</li>
        <li className="list-group-item">gender: {user.gender}</li>
        <li className="list-group-item">publisher: {user.publisher}</li>
        <li className="list-group-item">Availability: {user.availability}</li>
      </ul>
    </div>
  );
};

export default User;
