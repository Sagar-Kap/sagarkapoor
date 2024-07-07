# Blog built with Astro

The Figma design used for this project:

[Link to design](<https://www.figma.com/file/W9Cz9j91HRBXKrqGxWgmHl/Web-Developer-Portfolio-Website-Template-(Community)?type=design&node-id=0%3A1&mode=design&t=AnHIpTSqKNJPd6wQ-1>)

![Design cover](/front-end/public/figma-design.png)

# Steps to consider for development

1. For Icons, a custom solution from Unplugin, [unplug-icons](https://github.com/unplugin/unplugin-icons) is being utilized. To maintain a small size of the imported icons, follow [this guideline](https://github.com/unplugin/unplugin-icons#icons-data). Make sure to update the [`tsconfig.json`](https://github.com/unplugin/unplugin-icons/blob/main/examples/astro/tsconfig.json) as well for TS support.

2. If you are using the custom [Astro Image](https://docs.astro.build/en/guides/images/) component and are having trouble with importing assets from the `src` directory, make sure that the [`sharp`](https://www.npmjs.com/package/sharp) module is installed as a dev dependency.

3. To enable Astro's Prettier plugin in your project, follow this [link](https://github.com/withastro/prettier-plugin-astro#recommended-configuration) and don't forget to add a `.prettierignore` file inside your project.
