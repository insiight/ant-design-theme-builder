import React from 'react';
import { Row, Col } from 'antd';

export default function DemoComponent_grid_reponsive_more() {
return(
  <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
  </Row>
);
};

export const demo = <DemoComponent_grid_reponsive_more key="DemoComponent_grid_reponsive_more" />;
