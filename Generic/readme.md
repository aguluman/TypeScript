###
    Generics are code templates that you can define and reuse throughout your codebase. They provide a way to tell functions, classes, or interfaces what type you want to use when you call it. You can think about this in the same way that arguments are passed to a function, except a generic enables you to tell the component what type it should expect at the time it's called.
###


    we need to create generic functions when your code is a function or class that:
     - works with a variety of data types.
     - uses the data type in severl places.

   Generics can 
    - Provide more flexibilty when working with types.
    - Enable code reuse
    - Reduce the need to use the "any"  type.

Why use Generics, check out the index.ts in the Generics folder.

###
    Generics define one or more type variables to identify the type or types that you will pass to the component, enclosed in angle brackets (< >). (You'll also see type variables referred to as type parameters or generic parameters.) In the example above, the type variable in the function is called <T>. T is a commonly used name for a generic, but you can name it however you wish.

    After you specify the type variable, you can use it in place of the type in parameters, the return type, or anywhere else in the function that you would add a type annotation.
###