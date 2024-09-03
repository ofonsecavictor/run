import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg';

export const ChartIcon = ({ width, height, fill }: { width: number; height: number; fill: string }) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 22 22"
        fill="none"
    >
        <Path
            d="M21 10C21 6.13401 17.866 3 14 3V10H21Z"
            stroke={fill}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M11 21C15.4183 21 19 17.4183 19 13H11V5C6.58172 5 3 8.58172 3 13C3 17.4183 6.58172 21 11 21Z"
            stroke={fill}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
