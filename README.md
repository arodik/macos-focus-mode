# macos-focus-mode
NodeJS CLI/library for managing focus mode on your MacOS

**Important:** This library uses MacOS shortcuts functionality under the hood to maintain the focused state. 
You will be prompted to install the shortcut during the first installation.

## API
- `enableFocusMode([DURATION_IN_MINUTES])`
- `disableFocusMode()`

## CLI usage
- `macos-focus-mode enable`
- `macos-focus-mode enable -d 1` - set duration
- `macos-focus-mode enable --silent` - suppress output
- `macos-focus-mode disable`
- `macos-focus-mode --help`
