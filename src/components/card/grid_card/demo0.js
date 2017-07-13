import React from 'react';
import { Card } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

export default function DemoComponent_card_grid_card() {
return(
  <Card title="卡片标题" noHovering bodyStyle={{ padding: 0 }}>
    <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
    <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
    <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
    <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
    <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
    <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
    <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
  </Card>
);
};

export const demo = <DemoComponent_card_grid_card key="DemoComponent_card_grid_card" />;
