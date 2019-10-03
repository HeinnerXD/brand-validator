# Brand Validator
Module to validate if your text have any registered or famous brand.

# Example

    var text = 'This is a product made in apple' // apple is a registered brand

    const validator = require('brand-validator');

    let brandFound = await validator.validateText(text);

    console.log(brandFound); // true
