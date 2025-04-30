"use client";

import React from 'react';

const createDummyMotionComponent = (OriginalComponent: React.ElementType) => {
  const MotionComponent = React.forwardRef((props: any, ref: React.Ref<HTMLElement>) => {
    const { initial, animate, transition, variants, ...rest } = props;
    return <OriginalComponent ref={ref} {...rest} />;
  });
  
  const displayName = 
    typeof OriginalComponent === 'string'
      ? OriginalComponent
      : OriginalComponent?.displayName || OriginalComponent?.name || 'Component';
  
  MotionComponent.displayName = `Motion(${displayName})`;
  return MotionComponent;
};

// Create basic motion components
export const motion = {
  div: createDummyMotionComponent('div'),
  span: createDummyMotionComponent('span'),
  img: createDummyMotionComponent('img'),
  button: createDummyMotionComponent('button'),
  a: createDummyMotionComponent('a'),
  ul: createDummyMotionComponent('ul'),
  li: createDummyMotionComponent('li'),
  p: createDummyMotionComponent('p'),
  h1: createDummyMotionComponent('h1'),
  h2: createDummyMotionComponent('h2'),
  h3: createDummyMotionComponent('h3'),
  section: createDummyMotionComponent('section'),
};