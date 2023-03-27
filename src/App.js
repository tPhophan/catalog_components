import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Menu, Row, Col } from "antd";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { RxButton, RxHome, RxReload } from "react-icons/rx";

import HomePage from "./Home";
import ButtonPage from "./Button";
import LoadingPage from "./Loading";

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
    getItem(
      "Loading",
      "/Loading",
      <Link to={`/Loading`}>
        <RxReload />
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
          style={{ marginLeft: collapsed ? "95px" : "262px", padding: "10px" }}
        >
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Button" element={<ButtonPage />} />
            <Route path="/Loading" element={<LoadingPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
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
