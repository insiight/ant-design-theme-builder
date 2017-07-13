import React from 'react';
import { Row, Col } from 'antd';

export default function DemoComponent_grid_offset() {
return(
  <div>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>col-6 col-offset-6</Col>
      <Col span={6} offset={6}>col-6 col-offset-6</Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>col-12 col-offset-6</Col>
    </Row>
  </div>);
};

export const demo = <DemoComponent_grid_offset key="DemoComponent_grid_offset" />;
