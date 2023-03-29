import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import http from "./services/httpService";
//import Sidebar from "./components/Sidebar";
//import Dashboard from "./pages/Dashboard";
//import Users from "./pages/Users";
//import Payloads from "./pages/Payloads";
//import Graphs from "./pages/Graphs";
//import Tasks from "./pages/Tasks";
//import Guide from "./pages/Guide";
//import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import config from "./config.json";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./components/registerForm";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "UPDATED";
    const { data } = await http.put(config.apiEndpoint + "/" + post.id, post);

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
      await http.delete("s" + config.apiEndpoint + "/" + post.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("this post has already been deleted.");
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <RegisterForm />
        <LoginForm />
        {/*
        <NavBar />
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Payloads" element={<Payloads />} />
            <Route path="/Graphs" element={<Graphs />} />
            <Route path="/Tasks" element={<Tasks />} />
            <Route path="/Guide" element={<Guide />} />
          </Routes>
        </Sidebar> */}
      </BrowserRouter>
    );
  }
}

export default App;
