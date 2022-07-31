#!/usr/bin/env node

import { Command } from 'commander';
import * as inquirer from 'inquirer';
import * as chalk from 'chalk';
import * as packageJson from '../../../package.json';
import { TASK_CONFIGS, TASK_OPTIONS } from './app/cli-tasks.const';

// TODO perform version checks

const program = new Command();

const receiver = async (_, { args }: { args: string[] }) => {
    // If we got here, that means the command is not valid or not supplied.
    // If invalid, we should alert them, then proceed with the interactive implementation.
    if (args.length) {
        console.log(
            chalk.redBright(
                `ERROR: Task "${args[0]}" does not exist, but that's okay. Please select from the options below instead 😄\n`
            )
        );
    }

    const { task } = await inquirer.prompt({
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: TASK_OPTIONS,
    });

    TASK_CONFIGS[task].buildPrompt();
};

// Add all "tasks" to the program
Object.keys(TASK_CONFIGS).forEach((key) =>
    program.addCommand(TASK_CONFIGS[key].buildCommand())
);

program
    .name('cli-ts')
    .version(packageJson.version, '-v, --version')
    .action(receiver)
    .parseAsync();
