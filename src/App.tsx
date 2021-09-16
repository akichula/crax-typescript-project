import React, {useEffect} from "react";
import {Navbar, AppRoutes} from "./components";
import {Layout} from "antd";
import "./App.css";
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/user";

const App: React.FC = () => {
  const {setUser, setIsAuth} = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({username: localStorage.getItem("username" || "")} as IUser);
      setIsAuth(true);
    }
  }, []);
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRoutes />
      </Layout.Content>
    </Layout>
  );
};

export default App;
