import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link ,useHistory} from "react-router-dom";
const Cookie = require("js-cookie");

const Home = () => {
  let history = useHistory();
  const [users, setUser] = useState([]);

  const startEff = () => {
    if (Cookie.get("auth_t") === !undefined) {
      history.push("/login");
    } else{
      loadUsers();
    }
  };

  useEffect(() => {
    startEff();
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/book");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:5000/book/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Book Lists</h1>
        <table class="table table-hover">
          <thead class="bg-primary">
            <tr>
              <th scope="col">Book ID</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.title}</td>
                <td>{user.author}</td>
                <td>{user.availability}</td>
                <td>
                  <Link class="btn btn-success mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
