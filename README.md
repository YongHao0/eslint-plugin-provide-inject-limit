# eslint-plugin-provide-inject-limit

限制特定目录下的 provide、inject

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-provide-inject-limit`:

```sh
npm install eslint-plugin-provide-inject-limit --save-dev
```

## Usage

Add `provide-inject-limit` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "provide-inject-limit"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "provide-inject-limit/rule-name": 2
    }
}
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


