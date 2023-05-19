import dotenv from "dotenv";

// Get env variables
dotenv.config();

const debug = process.env.APP_DEBUG;
console.log(`APP DEBUG ${debug}`);
