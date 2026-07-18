# Node.js Basics

## Download Node.js

- Download Node.js from the official website:
  https://nodejs.org/en/download

## Verify Installation

Open a terminal or command prompt and run:

```bash
node -v
```

This displays the installed Node.js version.

You can also start the Node.js REPL (interactive shell) by running:

```bash
node
```

To exit the REPL:

- Press **Ctrl + C** twice, or
- Type:

```javascript
.exit
```

---

# Your First Node.js Program

Run the following command in the Node.js REPL:

```javascript
setTimeout(() => console.log("Hello Husain"), 5000);
```

**Output (after 5 seconds):**

```text
Hello Husain
```

---

# Creating a JavaScript File Using Command Prompt

Create a new file named `script.js`:

### Windows

```cmd
type nul > script.js
```

or

```cmd
echo. > script.js
```

### Linux / macOS

```bash
touch script.js
```

---

# Command Line Arguments (`process.argv`)

`process.argv` in Node.js is similar to Java's `String[] args`.

### Java

```java
public static void main(String[] args) {
    // args contains command-line arguments
}
```

### Node.js

Create a file named **Greet.js**:

```javascript
const args = process.argv.slice(2);

for (const arg of args) {
    console.log("Hii " + arg);
}
```

---

## Execute the Program

```bash
node Greet.js Imthiyaz Husain
```

**Output**

```text
Hii Imthiyaz
Hii Husain
```

---

## Why `slice(2)`?

When you execute:

```bash
node Greet.js Imthiyaz Husain
```

Node.js automatically stores all command-line arguments inside `process.argv`.

```javascript
[
  "/usr/local/bin/node", // Index 0 - Node.js executable path
  "/path/to/Greet.js",   // Index 1 - JavaScript file path
  "Imthiyaz",              // Index 2
  "Husain"                 // Index 3
]
```

Using:

```javascript
const args = process.argv.slice(2);
```

removes the first two elements and returns only the user-provided arguments:

```javascript
["Imthiyaz", "Husain"]
```

This makes it easier to process only the values passed by the user.

---

## Summary

| Concept | Description |
|---------|-------------|
| `node` | Starts the Node.js REPL |
| `node filename.js` | Executes a JavaScript file |
| `process.argv` | Array containing command-line arguments |
| `slice(2)` | Removes the Node executable path and script path, leaving only user arguments |
| `Ctrl + C` (twice) | Exits the Node.js REPL |
