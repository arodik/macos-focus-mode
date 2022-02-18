# macos-focus-mode 🧘
NodeJS library and CLI for managing focus mode on your MacOS

It uses MacOS shortcuts functionality under the hood, please read the corresponding section below to use it correctly

## JS usage
`npm i macos-focus-mode`

```js
import { enableFocusMode } from 'macos-focus-mode';

enableFocusMode();
```

The library exports the following methods:
- `enableFocusMode([DURATION_IN_MINUTES])`
- `disableFocusMode()`
- `installFocusModeShortcut()`
- `isFocusModeShortcutInstalled()`

We don't install the shortcut automatically to give you more control

## CLI usage
`npm i -g macos-focus-mode`

- `macos-focus-mode install`
- `macos-focus-mode enable`
- `macos-focus-mode enable -d 1` - set duration
- `macos-focus-mode enable --silent` - suppress output
- `macos-focus-mode disable`
- `macos-focus-mode --help`


## Shortcut
**Important:** This library uses MacOS shortcuts functionality under the hood to maintain the focused mode. 
You should install the shortcut before the first usage. The library has corresponding API method, also you can install the shortcut via CLI.
During the installation youll be prompted to add a shortcut. After adding the shortcut everything should work :)

![Add Shortcut Prompt](https://user-images.githubusercontent.com/2021794/145727002-149e78c4-7505-45a2-a327-fa5f0361e1b0.png)

## FAQ
### I want to use a different focus mode, not "Do not disturb". What should I do?
You can open Shortcuts App, find the  macos-focus-mode shortcut, open it and change the type of the focus mode

