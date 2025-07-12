# Reference

Technical reference documentation.

## API Reference

- [Core API](/reference/api#core)
- [Plugin API](/reference/api#plugins)
- [Hooks](/reference/api#hooks)
- [Events](/reference/api#events)

## Configuration

- [Configuration File](/reference/configuration#file)
- [Environment Variables](/reference/configuration#environment)
- [CLI Options](/reference/configuration#cli)

## Command Line Interface

- [Commands](/reference/cli#commands)
- [Options](/reference/cli#options)
- [Examples](/reference/cli#examples)

## File Formats

- [Project Structure](/reference/structure)
- [Configuration Schema](/reference/schema)
- [Plugin Format](/reference/plugin-format)

---

::: details Quick Reference Card

### Common Commands
```bash
your-project create <name>    # Create new project
your-project dev             # Start dev server
your-project build           # Build for production
your-project test            # Run tests
```

### Configuration Locations
- `./your-project.config.js` - Project config
- `./.env` - Environment variables
- `~/.your-projectrc` - Global settings

### Important Paths
- `src/` - Source code
- `dist/` - Built output
- `tests/` - Test files
:::

## Type Definitions

If you're using TypeScript, import types from:

```ts
import { Config, Plugin, Hook } from 'your-project'
```