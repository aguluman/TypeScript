####
    The key difference between interfaces and classes in any programming language is that classes allow you to define implementation details. Interfaces solely define how data is structured. Classes allow you to define methods, fields, and properties. Classes also provide a way to template objects, defining default values.
####

####
    on the server you may want to add code to load or save a dog to the database. A common technique for managing data in a database is to use what's known as the "active record pattern", meaning the object itself has save, load and similar methods. We can use the Dog interface defined above to ensure we have the same properties and structure, while adding the necessary code to perform the operations.
####

####
    As you continue to use TypeScript you will find many new instances where interfaces, in particular, will make your life as a developer easier. One key feature of TypeScript to remember about interfaces is they do not require a class. This allows you to use them whenever you need the ability to define a data structure without having to create a full class implementation.
####