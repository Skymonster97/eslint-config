import path from "path";
import mod from "./file";
import mod2 from "./file_.json";

const c = 1;

mod();
console.log(mod2(path));

const a = 1;

export const value = 1;
const b = 1;
export const valueA = 1;
export default { a, b, c };
