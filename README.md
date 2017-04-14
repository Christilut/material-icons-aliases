# Material Design Icons .. with aliases

Feel free to contribute an alias!

# Contributing

## Aliases
Just open a PR on the `icons.yml` file and add your aliases.
Keep in mind that the aliases do have a few rules in order to prevent chaos:
  - They should be in English (feel free to fork and create your own language version)
  - An alias should be a commonly used word
  - Try to be consistent and check the file if your aliases already exists in a different form (e.g. `finances` and `financial`, pick whichever is already in use)

## Bugs
Found a bug? Got a device that the site doesn't work on? Feel free to submit an issue or PR and I'll take a look.

IE9 and lower is not supported.

# Developing

Install dependencies
`npm install`

Run the project
`npm run dev`

# Automated icon updates
A cronjob runs the `buildIcons` job every night which retrieves and merges any icons the official Material Icons repo has. This then gets pushed automatically to Github.

# License
MIT

Google, if your're reading this: feel free to take the `icons.yml` alias file and integrate it in your own icon search website.
