# ChattingApp

## Installation:

#### 📌 BE (.NET)

1. Since the application uses cloudinary platform for the images, you should create your own account on cloudinary.
Please obtain these 3 values: ![image](https://github.com/EnverUsta/ChattingApp/assets/39167353/861148bb-c9a5-406d-9477-5088a1539ffa)

2. Now you should add those values into your application. Please create appsettings.json in API folder. It should look like this:

```
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "CloudinarySettings": {
    "CloudName": "xxx",
    "ApiKey": "xxx",
    "ApiSecret": "xxx"
  }
}
```

3. dotnet restore
4. dotnet run

Now you're good to go 😎



#### 📌 FE (Angular)

1. npm install

2. add ssl certificates
![image](https://github.com/EnverUsta/ChattingApp/assets/39167353/664bba48-a0e8-41be-8eab-5ea8caa26115)

Use this repo for downloading: https://github.com/FiloSottile/mkcert?tab=readme-ov-file

Run these 2 commands:
- mkcert --install
- mkcert localhost

![image](https://github.com/EnverUsta/ChattingApp/assets/39167353/3437cbce-6833-46a8-8c4b-7aa7257defc3)



## Section 2

Implement the basic API functionality and have an introductory understanding of:

1. Using the dotnet CLI
2. API Controllers and Endpoints
3. Entity Framework
4. The API Project structure
5. Configuration and Environment variables
6. Source Control

## Section 3

Complete the walking skeleton and have an introductory understanding of:

1. Using the Angular CLI
2. How to create a new Angular app
3. The Angular project files
4. The Angular bootstrap process
5. Using the Angular HTTP Client Service
6. Running an Angular app over HTTPS
7. How to add packages using NPM

## Section 4

Implement the basic authentication in our app and have an understanding of:

1. How to store passwords in the Database
2. Using inheritance in C# - DRY (Don't Repeat Yourself)
3. Using the C# debugger
4. Using Data Transfer Objects (DTOs)
5. Validation
6. JSON Web Tokens (JWTs)
7. Using services in C#
8. Middleware
9. Extension Methods - DRY (Don't Repeat Yourself)

## Section 5

Implement the login and register functionality into the apps as well as understanding:

1. Creating components using the Angular CLI
2. Using Angular Template forms
3. Using Angular services
4. Understanding Observables
5. Using Angular structural directives to conditionally display elements on a page
6. Component communication from parent to child
7. Component communication from child to parent

## Section 6

Implement routing in our Angular app and have an understanding of:

1. Angular routing
2. Adding a bootstrap theme
3. Using Angular route guards
4. Using a Shared Module

## Section 7

Implement global error handling in both the API and the Angular application. Also to have an
understanding of:

1. API Middleware
2. Angular Interceptors
3. Troubleshooting exceptions

## Section 8

Implement further functionality into our API and gain an understanding of:

1. Entity Framework Relationships
2. Entity Framework Conventions
3. Seeding Data into the Database
4. The repository pattern
5. Using AutoMapper

## Section 9

Implement the components that make up the user interface in our client application
and gain an understanding of:

1. Using Typescript types
2. Using the async pipe
3. Using bootstrap for styling
4. Basic css tricks to enhance the look
5. Using a 3rd party photo gallery

## Section 10

Implement persistence when updating resources in the API and gaining and
understanding of:

1. Angular Template forms
2. The CanDeactivate Route Guard
3. The @ViewChild decorator
4. Persisting changes to the API
5. Adding loading indicators to the client app
6. Caching data in Angular services

## Section 11

Implement photo upload functionality in the application and gain an understanding of the following:

1. Photo storage
2. Adding related entities
3. Using a 3rd party API
4. Using the Debugger (again!)
5. Updating and deleting resources
6. What to return when creating resources in a REST based API

## Section 12

Implement more advanced forms using Reactivce Forms in Angular and understand how to:

1. Use Reactive Forms
2. Use Angular Validation for inputs
3. Implement custom validators
4. Implement reusable form controls
5. Working with Date inputs

## Section 13

Implement paging, sorting, filtering and gain an understanding of the following:

1. How to implement pagination on the API & client
2. Deferred Execution using IQueryable
3. How to implement filtering on the API & client
4. How to implement sorting on the API & client
5. Using Action Filters
6. Adding a TimeAgo pipe
7. Implement caching in the client for paginated resources

## Section 14

Implement the 'like user' functionality and gain an understanding of the following:

1. Many to many relationships
2. Configuring entities in the DbContext

## Section 15

Implement the Messaging functionality and gain an understanding of the following:

1. More many to many relationships
2. Using query params in Angular
3. Using Route resolvers in Angular

## Section 16

Refactor our code to use ASP.NET Identity and gain an understanding of the following:

1. Using .Net Identity
2. Role Management
3. Policy Based authorisation
4. UserManager<T>
5. SignInManager<T>
6. RoleManager<T>
