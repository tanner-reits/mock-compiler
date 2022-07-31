import * as chalk from 'chalk';
import * as inquirer from 'inquirer';
import { mapConfigToPrompts } from '../utils';
import { BUILD_FLAGS } from './build-flags.const';

export async function generateBuildPrompt() {
    console.log(chalk.blueBright("GREAT! LET'S DO IT"));

    const config = await inquirer.prompt(mapConfigToPrompts(BUILD_FLAGS));

    // TODO execute mock run
    console.log(chalk.yellowBright('THIS IS WHERE THINGS WOULD HAPPEN'));
    console.log(config);
}
