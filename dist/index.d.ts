import type { Plugin } from "vite";
export interface Options {
    from: string;
    to: string;
    module: string;
    modules?: string[];
}
export declare function variablesForward(options: Options): Plugin;
export default variablesForward;
