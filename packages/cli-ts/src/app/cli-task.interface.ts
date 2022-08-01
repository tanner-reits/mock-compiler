import { Command } from 'commander';

export interface TaskConfig {
    buildCommand: () => Command;
    buildPrompt: () => Promise<void>;
}
