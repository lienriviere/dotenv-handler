import { resolve } from 'path';
import { readFileSync } from 'fs';


export const resolveEnvFilePath = (function (filename?: string) { 
    return resolve(process.cwd(), filename || '.env')
})();

const p = process.env.ENV_PATH || resolveEnvFilePath;

console.log(process.env);
