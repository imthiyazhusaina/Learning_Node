# 📦 Installing and Using NPM Packages

Node.js comes with **NPM (Node Package Manager)**, which allows developers to install and manage third-party packages for their projects.

Packages can add new functionality to your application without having to write everything from scratch.

---

# Installing a Package

To install a package, use the following command:

```bash
npm install <package-name>
```

or the shorthand:

```bash
npm i <package-name>
```

The package is downloaded into the **`node_modules`** folder and an entry is added to the project's dependencies.

---

# Installing `give-me-a-joke`

The **`give-me-a-joke`** package provides functions to generate different types of jokes.

### Installation

```bash
npm install give-me-a-joke
```

### Features

- Random Dad Jokes
- Chuck Norris Jokes
- Custom Name Jokes

> **Note:** This package depends on external joke APIs. Some features may not work if the API has changed or if the free usage limit has been exceeded.

---

# Installing `colors`

The **`colors`** package is used to style terminal output by adding colors and text formatting.

### Installation

```bash
npm install colors
```

### Features

- Colored text
- Background colors
- Bold, italic, underline styles
- Rainbow and random text effects
- Makes terminal output easier to read

---

# Importing Installed Packages

Once installed, packages can be imported into a Node.js application using the `require()` function.

General syntax:

```javascript
const packageName = require("package-name");
```

---

# Project Structure After Installation

```text
Project/
│
├── node_modules/
├── package.json
├── package-lock.json
├── app.js
└── ...
```

### `node_modules`

Contains all installed packages and their dependencies.

### `package.json`

Stores project information and the list of installed dependencies.

### `package-lock.json`

Records the exact versions of installed packages to ensure consistent installations across different systems.

---

# Installing Multiple Packages

Multiple packages can be installed together:

```bash
npm install give-me-a-joke colors
```

---

# Installing as Development Dependencies

Packages used only during development can be installed with:

```bash
npm install --save-dev <package-name>
```

or

```bash
npm i -D <package-name>
```

---

# Checking Installed Packages

To view all installed packages:

```bash
npm list
```

To check a specific package:

```bash
npm list give-me-a-joke
```

```bash
npm list colors
```

---

# Uninstalling a Package

To remove a package:

```bash
npm uninstall <package-name>
```

Example:

```bash
npm uninstall colors
```

---

# Summary

- NPM is the default package manager for Node.js.
- Packages are installed using `npm install`.
- Installed packages are stored inside the `node_modules` folder.
- `require()` is used to import installed packages into a project.
- `package.json` keeps track of project dependencies.
- `package-lock.json` ensures consistent package versions.
- `give-me-a-joke` is useful for generating jokes using external APIs.
- `colors` is used to create colorful and formatted terminal output.