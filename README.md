# Sagar Kapoor's Personal Website

This repository contains the source code and the supplementary code required to
maintain and develop the website - [sagarkapoor.eu](https://www.sagarkapoor.eu).
The source code is made publicly available under the MIT License (see the
[LICENSE](./LICENSE) document for details).

The project depends on the following tech stack:

- [Nuxt.js 3](https://nuxt.com) to build the client-side website.
- [Vercel](https://vercel.com/) for deployment and hosting.

## About the Project

We all have something to share. This is a piece of real e-state to do exactly
that.

## Usage & Development Guidelines

For development, the following dependencies are required:

1. [Node.js](https://nodejs.org/en)
2. [PNPM](https://pnpm.io/)
3. [Task](https://taskfile.dev/)
4. [Pre Commit](https://pre-commit.com/)

To get started with developing the project, follow these instructions:

1. Ensure the aforementioned dependencies are installed and available. Then fork
   (and clone) the repository for further development.
2. Invoke the `task setup` command to setup the development environment and
   install all necessary dependencies.
3. Invoke the `task dev` command to locally run the development version of the
   website and access it over [localhost:3000](http://localhost:3000).
4. Post development, invoke the `task qa-checks` command to lint and format
   (using [ESLint](https://eslint.org) and [Prettier](https://prettier.org))
   your code before making a commit.
5. Push the commits to your fork and then create a Pull Request to the upstream
   repository from the said fork whenever you are ready.

## Additional Resources

[Figma Template](https://www.figma.com/design/rM3Gh1i27kKhSytmEHaK9k/Sagar's-Portfolio?node-id=3-572&t=MPuaQ2GFeMZ40i1G-1)

![Sneak Peak](/website/public/figma-design.png)

## Licensing and Distribution Rights

This source code in this repository is made publicly available under the terms
and conditions of the MIT License. You will find more details about thr
distributions rights here in the [LICENSE](./LICENSE) document.
