import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Menu, Row, Col } from "antd";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { RxButton, RxHome } from "react-icons/rx";

import HomePage from "./Home";
import ButtonPage from "./Button";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function App(props) {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    getItem(
      "Menus",
      "1",
      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
    ),
    getItem(
      "Home",
      "/Home",
      <Link to={`/Home`}>
        <RxHome />
      </Link>
    ),
    getItem(
      "Button",
      "/Button",
      <Link to={`/Button`}>
        <RxButton />
      </Link>
    ),
  ];

  const onClick = (e) => {
    if (e.key == "1") setCollapsed(!collapsed);
  };
  return (
    <>
      <OffCanvas
        width={262}
        transitionDuration={300}
        effect={"overlay"}
        isMenuOpened={true}
        position={"left"}
      >
        <OffCanvasBody
          className="offCanvas"
          style={{ marginLeft: collapsed ? "95px" : "277px" }}
        >
          <Row gutter={[8, 8]} justify="center">
            <Col xs={24}>
              <Routes>
                <Route path="/Home" element={<HomePage />} />
                <Route path="/Button" element={<ButtonPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Col>
          </Row>
        </OffCanvasBody>

        <OffCanvasMenu className="offCanvas-body">
          <Menu
            style={{ height: "100vh" }}
            defaultSelectedKeys={["1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            onClick={onClick}
            items={items}
          />
        </OffCanvasMenu>
      </OffCanvas>
    </>
  );
}
