import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Axios from "axios";

const App = () => {
  const [allPosts, getAllPosts] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:3000/admin")
      .then((response) => {
        getAllPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  /*  const editPost = (id) => {
    Axios.put("http://localhost:3000/admin/" + { id })
      .then((response) => {
        console.log(response);
        getAllPosts(response);
      })
      .catch((error) => console.error(error));
  };
 */
  const deletePost = (id) => {};

  return (
    <div className="App">
      <h1>Hello World</h1>
      {allPosts && allPosts.length
        ? allPosts.map((post) => {
            return (
              <div>
                <Card key={post.id} /* handleEdit={editPost} */ handleDelete={deletePost} id={post.id} data={post} />
              </div>
            );
          })
        : undefined}
    </div>
  );
};

export default App;
