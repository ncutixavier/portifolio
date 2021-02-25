export const formatDate = (dt) => {
    const months = [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
    ];
    const subDate = dt.split('T')[0].split('-');
    return `${months[Number(subDate[1]) - 1]} ${subDate[2]}, ${subDate[0]}`;
};
