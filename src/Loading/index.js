import React from "react";
import { Row, Col } from "antd";

import Loading_01 from "./components/loading_01";

export default function index() {
  return (
    <div>
      <Row gutter={[8, 8]} justify="center" style={{ height: "70px" }}>
        <Col sm={4} xs={24}>
          <Loading_01 />
        </Col>
      </Row>
    </div>
  );
}
