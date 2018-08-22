AMD : Do not use. was browser only
System JS: was a good experiment. superseded by ES modules
ES Modules: Not ready yet

Nowadays: 
- Use commonjs
- Use ES Module syntax to import / export / author modules


You might want to only load the file `foo` at runtime under certain conditions. For such cases,
you should use the `import`ed name only in type annotations and not as a variable. This removes
any upfront code being injected by TypeScript. Then manually import the actual modules using code
that is specific to your module loader.

