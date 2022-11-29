import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:ix1x0x2@gmail.com');

  return 'Opening mailto:ix1x0x2@gmail.com...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/LLethul/llethul.github.io', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const banner = (args?: string[]): string => {
  return `
  /$$       /$$                   /$$     /$$                 /$$
  | $$      | $$                  | $$    | $$                | $$
  | $$      | $$        /$$$$$$  /$$$$$$  | $$$$$$$  /$$   /$$| $$
  | $$      | $$       /$$__  $$|_  $$_/  | $$__  $$| $$  | $$| $$
  | $$      | $$      | $$$$$$$$  | $$    | $$  \ $$| $$  | $$| $$
  | $$      | $$      | $$_____/  | $$ /$$| $$  | $$| $$  | $$| $$
  | $$$$$$$$| $$$$$$$$|  $$$$$$$  |  $$$$/| $$  | $$|  $$$$$$/| $$
  |________/|________/ \_______/   \___/  |__/  |__/ \______/ |__/

Type 'help' to see list of available commands.
`;
};
