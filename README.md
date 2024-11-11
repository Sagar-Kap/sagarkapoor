# Blog built with Nuxt 3

This repository contains the infrastructure for my digital dojo hosted on [sagarkapoor.eu](https://sagarkapoor.eu).
The list of tools required to build and maintain is as follows:

- [Nuxt](https://nuxt.com/) for the front end.
- [Taskfile](https://taskfile.dev/) to set up the development environment.
- [GitHub Actions](https://github.com/features/actions) for QA checks.
- [Vercel](https://vercel.com/) for CI/CD pipeline and hosting.
- [Node.js](https://nodejs.org/en)
- [PNPM](https://pnpm.io/)
- [Pre Commit](https://pre-commit.com/)

## About the Project

We all have something to share. This is a piece of real e-state to do exactly that.

## Usage & Development Guidelines

You will need these tools installed locally on your system before you can start development
work on this project:

1. [Node.js](https://nodejs.org/en)
2. [PNPM](https://pnpm.io/)
3. [Task](https://taskfile.dev/)
4. [Pre Commit](https://pre-commit.com/)

## Steps required to get your dev environment up and running

1. Install the tools mentioned above.
2. [Fork this repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) to your GitHub account.
3. Clone the forked repository to your local environment.
4. Run `task setup` once step 1 & 2 are complete. All `task` commands should be run from the
   root directory.
5. Run `task dev` to run the development version of the website locally.
6. Run `task qa-checks` to lint and format your code before making a commit.
7. Run `task default` to check the list of all available `tasks`.

Once you have completed the setup, check out the
[issues](https://github.com/Sagar-Kap/sagarkapoor/issues) in this repository and then open a
[pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
which will get merged to the `main` branch after a review.

The Figma design used for this project:

[Link to design](https://www.figma.com/design/rM3Gh1i27kKhSytmEHaK9k/Sagar's-Portfolio?node-id=3-572&t=MPuaQ2GFeMZ40i1G-1)

![Design cover](/front-end/public/figma-design.png)
