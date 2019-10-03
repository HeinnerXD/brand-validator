# Brand Validator
Module to validate if your text have any registered or famous brand.

# Example

    const validator = require('brand-validator');

    async function test() {
        try {
            var text = "Apple"; // Famous Brand (Apple)
            let brandFound = await validator.validateText(text);
            console.log(brandFound);
        } catch (error) {
            console.log(error);
        }
    }

    test(); // true
