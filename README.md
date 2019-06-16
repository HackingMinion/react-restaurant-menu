# Step-by-step restaurant menu in React

## Table of content

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Documentation](#documentation)

This is a sample project for a restaurant-menu order written in React. In order to extend or maintain this project, read the documentation to get an overview.

## Requirements

At least node.js version: `10.16.0`. You can get it [here](https://nodejs.org/en/).

Check your node version:

```
node --version
```


If you have an other version of node installed, consider using Node Version Manager (nvm) to manage multiple active node.js versions and to switch between them.

- Get the nvm for Linux / Mac OS [here](https://github.com/nvm-sh/nvm)
- Get the equivalent for Windows [here](https://github.com/coreybutler/nvm-windows)

## Installation

Clone this repository

```
git clone https://michelgabriel@bitbucket.org/michelgabriel/react-restaurant-menu.git
```

In root of the folder:

```bash
npm install
```

To start the app via localhost:

```bash
npm start
```

In your browser open a new tab: http://localhost:3000/

## Documentation

### Frameworks & Libraries

A quick lock at the package.json file gives an simple overview over the used packages in this project.

#### React

The assessment asked to use React or Vue.js so I choose React because I am way more experienced in it and I prefer it over Vue.js any day. I then decided to use [Create React App](https://github.com/facebook/create-react-app) as my starting path. I think it's a great way to start a simple project and get it up and running in no time.

#### Node-sass

I probably spent the most time on this decision. In the past I always used it for an easy setup and quick styling, but I often realized that it's definitely not best practice. I thought about using something like [styled Components](https://www.styled-components.com/) or [JSS](https://cssinjs.org/) but I've never used either or anything similar before. I had a quick look at both but I wasn't convinced mostly because I was scared that I couldn't handle it as the project is getting bigger or that it will take up too much time for me to figure it out. I thought maybe I could still do that later, so I went with **node-sass** for the moment. Obviously it wasn't realistic to change that once my project grew in size. My conclusion is that it's not ideal, but not the end of the world. My scss-file has about 100 lines now and it's still pretty easy to keep track of.
I also used [PostCSS Normalize](https://github.com/csstools/postcss-normalize) to remove browser specific styling for HTML elements.

#### Material-UI

I added the [Material UI](https://material-ui.com/) component library as it was suggested to use material design with card layout and this library is precisely made for React. I've never used it before but it turned out pretty good. It's easy to use, has a great documentation and plenty of possibilities to vary their usage and customization.

### Project

In this part I document the structure of my components and how I nested them.

#### App

The app component has two main functionalities: keep track of the current course and if the order is finished the summary should show the final order.
The component contains the **steps-component** as well as the **order-component**.

#### Steps

The steps component is pretty simple. It contains a panel of buttons, one for each course. All the buttons for the courses following the current course, are disabled so that the user has to go through each course and maybe orders more meals than initially intended. Another reason is that this way the main course can't be skipped, where at least one item has to be selected.

#### Order

In this component the items of the current course and the selected items are taken care of. The json-file gets fetched and immediately the items of the current course are stored in state. The object where the selected items will be stored, is also initialized with all the six courses containing an empty array to store the chosen items. When an item is clicked, it checks if the item is already selected for that course and if so will delete it.
The component decides whether to show the summary of all selected items or the grid with all items of the current course. The **summary component** is placed here instead of in the app component as some would think, because it needs to have the object of all selected items. In my opinion the app component is not responsible for the items because the steps-component doesn't care about the items, so the state would be wrong in the app component.

##### Order View

Only in this component are **Material-UI components** used to display course items in cards as suggested.

#### Summary

The order summary is pretty straight forward. It shows a title and a list for each course, if at least one item of that course is ordered.

#### Utils

Course Name: Includes an array of all course names and two functions to get all names or get a name by a specific key.
Course Item: A function to remove all items of the wrong course.
Item Index: A function to find the index of the clicked item in the object of selected items.

### Improvement

There is always room to improve certain things. I have a few things which I quickly want to address:

- Use a different type of styling instead of one styling sheet for all. Make use of the nested components from React.
- Rethink the order-container component. I think it grew a bit too big and maybe should outsource some code in a different component.
