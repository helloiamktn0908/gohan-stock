import { Button } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import { useAuthContext } from "./AuthProvider";
import { auth, db } from "./firebase";
import gohan1 from "./images/gohan1.png";
import gohan2 from "./images/gohan2.png";
import gohan3 from "./images/gohan3.png";
import gohan4 from "./images/gohan4.png";
import gohan5 from "./images/gohan5.png";
import gohan6 from "./images/gohan6.png";
import togu from "./images/togu.png";

export const Main: FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const [stock, setStock] = useState(10);

  const docRef = db.collection("stock").doc("stock");
  useEffect(() => {
    docRef
      .get()
      .then((doc: any) => {
        if (!doc) return;
        setStock(doc.data().stock);
      })
      .catch((error: any) => {
        console.log("Error getting document:", error);
      });
  }, []);

  const remove = () => {
    if (stock > 0) {
      setStock((prev) => prev - 1);
      docRef.set({
        stock: stock - 1,
      });
    }
  };

  const add = () => {
    setStock((prev) => prev + 1);
    docRef.set({
      stock: stock + 1,
    });
  };

  const image = (stock: number) => {
    switch (stock) {
      case 0:
        return togu;
      case 1:
        return gohan1;
      case 2:
        return gohan2;
      case 3:
        return gohan3;
      case 4:
        return gohan4;
      case 5:
        return gohan5;
      default:
        return gohan6;
    }
  };

  const logout = () => {
    auth.signOut();
    navigate("/signin");
  };

  if (!user) {
    return <Navigate to='/signin' />;
  } else {
    return (
      <div className='App'>
        <p className='text'>
          ごはんの残りは
          <br />
          あと{stock}個だよ
        </p>
        <div className='buttons'>
          <Button variant='outlined' onClick={remove} className='button'>
            食べた
          </Button>
          <Button variant='outlined' onClick={add} className='button'>
            炊いた
          </Button>
        </div>
        <div className='background'>
          <img src={image(stock)} className='gohan' alt='ごはん' />
        </div>
        <Button onClick={logout}>ログアウト</Button>
      </div>
    );
  }
};
