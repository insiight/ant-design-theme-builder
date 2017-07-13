import React from 'react';
import { Carousel } from 'antd';

export default function DemoComponent_carousel_vertical() {
return(
  <Carousel vertical>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
);
};

export const demo = <DemoComponent_carousel_vertical key="DemoComponent_carousel_vertical" />;
