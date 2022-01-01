import { Button, TextField } from "@material-ui/core";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

export const SignIn: FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const singIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          navigate("/");
        }
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <TextField
        name='email'
        onChange={changeEmail}
        error={email.length < 100 ? false : true}
        label='email'
        placeholder='email'
        variant='outlined'
        autoComplete='off'
      />
      <TextField
        name='password'
        onChange={changePassword}
        error={password.length < 100 ? false : true}
        label='password'
        placeholder='password'
        variant='outlined'
        autoComplete='off'
        type='password'
      />
      <Button onClick={() => singIn()}>ログイン</Button>
    </>
  );
};
