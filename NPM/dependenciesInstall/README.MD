# 📦 Managing Dependencies with `package.json`

The **`package.json`** file is the heart of every Node.js project. It stores important project information such as the project name, version, scripts, and the list of dependencies required by the application.

Instead of manually installing every package one by one, developers can define dependencies in `package.json`, allowing anyone working on the project to install all required packages with a single command.

---

# Installing a Dependency

To install a package and add it to the project's dependencies, use:

```bash
npm install figlet
```

or

```bash
npm i figlet
```

After installation:

- The **`figlet`** package is downloaded into the `node_modules` folder.
- An entry for `figlet` is automatically added to the **`dependencies`** section of `package.json`.
- The exact installed version is recorded in `package-lock.json`.

---

# What is `figlet`?

**Figlet** is a Node.js package that converts normal text into large ASCII art, making terminal applications more visually appealing.

It is commonly used to:

- Display application titles
- Create terminal banners
- Improve command-line interface (CLI) output

---

# Installing Dependencies from `package.json`

If a project already contains a **`package.json`** file with its dependencies listed, you do **not** need to install each package individually.

Simply run:

```bash
npm install
```

This command reads the **`dependencies`** section of `package.json` and installs **all required packages** automatically.

---

# Typical Workflow

1. Clone or download the project.
2. Navigate to the project directory.
3. Run:

```bash
npm install
```

4. NPM installs every dependency listed in `package.json`.

---

# Project Structure

```text
Project/
│
├── node_modules/
├── package.json
├── package-lock.json
└── app.js
```

### `package.json`

Stores project metadata and the list of dependencies.

### `package-lock.json`

Locks the exact versions of installed packages to ensure consistent installations across different systems.

### `node_modules`

Contains all installed packages and their dependencies.

---

# Benefits of Using `package.json`

- Keeps track of project dependencies.
- Makes projects easy to share.
- Allows all dependencies to be installed with a single command.
- Ensures consistent package versions across different environments.
- Eliminates the need to manually install each package.

---

# Summary

- `package.json` manages a project's dependencies.
- `npm install figlet` installs the **Figlet** package and adds it to `package.json`.
- `npm install` installs **all** dependencies listed in `package.json`.
- `package-lock.json` records the exact installed versions.
- `node_modules` contains the downloaded packages used by the project.