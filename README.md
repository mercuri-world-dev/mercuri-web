# mercuri-web

Welcome to the repo for the mercuri.world Svelte webapp! Please reach out to Emme (@nogarig on Discord) with any questions or concerns :)

## Conventions

We will use (conventional commits) [https://www.conventionalcommits.org/en/v1.0.0/] for commits and pull requests. Please format all commits and PRs according to the documentation on the website. 

## How to complete frontend tasks

You will likely be assigned a specific component or page to work on. Each component/page will have at least 3 files associated with it:
1. ```<component/page>.svelte``` - This is the file containing the actual content of the component/page.
2. ```<component/page>.svelte.test.ts``` - This is the file containing the tests for your component. You shouldn't need to edit this file other than removing the .skip (more details in the next section).
3. ```<component/page>.stories.svelte``` - This is the file containing the storybook preview of the component/page. You shouldn't need to edit this file.

### Creating and testing your component

First, go into the <component/page>.svelte.test.ts file associated with your component. Near the top, you'll see something like ```describe.skip('<component/page>.svelte', () => { ...```. Remove the ```.skip``` to enable testing for your component.

Then, run ```npx vitest run```. This will run the suite of tests for the website as a whole and your component. These tests will fail at first. Read them to see what the requirements are for your component, then implement all required features. Keep running ```npx vitest run``` until all tests pass.

### Previewing your component

Run ```npm run storybook``` to open an interactive preview for the website's UI. Find your component within the tree and ensure everything looks and functions as expected.
