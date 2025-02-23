# My Dual NPM Module

## A Journey Through Creating a Dual CommonJS/ESM Module

This repository documents my journey in creating an NPM module that supports both CommonJS (CJS) and ECMAScript Modules (ESM). Here's what I learned along the way.

## The Journey

### 1. Understanding Dual Package Hazards

When creating a package that supports both module systems, you need to be careful about:
- Having separate entry points for CJS and ESM
- Properly configuring package.json
- Handling imports/requires correctly in both contexts

### 2. Package Configuration

The key to supporting both module systems lies in the package.json configuration:

```json
{
  "main": "src/index.cjs",    // For CommonJS
  "module": "src/index.mjs",  // For ESM
  "type": "module",           // Default to ESM
  "exports": {
    ".": {
      "require": "./src/index.cjs",
      "import": "./src/index.mjs"
    },
    "./utils": {
      "require": "./src/utils.cjs",
      "import": "./src/utils.mjs"
    }
  }
}
```

### 3. Module Implementation

I learned that you need separate implementations for CJS and ESM:

- **CJS files (.cjs)**: Use `require()` and `module.exports`
- **ESM files (.mjs)**: Use `import/export` statements

Initially, I only had one index file. However, to properly support both CommonJS (CJS) and ECMAScript Modules (ESM),
I realized I needed two separate entry points:
- `index.cjs` for CJS
- `index.mjs` for ESM

To share utility functions, I repeated this approach and created:
- `utils.cjs` for CJS
- `utils.mjs` for ESM

This way, each environment can import the correct version without conflicts.

### 4. Key Learnings

1. **Separate Implementations**: Functions used in CJS and MJS files need separate proper export definitions and essentially become two different versions.
2. **Context Awareness**: When writing tests, you need to be aware of which module system you're using.
3. **Dynamic Imports**: In ESM context, you can use dynamic imports to load modules.

### Additional Details: ESM vs. CJS
ESM (ECMAScript Modules):
- Uses `import` and `export` statements
- Fully supports async imports
- Relies on the `type` field in package.json or `.mjs` extension

CJS (CommonJS):
- Uses `require` and `module.exports`
- Synchronous module loading
- Remains supported in older Node.js environments

Having separate files ensures complete compatibility with both systems while using the same underlying logic.

### 5. Testing Strategy

The project includes tests for both module systems:
- `test/index.test.cjs`: Tests CommonJS functionality
- `test/index.test.mjs`: Tests ESM functionality

## Usage Examples

### CommonJS Usage
```javascript
const { greetCommonJS } = require('my-dual-npm-module');
```

### ESM Usage
```javascript
import { greetESM } from 'my-dual-npm-module';
```

## Tips and Tricks

1. Use `.cjs` and `.mjs` extensions to explicitly define the module type
2. Keep module implementations separate but consistent
3. Test both module systems independently
4. Use the "exports" field in package.json for granular control

## More Resources

- [Node.js Documentation on Modules](https://nodejs.org/api/packages.html#dual-commonjses-module-packages)
- [Package.json Exports Field](https://nodejs.org/api/packages.html#exports)

