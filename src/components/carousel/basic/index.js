import './index.css';
import React from 'react';
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

export default function DemoComponent_carousel_basic() {
return(
  <Carousel afterChange={onChange}>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
);
};

export const demo = <DemoComponent_carousel_basic key="DemoComponent_carousel_basic" />;
