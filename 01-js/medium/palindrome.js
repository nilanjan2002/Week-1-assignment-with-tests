function simplifyString(str) {
  const punctuations = [',', '?', ' ','!', '.'];
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (!punctuations.includes(str[i])) {
      result.push(str[i]);
    }
  }
  return result.join('').toLowerCase();
}

const str = 'Eva, can I see bees in a cave?';

function isPalindrome(str) {
  const simplifiedStr = simplifyString(str);
  const len = simplifiedStr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (simplifiedStr[i] !== simplifiedStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome(str);

module.exports = isPalindrome;
