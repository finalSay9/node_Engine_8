const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
console.log(chalk.red.bold.underline('This is an error message!'));
console.log(chalk.yellow(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));
