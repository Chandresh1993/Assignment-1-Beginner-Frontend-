import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [userList, setUserList] = useState([])


  async function fetchData() {
    let response = await axios("https://jsonplaceholder.typicode.com/users/");
    let user = await response.data;
    setUserList(user);
    console.log(userList);
  }

  useEffect(() => {

    fetchData();
  }, [])


  return (
    <>

      {

        userList.map((user) => {
          return <div key={user.id}  className="card mb-3  App" style={{ maxWidth: 10000 }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={"https://api.dicebear.com/6.x/adventurer/svg?seed="+ user.name}className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{user.name}</h2>
                  <h6 className="card-text" >Username:- {user.id}</h6>
                  <h6 className="card-text">Username:- {user.username}</h6>
                  <h6 className="card-text">Email:- {user.email} </h6>
                  <h6 className="card-text">Address:- {user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}</h6>
                  <h6 className="card-text">Geo:- {user.address.geo.lat},{user.address.geo.lng} </h6>
                  <h6 className="card-text">Phone:- {user.phone} </h6>
                  <h6 className="card-text">website:- {user.website} </h6>
                  <h6 className="card-text">Company:- {user.company.name},{user.company.catchPhrase},{user.company.bs} </h6>
          
                  
                </div>
              </div>
            </div>
          </div>
        })
      }



    </>
  );
}

export default App;
