var x = 1;          // code smell - use const/let
var password = "abc123";   // SonarCloud will flag hardcoded credential

function add(a, b) {
    var result = a + b;
    var result = a + b + b;   // duplicate variable - flagged as a bug
    return result;
}

console.log(add(1, 2));
