# Coupon API

Coupon Code Generation

## Code Sample
```
const code = require('couponcode');
```
### Generation
```
code.generate();
```
> generate a 3 parts with 4 lengths code as default.
```
code.generate({parts: 4});
```
> generate a 4 parts code as specified.
```
code.generate({partLen: 6});
```
> generate a code with 6 length as specified.
```
code.generate({parts: 4, partLen: 6}); 
```
> generate a 4 parts code with 6 length as specified.

### Validation
```
code.validate('HY31-J5T6-6YU7');
```
> return 'HY31-J5T6-6YU7' after passing series of validations else empty string.
```
code.validate('HY31-J5T6-6YU7',{parts: 3});
```
> return 'HY31-J5T6-6YU7' after passing series of validation and checking if 
it is a 3 part generated code, else empty string.
```
code.validate('HY31-J5T6-6YU7',{partLen: 4});
```
> return 'HY31-J5T6-6YU7' after passing series of validation and checking if 
it has 4 length in each batch of generated code, else empty string.
```
code.validate('HY31-J5T6-6YU7',{parts: 3, partLen: 4});
```
> return 'HY31-J5T6-6YU7' after passing series of validation, checking if 
it is a 3 part generated code, and has 4 length in each batch of generated code, else empty string.

