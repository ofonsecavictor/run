import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const UpIcon = ({ width, height, stroke }: { width?: number; height?: number; stroke?: string }) => (
  <Svg
    width={width || 24}
    height={height || 24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M12 17L12 8"
      stroke={stroke || '#200E32'}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 11L12 7L8 11"
      stroke={stroke || '#200E32'}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
