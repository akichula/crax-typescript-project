import React from "react";
import {Navbar, AppRoutes} from "./components";
import {Layout} from "antd";
import "./App.css";

const App: React.FC = () => {
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
