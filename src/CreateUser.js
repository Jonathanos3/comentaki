import React, { useContext, useState } from "react";
import { AuthContext } from "./auth";
import "./styles.css";

const CreateUser = () => {
  const auth = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", passwd: "" });
  const onChange = (campo) => (evt) => {
    setForm({
      ...form,
      [campo]: evt.target.value,
    });
  };

  if (auth.user !== null) {
    return null;
  }

  return (
    <React.Fragment>
      <span className="create-count">Criar nova conta: </span>
      {auth.createUser.createUserState.error !== "" && (
        <p>{auth.createUser.createUserState.error}</p>
      )}
      <input
        className="input"
        type="text"
        placeholder="Seu e-mail"
        value={form.email}
        onChange={onChange("email")}
      />
      <br />
      <input
        className="input"
        type="password"
        placeholder="Sua senha"
        value={form.passwd}
        onChange={onChange("passwd")}
      />
      <br />
      <button
        className="btn-create"
        onClick={() => {
          auth.createUser.createUser(form.email, form.passwd);
        }}
      >
        Criar conta
      </button>
    </React.Fragment>
  );
};
export default CreateUser;
