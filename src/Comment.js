import React, { useContext } from "react";
import Time from "./Time";
import { AuthContext } from "./auth";

const Comment = ({ comment }) => {
  const auth = useContext(AuthContext);
  return (
    <div className="comments">
      {comment.content} por: {comment.user.name} em:{" "}
      <Time timestamp={comment.createdAt} />
    </div>
  );
};
export default Comment;
