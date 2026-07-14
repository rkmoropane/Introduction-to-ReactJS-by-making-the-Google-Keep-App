# Introduction to ReactJS by making the Google Keep App

## About this project:
This project covers critical concepts in ReactJS. With an interactive experience of converting a vanilla JavaScript Google Keep App into a ReactJS Google Keep App will ensure that all concepts stick, And it is project for Zaio students.

## What this project covers:
- Introduction
- React basics
- Components
- Props
- JSX
- Styling React Components
- State & Working with events
- Rendering lists and conditional events
- Deploying React Apps
- Building Google Keep in React

## Introduction
- React is a JavaScript library used for building user interfaces especially single-page applications (SPAs). It allows developers to create reusable UI components and efficiently update the user interface when data changes.

[Learn more...](https://react.dev/learn)

## Why use React & not Vanilla JS?
- Vanilla JS - imperative approach, have to take care of low level details, too verbose and can get exhausting
- https://www.netflix.com/
- We shall build the Google Keep app in React and often refer to our JS code to see how React saves so much time and effort compared to vanilla JS.
- React JS is extremely powerful: Simplified everything for developers.

## What is ReactJS?
- Client side library
- modern interactive user interfaces
- declarative component focused approach

## Why React JS?
- It is all about components.
- Reusability = DRY
- Separation of concerns = Like a function

## React is 'Declarative'
- Actual User Interface.
- Description of user interface.
- Define the desired target states and let React figure out DOM instructions.


## Building SPAs(Single-Page Applications)

- Control parts of pages or entire pages (WIDGET APPROACH) - some pages are rendered and served by a backend server.
- Or Control the entire frontend - only one HTML page from server, React Takes care of UI completely.
 > https://www.netflix.com/browse

## Alternatives to React
- React.js - lean and component focused UI library. Need to install 3rd party packages.

- Angular - component based framework, packed with features. Overkill for small projects.

- Vue.js - component based UI framework, includes most core features. Less popular.

## Framework:
- Limited flexibility
 > Do things in a certian way
 > Hard to deviate: Structure to follow

- Large & full of features:
 > Hard to Customise
 > Use the whole thing


## JSX

- HTML in JS

- JSX = Javascript XML

- XML is abbreviation for eXtensible Markup Language whereas HTML stands for Hypertext Markup Language. XML mainly focuses on transfer of data while HTML is focused on presentation of the data.


## Question and answer:
What does JSX stand for in the context of React?
 > JavaScript XML


In JSX, how do you embed JavaScript expressions within markup?
 > Enclose the expression in curly braces {}

Which of the following statements about JSX is true?
 > JSX is just syntactic sugar for function calls and objects.

How can you create a new React app using Create React App?
 > `npx create-react-app my-app`

Which command is used to start the development server in a Create React App project?
 > `npm start`

What is the purpose of the public folder in a Create React App project?
 > To contain static assets and public files

What is the purpose of the src folder in a Create React App project?
 > To contain the source code of the React application


 
Which library is commonly used for building SPAs with ReactJS?
 > React Router

What is the purpose of React Router in a React SPA?
 > Enable navigation and routing in a SPA

What is a fundamental difference between frameworks and libraries?
 > Frameworks dictate the flow of control, while libraries are collections of functions that can be called.

Which of the following statements is true regarding frameworks?
 > Frameworks often come with a set of rules and conventions that developers must follow.

Which of the following is a characteristic of libraries?
 > Libraries are more flexible and allow developers to choose their own structure.

What is the primary focus of Component-focused development?
 > Reusability and encapsulation

What is the key characteristic of declarative programming?
 > Focus on describing the outcome or result

Which development approach is more likely to lead to reusable and modular code?
 > Declarative

Which of the following best describes the relationship between components in Component-focused development?
 > Loose coupling

What file is commonly used to manage project dependencies in a React app?
 > `package.json`

In a React project, what file is responsible for defining the project's routes?
 > `routes.js`

What file is responsible for defining the structure and layout of a React component?
 > `App.js`

What is the purpose of the index.js file in a React project's component folder?
  > Import and render the component

What is a React component?
 > A JavaScript function that returns a React element.

What is the purpose of the render method in a class component in React?
 > To render the component's UI elements.

How do you define a functional component in React?
 > Using the function keyword.

How can you prevent the default behavior of a form submission in React?
 > By using the event.preventDefault() method.

In a controlled form component in React, where is the form data typically stored?
 > In a controlled form component in React, where is the form data typically stored?

What is the purpose of the value attribute in a controlled input element in React?
 > It sets the initial value of the input field.

What is the primary purpose of creating components in React?
 > To organize and modularize the code for reusability

When adding styles to a React component, which file extension is commonly used for the styles?
 > .css

What is the purpose of using Material icons in a web application?
 > To provide a consistent set of scalable icons

In React, how can you import an external component into another file?
 > Using the import statement

How can you dynamically display data in JSX?
 > Using curly braces {} with JavaScript expressions

What does the map function do in the context of dynamically displaying data in JSX?
 > Iterates over an array and returns a new array

How do you conditionally render content in JSX?
 > By employing ternary operators or logical && operators

What is the purpose of Props in ReactJS?
 > To pass data from a parent component to a child component

How do you pass props to a child component?
 >Using this.props object

Can props be modified inside a child component?
 > No, props are immutable in child components

What is the primary purpose of passing props to a React component?
 > To pass data from a parent component to a child component

In React, where are props typically defined and initialized for a child component?
 > In the parent component's render method

How can you access the values passed through props inside a functional component?
 > Using props directly

What is a key difference between arrow functions and regular functions in JavaScript?
 > Arrow functions have a shorter syntax

How do arrow functions handle the "this" keyword compared to regular functions?
 > Arrow functions inherit "this" from their containing scope

What happens when using the "arguments" object in an arrow function compared to a regular function?
 > Arrow functions do not have access to the "arguments" object

What is the purpose of event handling in React?
 > Managing state changes

What is the role of preventDefault in React event handling?
 > Prevents the default browser behavior associated with the event

What is the purpose of the bind method in React event handling?
 > Binds the event handler to the React component instance

How can you prevent the default behavior of an event in React?
 > `event.preventDefault()`

Which of the following is used to handle input changes in React?
 > onChange

In React, which method is commonly used for handling form submissions?
 > onSubmit

What is React state used for?
 > To manage and store dynamic data in a component

How is state initialized in a React component?
 > Through the this.state object

What function is used to update the state in React?
 > setState

What is the purpose of a form submit handler in React?
 > To handle form submission and prevent default behavior

In React, which method is commonly used to handle form submissions?
 > onSubmit

What is two-way binding in React forms?
 > Keeping the state of form inputs in sync


What is two-way binding in ReactJS?
 > Data flow in two directions

Which method is commonly used to implement two-way binding in React?
 > setState()

What is the main disadvantage of manually implementing two-way binding in React without using libraries like Redux or MobX?
 > Increased complexity

What is the purpose of the useState?
 > To create stateful functional components

How is state initialized using useState with objects?
 > useState({})

When using useState with objects, why is it important to update state immutably?
 > It prevents unintended side effects

 Which method is used for handling communication from child to parent component in React?
  > Callback functions

In React, how can sibling components communicate with each other?
 > Shared state in a parent component

Which React feature is suitable for global state management and communication across components?
 > Redux

What React feature is commonly used for rendering dynamic lists efficiently?
 > map function

When rendering a dynamic list in React, why is it recommended to provide a unique "key" prop for each list item?
 > It helps React identify which items have changed, been added, or been removed

What is the purpose of the useState hook when working with dynamic lists in React?
 > 

In React, what is the purpose of the && operator in JSX?
 > It is used to create conditional rendering based on a logical condition.

How does the && operator work in a React component's JSX for conditional rendering?
 > It renders the element following it only if the condition is true.

In a React component, how can you use the && operator to conditionally render a component based on a prop?
 > `{this.props.condition && <ConditionalComponent />}`