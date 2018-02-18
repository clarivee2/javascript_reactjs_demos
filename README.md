# Javascript / ReactJS Tutorials / API examples

This is just an attempt at putting work and code from a variety of tutorials, namely the ReactJS Facebook examples into one or more working apps.  

Also overloading this to encapsulate API examples.

*NOTE* - The code is not intended to be bleeding-edge nor is it intended to be fully correct.

## Javascript / ReactJS Tutorials
- fbtutorial - facebook tutorial / walk-through examples with a few liberties taken
- helloworld - create app working

## API Examples/Tutorials
- TodoApi - from walkthrough at https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api - only step 1 for now. 

the API itself is done - just test it thru postman

## Adding Swagger

tutorial: https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger?tabs=visual-studio

Summary:
- add package Swashbuckle.AspNetCore
- register service & UI in startup

All seems OK but getting a 500 error on swaggerui link.

Links - port may vary in dev:
* [Swagger service JSON](http://localhost:61022/swagger/v1/swagger.json)
* [Swagger UI](http://localhost:61022/swagger)

That's it for now - I will definitely tidy this up over time.

# List of what I want to eventually do

- [x] fbtutorial through to forms
- [ ] "createapp" full react app
- [ ] web api 
  - [x] working "todo" example
  - [x] swagger ui - with 500 error pending
  - [ ] GraphQL enpoint
  - [ ] permanent hosting in a non-IIS environment
- { } API Consumer MVC App
  - [ ] Consume normal API
  - [ ] Consume GraphQL endpoint
 - [ ] web api usage thru ReactJS
 - [ ] end-to-end data flows (will probably create a new project for that)
 - [ ] deployment pipelines
 - [ ] api authentication
 
# Web API - GraphQL endpoint.

- based on the GraphQL .net example - see source at https://github.com/graphql-dotnet/graphql-dotnet
- extends the Todo API code
- using SDL instead of coding in the schema



 
# API Consumer Web App

TBD

## Consume Normal API

TBD

## Consume GraphQL Endpoint

TBD 