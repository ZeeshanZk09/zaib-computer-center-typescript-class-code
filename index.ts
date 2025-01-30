import inquirer from "inquirer";
import chalk from "chalk";

const askUser = await inquirer.prompt({
  name: "age",
  type: "number",
  message: "Enter Your Age",
});

console.log(
  chalk.bold(`InshaAllah in ${60 - askUser.age} years you will be 60 years old`)
);
console.log("Hello world");
// download node

// const str: string = "string";

// let abc;

// abc = "";

// abc = 34;

// Type Inference
// let country = 'Pakistan';

// country = 90;

// type is implicitly is setting "any".
// function Name(params) {

// }

// Name('')
// npm init
// npm init -y
// npm i @type/node -D

// TypeScript Part 1
// https://docs.google.com/presentation/d/1eepDn27eQ8DbRJy7LHTkrIwYx8hQwuo0aDKGS_x10yc/edit#slide=id.g262ab56d35d_1_155
// TypeScript Part 2
// https://docs.google.com/presentation/d/1mFtLVoMnXnSVtIRSr3GPCgIqgt-g_hgEqmV4qDBUxwg/edit#slide=id.gd1bf8d60a4_0_0

// function Name(params:'type'): string {
//     // return 2+2
// }
// Name('type')

// let _username: "mufzan94mld";

// _username = "mufzan94mld";

// let country = "Pakistan";

// country = ''

// let variable;

let typeUnknown: unknown = "";

typeUnknown = 897;

console.log(typeUnknown as number);
