const { validateColorInput } = require('../public/js/code.js');

describe('Frontend Validation Logic', () => {
    test('Returns true for valid color strings', () => {
        expect(validateColorInput('Blue')).toBe(true);
        expect(validateColorInput('Light Green')).toBe(true);
    });

    test('Returns false for empty or whitespace strings', () => {
        expect(validateColorInput('')).toBe(false);
        expect(validateColorInput('   ')).toBe(false);
    });

    test('Returns false for strings containing numbers or symbols', () => {
        expect(validateColorInput('Red123')).toBe(false);
        expect(validateColorInput('Blue!')).toBe(false);
    });
});
