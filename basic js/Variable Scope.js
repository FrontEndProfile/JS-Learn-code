// function exampleScope() {
//   if (true) {
//     var localVar = "I'm a local variable with function scope";
//     let blockVar = "I'm a local variable with block scope";
//     console.log(blockVar); // i'm in block scope
//   }

//   console.log(localVar); // Accessible outside the block due to function scope
//   console.log(blockVar); // Error: blockVar is not defined outside the block
// }

// exampleScope();


function TestScope (num) {
    if( true) {
        var variableScope = "Yes variableScope even is scope";
        let letScope = "Yes let working";
        // console.log(letScope);

    }else {
        // call the if variables in else part
        console.log(variableScope);
        console.log(letScope);
    }
    console.log(variableScope + " Out of conditional block");
    // console.log(letScope + "Out of conditional block");
}

console.log(variableScope + " Out of conditional && Function");
// console.slog(letScope + "Out of conditional && Function");


TestScope()