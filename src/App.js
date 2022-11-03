import React from "react";
import NewComment from "./NewComment";
import Comments from "./Comments";
import CreateUser from "./CreateUser";
import UserInfo from "./UserInfo";
import SignInUser from "./SignInUser";

import { AuthProvider } from "./auth";

function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
        <SignInUser />
        <UserInfo />
      </div>
    </AuthProvider>
  );
}

export default App;
