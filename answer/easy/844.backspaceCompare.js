"use strict";

var backspaceCompare = function(s, t) {
  const stack1 = [];
  const stack2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "#" ) stack1.pop();
    else stack1.push(s[i]);
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] == "#") stack2.pop();
    else stack2.push(t[i]);
  }
  s = stack1.join("");
  t = stack2.join("");
  return s == t;
};

console.log(backspaceCompare("ab#c", "ad#c"));
