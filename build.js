const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const buildApp = async () => {
  try {
    // Ensure the build directory exists
    const buildDir = path.join(__dirname, "build");
    if (!fs.existsSync(buildDir)) {
      fs.mkdirSync(buildDir);
    }

    console.log("Building app...");

    // Run expo build commands
    exec("expo build:android -t apk", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error building Android app: ${error}`);
        return;
      }
      console.log("Android build completed successfully");
      console.log(stdout);
    });

    exec("expo build:ios -t simulator", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error building iOS app: ${error}`);
        return;
      }
      console.log("iOS build completed successfully");
      console.log(stdout);
    });
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
};

buildApp();
