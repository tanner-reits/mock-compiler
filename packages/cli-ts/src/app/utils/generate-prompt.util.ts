import { CommandOption } from '../command-option.interface';

export const mapConfigToPrompts = (flags: CommandOption[]) => {
    return flags
        .map((flag) => ({
            ...flag,
            message: flag.title,
            name: flag.key,
            choices: flag.choices?.map((ref) => ({
                name: ref.title,
                value: ref.key,
            })),
        }))
        .filter((ref) => !ref.hidden);
};
