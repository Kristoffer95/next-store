require('dotenv').config();
const { exec } = require('child_process');

const SPACE_ID = process.env.SPACE_ID;
if (!SPACE_ID) {
  console.error('SPACE_ID is not defined in .env file');
  process.exit(1);
}

const pullCommand = `storyblok pull-components --space ${SPACE_ID}`;
const generateCommand = `storyblok generate-typescript-typedefs --sourceFilePaths ./components.${SPACE_ID}.json --destinationFilePath ./src/types/storyblok/component-types.d.ts`;

// Execute the pull-components command
exec(pullCommand, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error pulling components: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr while pulling components: ${stderr}`);
    return;
  }
  console.log(`Components pulled successfully: ${stdout}`);

  // Execute the generate-typescript-typedefs command
  exec(generateCommand, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error generating TypeScript typedefs: ${err.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr while generating TypeScript typedefs: ${stderr}`);
      return;
    }
    console.log(`TypeScript typedefs generated successfully: ${stdout}`);
  });
});
