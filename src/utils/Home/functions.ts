export const getColorByPercentage = (percentage: string): string => {
    const numericValue = parseFloat(percentage.replace('%', ''));
    if (numericValue > 0) {return 'green';}
    if (numericValue < 0) {return 'red';}
    return 'black';
};

export const getIconNameByPercentage = (percentage: string): string | null => {
    const numericValue = parseFloat(percentage.replace('%', ''));
    if (numericValue > 0) {return 'arrow-up-outline';}
    if (numericValue < 0) {return 'arrow-down-outline';}
    return null;
};
