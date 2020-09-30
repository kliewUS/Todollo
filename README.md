# Todollo

[Live Site](https://todollo.herokuapp.com/#/)

## Introduction

Todollo is based on the site, Trello. This site clone offers tools to assist in project management and allows users to streamline their workflows by creating boards, lists, and cards. Additionally, labels and comments can added onto cards for additional feedback.

## Technologies used

Todollo's backend is built using Ruby on Rails and PostgreSOL and the frontend is built using React, Redux, and Javascript. The live site is using Heroku for hosting.

## Features

### User Auth

Users are able to sign up or log in by clicking either buttons on the top of the splash page. A demo login is provided upon reaching the login form. User passwords are secured via BCrypt and session tokens are randomly generated and invalidated upon log out.

### Boards

Users have a dashboard that displays all of their personal boards. They are able to create new boards by clicking on the Create New Board button and are promptly redirected to the newly created board upon successful creation. Users are also able to update a board's title and delete a board. Additionally, board owners have the ability to add or remove users from their boards.

### Lists and Cards
Board Owners and board members can add lists and cards by clicking on the Add List and Add Card buttons respectively. A list can have its title updated and can be deleted when no longer needed. Each card has it's own profile where a user can update its title and a description can be add on to the card to provide more information about it.

### Comments
Comments can be added on any cards to provided feedback about a specfic card. Comments can only be edited or deleted by the original poster in case changes to the comment are needed.

### Labels
Labels can be accessed via the Add Labels button in the card profile modal. Labels can be added or removed from a card. In addition, you can modify an existing label or create a new label for all cards to use. Labels can also be deleted if no longer needed.