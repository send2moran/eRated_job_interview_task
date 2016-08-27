# eRated widget task

For Front End job interview .

Create the following UI and populate data using eRated API.

![Alt text](https://raw.githubusercontent.com/send2moran/eRated_job_interview_task/master/app/assets/unnamed.png)



<b>Note</b> that in order to run it on chrome you will need to run local server (security lock by chrome)
JSXTransformer is using XHR to load and compile JSX files.
the solution is using puer dev server https://www.npmjs.com/package/puer

## Get Started

1. install package dependencies: npm install
2. npm start (will run puer server)


## Example

Go to link: http://localhost:8000/app/index.html?user={sha1}


http://localhost:8000/app/index.html?user=4d24120531ac6988984570a018e07a187fdc786d


## Technology stack
- View Layer: ReactJS (Component based architecture)
- Business logic layer - managing of state within your JavaScript applications - (Flux) Alt.js
- JSXTransformer - transform JSX syntax to ES5 in-browser.

## Architecture overview

- ReactJS

React is a JavaScript library for building user interfaces.
Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.
React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.


- React Component

The main goal in react is the separation to individual ui components,
each components is responsible to their own state & ui.
the 'smart' components are able to subscribe for an event originated from the flux store,
and then update the state & ui accordingly.
'dumb' components are receiving the state from props,
state and ui update when props are changed.


- Flux

Flux applications have three major parts: the dispatcher, the stores, and the views (React components). These should not be confused with Model-View-Controller. Controllers do exist in a Flux application, but they are controller-views -- views often found at the top of the hierarchy that retrieve data from the stores and pass this data down to their children.

A unidirectional data flow is central to the Flux pattern.

All data flows through the dispatcher as a central hub. Actions most often originate from user interactions with the views, and action creators are nothing more than a call into the dispatcher. The dispatcher then invokes the callbacks that the stores have registered with it, effectively dispatching the data payload contained in the actions to all stores. Within their registered callbacks, stores determine which actions they are interested in, and respond accordingly. The stores then emit a "change" event to alert the controller-views that a change to the data layer has occurred. Controller-views listen for these events and retrieve data from the stores in an event handler. The controller-views call their own render() method via setState(), updating themselves and all of their children.


- Architecture Flow

Data is fetched from eRated API using api.js module located in services folder,
the data is converted to JSON object and stored in cache variable to prevent refetching of same data over and over again,
each store is responsible to retrieve it's own data suitable to it's own domain,
after store being update and event it triggered - notifying all subscribers (commonly ReactJS components),
the React components is re-render when new state is set.


## Known issues

- None
