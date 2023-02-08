import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
//import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import Payloads from "./pages/Payloads";
// import Graphs from "./pages/Graphs";
// import Tasks from "./pages/Tasks";
// import Guide from "./pages/Guide";
//import NavBar from "./components/navbar";
//import LoginForm from "./components/loginForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await axios.post(apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "UPDATED";
    const { data } = await axios.put(apiEndpoint + "/" + post.id, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });
    try {
      await axios.delete(apiEndpoint + "/" + post.id);
      throw new Error("");
    } catch (ex) {
      alert("something gone wrong");
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>

      //============================================
      // <BrowserRouter>
      //   <LoginForm />
      //   <NavBar />
      //  <Sidebar>
      //   <Routes>
      //     <Route path="/" element={<Dashboard />} />
      //     <Route path="/Dashboard" element={<Dashboard />} />
      //     <Route path="/Users" element={<Users />} />
      //     <Route path="/Payloads" element={<Payloads />} />
      //     <Route path="/Graphs" element={<Graphs />} />
      //     <Route path="/Tasks" element={<Tasks />} />
      //     <Route path="/Guide" element={<Guide />} />
      //   </Routes>
      // </Sidebar>
      // </BrowserRouter>
    );
  }
}

export default App;
