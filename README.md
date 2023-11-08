# Usage
 
## Development

1. Install Node.js. We'll need it to load manage dependencies and to run the build tool.
2. Install three.js and a build tool, Vite, using a terminal in the project folder.

```
# three.js
npm install --save three
# vite
npm install --save-dev vite
```
 
3. From your terminal, run:

```
npx vite
```
 
4. If everything went well, you'll see a URL like http://localhost:5173 appear in your terminal, and can open that URL to see your web application.

## Build

Later, when you're ready to deploy your web application, you'll just need to tell Vite to run a production build — npx vite build. Everything used by the application will be compiled, optimized, and copied into the dist/ folder. The contents of that folder are ready to be hosted on your website.