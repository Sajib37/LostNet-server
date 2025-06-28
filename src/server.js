import mongoose from "mongoose";
import config from "./app/config/index.js";
import app from "./app.js";


async function main() {
  try {
    await mongoose.connect(config.database_url);
    app.listen(config.port, () => {
      console.log(`Lost Net App listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
