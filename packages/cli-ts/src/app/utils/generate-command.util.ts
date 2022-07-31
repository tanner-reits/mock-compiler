import { Command, Option } from 'commander';
import {
    CommandOption,
    CommandOptionChoice,
} from '../command-option.interface';

export function mapConfigToCommandOptions(
    config: CommandOption[],
    command: Command
) {
    config.forEach((flag) => {
        if (flag.choices?.length) {
            flag.choices.forEach((ref) =>
                command.addOption(mapFlagConfigToOption(ref))
            );
        } else {
            command.addOption(mapFlagConfigToOption(flag));
        }
    });
}

function mapFlagConfigToOption(flag: Omit<CommandOptionChoice, 'choices'>) {
    return new Option(flag.flagConfig ?? `--${flag.key}`, flag.description)
        .hideHelp(flag.hidden ?? false)
        .default(flag.default);
}
