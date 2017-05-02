const config = require('./config.json');
const h = require('./helper');

exports.isEqualLengths = (code, length) => {       

    const _code = code;
    const _length = length;

    const _lengths = h.splitCode(_code);
    const result = _lengths.every((length) => {
        return length === _length;
    });

    return result;

};

exports.isEqualParts = (code, parts) => {       

    const _code = code;
    const _parts = parts;

    const _length = h.splitCode(_code).length;
    const result = _length === _parts;

    return result;

};

exports.inRangeParts = (code) => {
    const _code = code;

    const _lengths = h.splitCode(_code).length;
    const result = (_lengths >= config.min.parts && _lengths <= config.max.parts);

    return result;
}

exports.inRangeLengths = (code) => {
    const _code = code;

    const result = h.splitCode(_code).every((length) => {
        return (length >= config.min.partLen && length <= config.max.partLen);
    });

    return result;
}