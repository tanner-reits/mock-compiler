import { CommandOption } from '../command-option.interface';

export const BUILD_FLAGS: CommandOption[] = [
    {
        type: 'checkbox',
        key: 'flags',
        title: 'Would you like to toggle any of the following flags?',
        default: ['ci'],
        choices: [
            {
                title: 'Continuous integration (CI) defaults',
                key: 'ci',
                default: true,
                flagConfig: '-ci, --continuous-integration',
            },
            {
                title: 'Debug mode',
                key: 'debug',
                flagConfig: '-d, --debug',
            },
            {
                title: 'Dev mode build',
                key: 'dev',
                default: true,
            },
            {
                title: 'Prod mode build',
                key: 'prod',
            },
            {
                title: 'Generate readme docs',
                key: 'docs-readme',
            },
            {
                title: 'Generate ES5 build',
                key: 'es5',
            },
            {
                title: 'Write log file',
                key: 'log',
            },
            {
                title: 'Prerender',
                key: 'prerender',
            },
        ],
    },
    {
        type: 'input',
        key: 'config',
        title: 'Do you need to specify a custom path to your Stencil config?',
        default: undefined,
        flagConfig: '-c, --config <path>',
        hidden: true,
    },
    {
        type: 'confirm',
        key: 'serve',
        title: 'Should we spin-up a dev server?',
        default: true,
    },
    {
        type: 'input',
        key: 'port',
        title: 'What port?',
        default: '3333',
        when: (choices) => choices.serve,
        flagConfig: '-p, --port <portNumber>',
    },
    {
        type: 'confirm',
        key: 'watch',
        title: 'Watch mode?',
        default: true,
        when: (choices) => choices.serve,
    },
    {
        type: 'confirm',
        key: 'no-open',
        title: 'Open in browser?',
        default: false,
        when: (choices) => choices.serve,
    },
];
