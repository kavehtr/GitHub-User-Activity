import * as readline from "readline";
import { fetchAPI } from "./fetch.js";

const Main = (): void => {
  try {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      "Please enter your github account username: ",
      (answer: string) => {
        console.log(`You entered: ${answer}`);
        rl.close();
        fetchAPI(answer);
      }
    );
  } catch (err) {
    console.log("error", err);
  }
};

Main();
