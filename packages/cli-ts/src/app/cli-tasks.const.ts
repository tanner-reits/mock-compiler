import { ListChoiceOptions } from 'inquirer';
import { generateBuildCommand, generateBuildPrompt } from './build-task';
import { TaskConfig } from './cli-task.interface';

export enum TASK {
    BUILD = 'build',
}

export const TASK_KEYS = Object.values(TASK);

export const TASK_CONFIGS: { [key in TASK]: TaskConfig } = {
    build: {
        buildCommand: generateBuildCommand,
        buildPrompt: generateBuildPrompt,
    },
};

export const TASK_OPTIONS: ListChoiceOptions[] = TASK_KEYS.map((task) => ({
    name: task,
    value: task,
}));
