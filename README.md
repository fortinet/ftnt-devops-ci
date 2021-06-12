# ftnt-devops-ci

[![latest release version](https://img.shields.io/github/v/release/fortinet/ftnt-devops-ci?label=latest%20release%20version)](https://github.com/fortinet/ftnt-devops-ci/releases/latest)

This a project for Fortinet devops team internal usage.

A Node.js project format checking and linting tool for CI practices.

## Installation

Use github link:

```bash
npm install --save-dev https://github.com/fortinet/ftnt-devops-ci/releases/download/1.1.2/ftnt-devops-ci-1.1.2.tgz
```

Install globally:

```bash
sudo npm install -g https://github.com/fortinet/ftnt-devops-ci/releases/download/1.1.2/ftnt-devops-ci-1.1.2.tgz
```

## Usage

### Initialize

To initial for a JavaScript project:

```bash
npx ftnt-devops-ci init --JaveScript
```

To initial for a TypeScript project:

```bash
ftnt-devops-ci init --TypeScript
```

### Local

Add scripts as follow to `package.json`:

```json
    "scripts": {
        ...
        "check": "npx ftnt-devops-ci check \"**/*.{js,json}\"",
        "fix": "npx ftnt-devops-ci fix \"**/*.{js,json}\"",
        ...
    }
```

### Global

Check format and linting:

```bash
ftnt-devops-ci check "**/*.{js,json}"
```

Fix format and linting:

```bash
ftnt-devops-ci fix "**/*.{js,json}"
```

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

## TODO list

Updating tslint config.

## Support

Fortinet-provided scripts in this and other GitHub projects do not fall under the regular Fortinet technical support scope and are not supported by FortiCare Support Services.
For direct issues, please refer to the [Issues](https://github.com/fortinet/ftnt-devops-ci/issues) tab of this GitHub project.

For other questions related to this project, contact [github@fortinet.com](mailto:github@fortinet.com).

## License

[License](./LICENSE) © Fortinet Technologies. All rights reserved.
