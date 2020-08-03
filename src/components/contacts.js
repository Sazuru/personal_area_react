import React, { useState, useEffect, useCallback } from "react";

export default function Contacts() {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(() => {
    let apiUrl = `https://jsonplaceholder.typicode.com/users`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  console.log(users);
  return (
    <div className="container">
      <div className="card card-default" id="card_contacts">
        <div
          id="contacts"
          className="panel-collapse collapse show"
          aria-expanded="true"
        >
          <ul className="list-group pull-down" id="contact-list">
            {users.map(user => (
              <li className="list-group-item" key={user.id}>
                <div className="row w-100">
                  <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img
                      src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg"
                      alt="Mike Anamendolla"
                      className="rounded-circle mx-auto d-block img-fluid"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <label className="name lead">{user.name}</label>
                    <br />
                    <span
                      className="fa fa-map-marker fa-fw text-muted"
                      data-toggle="tooltip"
                      title=""
                      data-original-title={user.address.street}
                    />
                    <span className="text-muted">{user.address.street}</span>
                    <br />
                    <span
                      className="fa fa-phone fa-fw text-muted"
                      data-toggle="tooltip"
                      title=""
                      data-original-title={user.phone}
                    />
                    <span className="text-muted small">{user.phone}</span>
                    <br />
                    <span
                      className="fa fa-envelope fa-fw text-muted"
                      data-toggle="tooltip"
                      data-original-title=""
                      title=""
                    />
                    <span className="text-muted small text-truncate">
                      {user.email}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
