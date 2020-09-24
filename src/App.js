import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Axios from "axios";

const App = () => {
  const [allPosts, getAllPosts] = useState({});

  useEffect(() => {
    Axios.get("https://localhost:3000/admin")
      .then((response) => {
        console.log(response);
        getAllPosts(response);
      })
      .catch((error) => console.error(error));
  }, [allPosts]);

  const editPost = (id) => {};

  const deletePost = (id) => {};

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* {allPosts && allPosts.length
        ? allPosts.map((post, index) => {
            return ( */}
      <div>
        <Card /* key={index}  */ handleEdit={editPost} handleDelete={deletePost} /* data={post} */ />
      </div>
      {/*  );
          })
        : undefined} */}
    </div>
  );
};

export default App;
