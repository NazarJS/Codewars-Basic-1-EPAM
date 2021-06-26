//  Simple validation of a username with regex
function checkLogin(loginString) {
  pattern = /^[a-z](.[a-z0-9_-]*)$/;
  return pattern.test(loginString);
}

// Regexp-basics-is-it-a-letter
function checkLogin(loginString) {
  pattern = /^[a-z](.[a-zA-Z]*)$/;
  return pattern.test(loginString);
}

function checkVowel(loginString) {
  pattern = /^(.[aeiou]*)$/;
  return pattern.test(loginString);
}
