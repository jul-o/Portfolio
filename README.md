# Welcome to my website's source code!
This website is powered by [NextJS](https://nextjs.org/), and [Firebase](https://firebase.google.com/) Hosting and Functions.

_Fun fact: you can drag elements from the home page around._

## Source code
- /src
  - /components: All the website's components
    - /reusable: Components meant to be reusable in any context, i.e. dark mode button, modal, etc.
    - /sections: Components representing sections of the website
  - /data_frontend: Static data injected into the markup, mainly text
  - /pages: [NextJS pages folder](https://nextjs.org/docs/basic-features/pages), the entry point of the website
    - /index.tsx: NextJS's entry point, the page that is displayed when the user loads the website
    - /_document.tsx: [Custom NextJS document](https://nextjs.org/docs/advanced-features/custom-document), used to inject the header, and Google fonts
    - /_app.tsx: [Custom NextJS app](https://nextjs.org/docs/advanced-features/custom-app), used to inject the page title, and theme provider 
  - /public: Static files, e.g. SVG icons, my resume, etc. 
  - /styles: Global stylesheets
    - /assets: Images. I do not use /public for images, because [next/image](https://nextjs.org/docs/api-reference/next/image) facilitates blurry placeholders with images imported as code.
  - /utils: Utility functions: variants for framer motion, custom hooks, etc.

## Design
/design contains the website's initial design, in the form of SVG files. I have diverged from it quite a lot, but I keep them as archive.

## Firebase
- /firebaseFunctions.js: The Firebase function that delivers the website. It is the only way I found to get the website to work with Firebase. The main drawback is that Firebase functions have quite a hight latency when they have not been invoked in a while.

- /.github/workflows/firebase-functions-merge.yml contains the Github action used for updating the website, every time a pull request is merged into master


# Contact me
__You can reach me at [jules.sang@grenoble-inp.org](mailto:jules.sang@grenoble-inp.org) or [+33 6 51 77 14 97](tel:+33651771497)__