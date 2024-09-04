import React from 'react';
import { UpIcon } from '../../assets/icons/up'; // Certifique-se de que UpIcon é um componente React válido
import { DownIcon } from '../../assets/icons/down'; // Certifique-se de que DownIcon é um componente React válido

export const getColorByPercentage = (percentage: string): string => {
    const numericValue = parseFloat(percentage.replace('%', ''));
    if (numericValue > 0) {return 'green';}
    if (numericValue < 0) {return 'red';}
    return 'black';
};

export const getIconByPercentage = (percentage: string): React.ReactNode => {
    const numericValue = parseFloat(percentage.replace('%', ''));
    if (numericValue > 0) {
        return <UpIcon stroke="green"/>;
    }
    if (numericValue < 0) {
        return <DownIcon stroke="red"/>;
    }
    return null;
};

interface IconProps {
    percentage: string;
}

export const PercentageIcon: React.FC<IconProps> = ({ percentage }) => {
    return getIconByPercentage(percentage);
};
