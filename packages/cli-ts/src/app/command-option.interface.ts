import { DistinctQuestion } from 'inquirer';

type CommandOptionBase = Omit<
    DistinctQuestion,
    'message' | 'choices' | 'name'
> & {
    key: string;
    description?: string;
    title: string;
    hidden?: boolean;
};

export type CommandOptionWithChoices = CommandOptionBase & {
    choices: CommandOptionChoice[];
};

export type CommandOptionChoice = CommandOptionBase & {
    choices?: undefined;
    flagConfig?: string;
};

export type CommandOption = CommandOptionWithChoices | CommandOptionChoice;
