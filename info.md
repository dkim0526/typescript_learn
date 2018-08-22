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

Special Types:
- any: any type holds a special place in the TypeScript type system. It gives you an escape hatch from
the type system to tell the compiler to bugger off. `any` is compatible with `any` and `all` types in
the type system. This means that anything can be assigned to it and it can be assigned to anything.

```
var power: any;

power = '123';
power = 123;


var num: number;
power = num;
num = power;
```

@types

Definitely 


### tsconfig.json

##### Overview
The presence of a tsconfig.json file in a directory indicates that the directory is root of a TypeScript project. The
tsconfig.json file specifies the root files and the compiler optiosn required to compile the project. A project is compiled in one of the following ways:

##### Using tsconfig.json
- By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the
current directory and continuing up the parent directory chain.
- By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a
directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.

When input files are specified n the command line, tsconfig.json files are ignored.

