import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

export const ChevronDown = ({ width, height, stroke }: { width?: number; height?: number; stroke?: string }) => (
  <Svg
    width={width || 24}
    height={height || 24}
    viewBox="0 0 24 24"
    fill="none"

  >
    <Rect width="24" height="24" fill="white" />
    <Path
      d="M17 9.5L12 14.5L7 9.5"
      stroke={stroke || '#000000'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

