const { generateRandomString } = require('../utils/generateKeys');
describe('generateRandomString', () => {
  it('should generate a string of the correct length', () => {
    const str = generateRandomString(8);
    expect(str).toHaveLength(16); // 8 bytes = 16 hex chars
  });
  it('should generate different strings each time', () => {
    const str1 = generateRandomString(8);
    const str2 = generateRandomString(8);
    expect(str1).not.toBe(str2);
  });
}); 