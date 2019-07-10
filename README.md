# React workshop

### Purpose

The purpose of this workshop / example is to compare:

- classic way of writing react components VS the "hooks" way
- State management: React Context API (with and without hooks) vs Redux vs Mobx
- Typescript is used everywhere

### Description

This is a small application which fetches some recipes data from a public API. User can search through the recipes and add/remove recipes to/from a list.

### Folder structure

the source folder structure is:

- components *-> This contains the basic components which are not linked to any state*
- containers *-> Here we have components which are using different state management mechanism*
  - mobx *-> this folder also contains the mobx stores* 
  - redux *-> this folder contains the required redux actions, reducers*
- interfaces *-> define all the common typescript interfaces here*
- providers *-> the context providers used for React Context API examples*
- services *-> define all services here, like the one which retrieves data from an API*
- views *-> these components are rendered by the routing system, each is the entrypoint for the corresponding example*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

