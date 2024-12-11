const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('MYSECRET_TOKEN');
    const apiKey = core.getInput('OPENAI_API_KEY');
    const model = core.getInput('OPENAI_API_MODEL') || 'gpt-4';
    const include = core.getInput('include') || 'README.md';

    // Logic for reviewing code (e.g., fetching files, interacting with OpenAI)
    console.log(`Using OpenAI model: ${model}`);
    console.log(`Reviewing files: ${include}`);
    // Add your OpenAI API call and GitHub comment logic here

    console.log('Review completed.');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
