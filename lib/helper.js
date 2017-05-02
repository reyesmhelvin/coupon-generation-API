exports.splitCode = (code) => {
    
    const _code = code;

    const _lengths = _code.split('-')
    .map((part) => {
        return part.length
    });

    return _lengths;
}   

