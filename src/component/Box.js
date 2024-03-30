import React from 'react';
import { useSelector } from 'react-redux';
import GradSonBox from './GradSonBox';

const Box = () => {
  let count = useSelector((state) => state.count);
  return (
    <div>
      This is Box {count}
      <GradSonBox />
    </div>
  );
};

export default Box;
