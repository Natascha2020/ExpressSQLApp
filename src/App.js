import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Axios from "axios";
import "./App.css";

const App = () => {
  const [allPosts, getAllPosts] = useState({});
  const [postUpdate, setPostUpdate] = useState(false);

  const apiUrl = "http://localhost:3000/admin/";
  const newImageUrl = "https://picsum.photos/200/300";

  // fetching all posts from API
  useEffect(() => {
    fetchPosts();
  }, [postUpdate]);

  const fetchPosts = async () => {
    try {
      const { data } = await Axios.get(apiUrl);
      getAllPosts(data);
      console.log(data);
      setPostUpdate(false);
    } catch (error) {
      console.error(error);
    }
  };

  // handle update of specific post in database with a new random image url

  const editPost = async (id) => {
    try {
      await Axios.put(apiUrl + id, { imageurl: newImageUrl });
      setPostUpdate(true);
    } catch (error) {
      console.error(error);
    }
  };

  // handle delete of spcific post in database
  const deletePost = async (id) => {
    try {
      await Axios.delete(apiUrl + id);
      setPostUpdate(true);
    } catch (error) {
      console.error(error);
    }
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
