import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ChevronRight = ({ width, height, stroke }: { width?: number; height?: number; stroke?: string }) => (
  <Svg
    width={width || 24}
    height={height || 24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M9.5 7L14.5 12L9.5 17"
      stroke={stroke || '#000000'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

