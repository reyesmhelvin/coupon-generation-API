const checkif   = require('./validate');
const rand      = require('./random');
const config    = require('./config.json');

const couponCode = (() => {

    this.generate = (obj = {}) => {

        const input     = obj;
        const parts     = (input.parts === undefined) ? config.min.parts : input.parts;
        const partLen   = (input.partLen === undefined) ? config.min.partLen : input.partLen;

        const generateRequest = (() => {

            const _parts = parts;
            const _partLen = partLen;

            const generateCode = (() => {
                const series = [];
                for (let x = 0 ; x < _parts ; x++) {
                    let batch = '';
                    for (let i = 0 ; i < _partLen ; i++) {
                        if (i % 2 === 0) {
                            batch += rand.generateRandomDigit();
                        } else {
                            batch += rand.generateRandomAlpha();
                        }
                    }
                    series.push(batch.split('').reverse().join(''));  
                }
                return series.toString().split(',').join(config.delimiter);
            })();
            return generateCode;
        })();
        return generateRequest;
    };

    this.validate = (couponcode = '', partsOrLen = {}) => {

        const error = {
            code: '',
        };
        const _code         = (couponcode === '') ? new Error(error.code) : couponcode;
        const _partsOrLen   = partsOrLen;
        const isValid       = [];
        const _partLen      = {
            parts: (typeof _partsOrLen.parts === typeof 0) ? _partsOrLen.parts : 0 ,
            length: (typeof _partsOrLen.partLen === typeof 0) ? _partsOrLen.partLen : 0
        }
        
        isValid.push( checkif.inRangeParts( _code ));
        isValid.push( checkif.inRangeLengths( _code ));

        if ( _partLen.parts !== 0 && _partLen.length === 0 ) {
            isValid.push( checkif.isEqualParts( _code, _partLen.parts ));
        } else if ( _partLen.parts === 0 && _partLen.length !== 0) {
            isValid.push( checkif.isEqualLengths( _code, _partLen.length ));
        } else if ( _partLen.parts !== 0 && _partLen.length !== 0 ) {
            isValid.push( checkif.isEqualParts( _code, _partLen.parts ));
            isValid.push( checkif.isEqualLengths( _code, _partLen.length ));
        }
        
        const isPassed = isValid.every((eval) => {
            return eval === true;
        });

        return (isPassed === true) ? _code : error.code;
    };

})();

module.export = couponCode;