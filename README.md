# Brand Validator
Module to validate if your text have any registered or famous brand.

# Example

    var text = 'This is a product made in apple' // apple is a registered brand

    const validator = require('brand-validator');

    let brandFound = validator.validateText(text, '', '', '', '', '', '', ''); // Provide null strings if you dont have other texts to validate.

    console.log(brandFound); // true
