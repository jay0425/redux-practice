import React from 'react';
import { useSelector } from 'react-redux';

const GradSonBox = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      GradSonBox
      {count}
    </div>
  );
};

export default GradSonBox;
