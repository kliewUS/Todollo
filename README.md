# Todollo

[Live Site](https://todollo.herokuapp.com/#/)

## Introduction

![firefox_9MQc23AOJU](https://user-images.githubusercontent.com/23514798/94644049-0e6bd100-029d-11eb-9f94-9c5b65d7e062.png)

Todollo is based on the site, Trello. This site clone offers tools to assist in project management and allows users to streamline their workflows by creating boards, lists, and cards. Additionally, labels and comments can added onto cards for additional feedback.

## Technologies used

Todollo's backend is built using Ruby on Rails and PostgreSOL and the frontend is built using React, Redux, and Javascript. The live site is using Heroku for hosting.

## Features

### User Auth

![firefox_5ETzaihVlk](https://user-images.githubusercontent.com/23514798/94643736-58a08280-029c-11eb-95db-46762cc6793b.png)

Users are able to sign up or log in by clicking either buttons on the top of the splash page. A demo login is provided upon reaching the login form. User passwords are secured via BCrypt and session tokens are randomly generated and invalidated upon log out.

### Boards

![n0A7qkPk8k](https://user-images.githubusercontent.com/23514798/94643726-563e2880-029c-11eb-8325-17f306470cf2.gif)

![Q7hHFj7Ixm](https://user-images.githubusercontent.com/23514798/94643729-56d6bf00-029c-11eb-9c1e-159e1fcb8684.gif)

Users have a dashboard that displays all of their personal boards. They are able to create new boards by clicking on the Create New Board button and are promptly redirected to the newly created board upon successful creation. Users are also able to update a board's title and delete a board. Additionally, board owners have the ability to add or remove users from their boards.

### Lists and Cards

![I5jj4sqYD0](https://user-images.githubusercontent.com/23514798/94643722-550cfb80-029c-11eb-975f-badca91a4aba.gif)

Board Owners and board members can add lists and cards by clicking on the Add List and Add Card buttons respectively. A list can have its title updated and can be deleted when no longer needed. Each card has it's own profile where a user can update its title and a description can be add on to the card to provide more information about it.

### Comments

![82RVuzKMJx](https://user-images.githubusercontent.com/23514798/94643731-576f5580-029c-11eb-979c-e9d59e1c0f82.gif)

Comments can be added on any cards to provided feedback about a specfic card. Comments can only be edited or deleted by the original poster in case changes to the comment are needed.

### Labels

![h3VPJDiIgj](https://user-images.githubusercontent.com/23514798/94643740-59d1af80-029c-11eb-9e1c-cc9d7e752c72.gif)

Labels can be accessed via the Add Labels button in the card profile modal. Labels can be added or removed from a card. In addition, you can modify an existing label or create a new label for all cards to use. Labels can also be deleted if no longer needed.