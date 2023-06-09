import React from "react";
import { Row, Col } from "antd";

import Btn_01 from "./components/btn_01";
import Btn_02 from "./components/btn_02";

export default function index() {
  return (
    <div>
      <Row gutter={[8, 8]} justify="center" style={{ height: "70px" }}>
        <Col sm={4} xs={24}>
          <Btn_01 />
        </Col>
        <Col sm={4} xs={24}>
          <Btn_02 />
        </Col>
      </Row>
    </div>
  );
}
