// convert-jsx-to-tsx.js
const glob = require("glob");
const fs = require("fs-extra");

// Define the root directory where your JSX files are located
const rootDir = "./src";

// Define the pattern to match JSX files
const pattern = `${rootDir}/**/*.jsx`;

// Find all JSX files matching the pattern
glob(pattern, {}, (err, files) => {
  if (err) {
    console.error("Error finding JSX files:", err);
    return;
  }

  files.forEach((file) => {
    try {
      // Read file contents
      let content = fs.readFileSync(file, "utf-8");

      // Replace .jsx with .tsx in file content
      content = content.replace(/\.jsx\b/g, ".tsx");

      // Write updated content back to the file
      fs.writeFileSync(file.replace(/\.jsx\b/g, ".tsx"), content);

      // Remove the original .jsx file
      fs.removeSync(file);

      console.log(`Converted ${file} to ${file.replace(/\.jsx\b/g, ".tsx")}`);
    } catch (error) {
      console.error(`Error converting ${file}:`, error);
    }
  });

  console.log("Conversion complete.");
});
