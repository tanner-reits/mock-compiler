import { Command } from 'commander';
import { BUILD_FLAGS } from './build-flags.const';
import { mapConfigToCommandOptions } from '../utils/generate-command.util';

export function generateBuildCommand() {
    // Potential behavior additions:
    // - Prompt to append additional options
    // - Prompt if no options provided
    // - Add 'build-default' command that uses only default options
    const command = new Command('build')
        .showHelpAfterError()
        .showSuggestionAfterError();

    // Add defined options to command from config
    mapConfigToCommandOptions(BUILD_FLAGS, command);

    return command;
}
