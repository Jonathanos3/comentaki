import React, { useContext, useState } from "react";
import { AuthContext } from "./auth";
import "./styles.css";

const SignInUser = () => {
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
      <div className="input-sing-1">
        <span className="sign-count">Entrar na sua conta: </span>
        {auth.signInUser.signInUserState.error !== "" && (
          <p>{auth.signInUser.signInUserState.error}</p>
        )}
        <input
          className="input-sign"
          type="text"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={onChange("email")}
        />
        <br />
        <input
          className="input-sign"
          type="password"
          placeholder="Sua senha"
          value={form.passwd}
          onChange={onChange("passwd")}
        />
        <br />
        <button
          className="btn-sign"
          onClick={() => {
            auth.signInUser.signInUser(form.email, form.passwd);
          }}
        >
          Entrar
        </button>
      </div>
    </React.Fragment>
  );
};
export default SignInUser;
