# Reference

Technical reference documentation for your project.

## About Reference Documentation

Reference docs are **information-oriented** and designed for lookup rather than learning. They should be:

- **Complete** - Document every public API, option, and feature
- **Accurate** - Keep in sync with your code
- **Consistent** - Use the same format throughout
- **Searchable** - Use clear, descriptive titles

## Reference Structure

Organize your reference documentation by type:

### API Documentation
- Functions, methods, and classes
- Parameters and return values
- Code examples for each item

### Configuration
- All available options
- Default values
- Environment variables

### CLI Commands
- Command syntax
- Available flags and options
- Usage examples

### File Formats
- Schema definitions
- Field descriptions
- Valid values

## Template Example

```markdown
## functionName(param1, param2)

Brief description of what the function does.

### Parameters

- `param1` (Type) - Description
- `param2` (Type, optional) - Description. Default: `value`

### Returns

(ReturnType) - Description of return value

### Example

\```javascript
const result = functionName('value1', 'value2');
\```
```

::: tip
Reference documentation is not the place for lengthy explanations. Keep descriptions concise and link to the [Explanation](/explanation/) section for the "why".
:::