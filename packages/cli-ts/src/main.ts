#!/usr/bin/env node

import { Command } from 'commander';
// import * as inquirer from 'inquirer'
// import * as packageJson from '../../../package.json'

const program = new Command();
// import packageJson = require('../../../package.json');

const receiver = async () => {
  const inquirer = await import('inquirer');

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
      },
    ])
    .then(console.log);
};

program
  .name('mock-cli')
  // .version(packageJson.version)
  .action(receiver);

program.parseAsync();
