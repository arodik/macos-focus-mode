# macos-focus-mode 🧘
NodeJS library and CLI for managing focus mode on your MacOS

`npm i macos-focus-mode`

**Important:** This library uses MacOS shortcuts functionality under the hood to maintain the focused mode. 
You should install the shortcut before the first usage. The library has corresponding API method, also you can install the shortcut via CLI

## JS usage
Library exports the following methods:
- `enableFocusMode([DURATION_IN_MINUTES])`
- `disableFocusMode()`
- `installFocusModeShortcut()`
- `isFocusModeShortcutInstalled()`

We don't install the shortcut automatically to give you more control

## CLI usage
- `macos-focus-mode install`
- `macos-focus-mode enable`
- `macos-focus-mode enable -d 1` - set duration
- `macos-focus-mode enable --silent` - suppress output
- `macos-focus-mode disable`
- `macos-focus-mode --help`

## FAQ
### I want to use a different focus mode, not "Do not disturb". What should I do?
You can open Shortcuts App, find the  macos-focus-mode shortcut, open it and change the type of the focus mode

