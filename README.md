# ftnt-devops-ci

This a project for Fortinet devops team internal usage.

A Node.js project format checking and linting tool for CI practices.

## Installation

Use github link:

    $ npm install --save-dev fortinet/ftnt-devops-ci

Install globally:

    $ sudo npm install -g fortinet/ftnt-devops-ci

## Usage

### Initialize

To initial for a JavaScript project:

    $ ftnt-devops-ci init --JaveScript

To initial for a TypeScript project:

    $ ftnt-devops-ci init --TypeScript

### Local

Add scripts as follow to `package.json`:

```
    "scripts": {
        ...
        "check": "ftnt-devops-ci check \"**/*.{js,json}\"",
        "fix": "ftnt-devops-ci fix \"**/*.{js,json}\"",
        ...
    }
```

### Global

Check format and linting:

    $ ftnt-devops-ci check "**/*.{js,json}"

Fix format and linting:

    $ ftnt-devops-ci fix "**/*.{js,json}"

## Options

- **`--format` or `-f`:**           Only duel with format.
- **`--lint` or `-l`:**             Only duel with linting.
- **`--tslint` or `-t`:**           Only duel with tslinting.
- **`--format_ignore` or `-F`:**    Specify the path of prettierignore file.
- **`--lint_ignore` or `-L`:**      Specify the path of eslintignore file.
- **`--tslint_ignore` or `-T`:**    Specify a grob pattern for tslint ignoring files.
- **`--version` or `-V`:**          Get version number.
- **`--help` or `-h`:**             Get help document.

## Config Files

If the current directory already has `.prettierrc` or `.eslintrc` or `tslint.json` file, it/them will be used as config file when running check and fix commends. Otherwise, the default config will be used.

## Ignore Files

If the current directory already has `.prettierignore` or `.eslintignore` file, it/them will be used as ignore file when running check and fix commends. Otherwise, the default ignore config will be used.

You are allowed to use `--format_ignore <path>` or `-F <path>` to specify format checking ignore file.

Use `--lint_ignore <path>` or `-L <path>` to specify linting ignore file.

Use `--tslint_ignore <grob>` or `-T <grob>` to specify a grob pattern for tslint ignoring files.

## TODO list:

Updating tslint config.
