// @components/common/CurvedUpRectangle.js
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {width as screenWidth} from '@responsive'; // đảm bảo không bị trùng tên

const CurvedUpRectangle = ({width = screenWidth, height = 81.25}) => {
  const curveWidth = 80;
  const curveHeight = 30;

  const startCurve = (width - curveWidth) / 2;
  const endCurve = startCurve + curveWidth;

  const path = `
    M0,${curveHeight}
    H${startCurve}
    Q${width / 2},0 ${endCurve},${curveHeight}
    H${width}
    V${height}
    H0
    Z
  `;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Path d={path} fill="#ffffff" />
    </Svg>
  );
};

export default CurvedUpRectangle;
