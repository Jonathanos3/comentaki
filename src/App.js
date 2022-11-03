import React from "react";
import NewComment from "./NewComment";
import Comments from "./Comments";
import CreateUser from "./CreateUser";
import UserInfo from "./UserInfo";
import SignInUser from "./SignInUser";
import "./styles.css";

import { AuthProvider } from "./auth";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <span className="title">Bem vindo</span>
        <br />
        <span className="title"> Deixe seu comentário</span>
        <div className="create-user">
          <CreateUser />
        </div>
        <SignInUser />
        <br />

        <NewComment />
        <Comments />
        <UserInfo />
      </div>
    </AuthProvider>
  );
}

export default App;
