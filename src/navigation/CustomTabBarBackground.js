import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Dimensions} from 'react-native';
import {COLORS} from '@theme';

const {width} = Dimensions.get('window');
const height = 81.25;
const bumpWidth = 100;
const bumpHeight = 35;
const centerX = width / 2;
const left = centerX - bumpWidth / 2;
const right = centerX + bumpWidth / 2;

const CustomTabBarBackground = () => {
  const path = `
    M0,0
    H${left}
    C${left + 10},0 ${centerX - 35},-${bumpHeight} ${centerX},-${bumpHeight}
    C${centerX + 35},-${bumpHeight} ${right - 10},0 ${right},0
    H${width}
    V${height}
    H0
    Z
  `;

  return (
    <Svg width={width} height={height + bumpHeight}>
      <Path d={path} fill={COLORS.white} />
    </Svg>
  );
};

export default CustomTabBarBackground;
