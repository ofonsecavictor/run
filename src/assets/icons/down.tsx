import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const DownIcon = ({ width, height, stroke }: { width?: number; height?: number; stroke?: string }) => (
  <Svg
    width={width || 24}
    height={height || 24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M12 7L12 16"
      stroke={stroke || '#200E32'}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 13L12 17L16 13"
      stroke={stroke || '#200E32'}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
