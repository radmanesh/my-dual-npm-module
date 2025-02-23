# My dual npm module

## A simple npm module that supports both classic and esmodule usages.

What I learned is that whatever functions you are using in your cjs and mjs files should have separate proper export definitions and in fact have two different version themseleves, and be included in the package.json file. But if you know which context you are going to be in you can dynamically import in ESM context.

