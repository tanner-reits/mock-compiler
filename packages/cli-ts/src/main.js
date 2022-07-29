#!/usr/bin/env node
'use strict';
exports.__esModule = true;
var commander_1 = require('commander');
// import * as inquirer from 'inquirer'
// import * as packageJson from '../../../package.json'
var program = new commander_1.Command();
// import packageJson = require('../../../package.json');
// const receiver = () => {
//     inquirer.prompt([{
//         type: 'input',
//         name: 'name'
//     }]).then(console.log)
// }
program
  .name('mock-cli')
  // .version(packageJson.version)
  .action(console.log);
program.parse();
