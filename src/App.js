import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Axios from "axios";
import "./App.css";

const App = () => {
  const [allPosts, getAllPosts] = useState({});
  const [postUpdate, setPostUpdate] = useState(false);

  // fetching all posts from API
  useEffect(() => {
    Axios.get("http://localhost:3000/admin")
      .then((response) => {
        getAllPosts(response.data);
        console.log(response.data);
        setPostUpdate(false);
      })
      .catch((error) => console.error(error));
  }, [postUpdate]);

  // handle update of specific post in database with a new random image url
  const editPost = (id) => {
    Axios.put("http://localhost:3000/admin/" + id, { imageurl: "https://picsum.photos/200/300" })
      .then((response) => {
        console.log(response);
        setPostUpdate(true);
      })
      .catch((error) => console.error(error));
  };

  // handle delete of spcific post in database
  const deletePost = (id) => {
    Axios.delete("http://localhost:3000/admin/" + id)
      .then((response) => {
        console.log(response);
        setPostUpdate(true);
      })
      .catch((error) => console.error(error));
  };

  // mapping through data to render travel destination cards and updating state variables via onClick-events of buttons
  return (
    <div className="App">
      <h1>Recommended travel destinations</h1>
      <div className="cardWrapper">
        {allPosts && allPosts.length
          ? allPosts.map((post) => {
              return <Card key={post.id} handleEdit={() => editPost(post.id)} handleDelete={() => deletePost(post.id)} id={post.id} data={post} />;
            })
          : undefined}
      </div>
    </div>
  );
};

export default App;
