import React from "react";
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../redux/router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar: React.FC = () => {
  const router = useHistory();
  const {isAuth} = useTypedSelector(state => state.authReducer);
  return (
    <Layout.Header>
      <Row justify="end">
        {
          isAuth
            ?
            <>
              <div style={{ color: "white" }}>alex</div>
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item onClick={() => router.push(RouteNames.EVENT)} key="1">Выйти</Menu.Item>
              </Menu>
            </>
            :
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key="1">Логин</Menu.Item>
            </Menu>
        }
      </Row>
    </Layout.Header>
  );
};

export default Navbar;