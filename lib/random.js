exports.generateRandomDigit = () => {
    let digit = 0; 

    digit = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    
    return digit;
};

exports.generateRandomAlpha = () => {

    let alpha = '';
    const alphaSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    alpha = alphaSet.charAt(Math.floor(Math.random() * alphaSet.length));

    return alpha;
}; 