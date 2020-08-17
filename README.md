# Todollo

[Live Site](https://todollo.herokuapp.com/#/)

<!-- ![Splash Page](https://i.imgur.com/7scXbxA.png) -->

## Introduction

Todollo is based on the site, Trello. This site clone offers tools to assist in project management and allows users to streamline their workflows by creating boards, lists, and cards.

## Technologies used

Todollo's backend is built using Ruby on Rails and PostgreSOL and the frontend is built using React, Redux, and Javascript. The live site is using Heroku for hosting.

## Features

### User Auth
<!-- ![Log-in Page](https://i.imgur.com/BgHmI6f.png) -->

Users are able to sign up or log in by clicking either buttons on the top of the splash page. A demo login is provided upon reaching the login form. User passwords are secured via BCrypt and session tokens are randomly generated and invalidated upon log out.

### Boards

<!-- #### Board Create -->
<!-- ![Board Create](https://i.imgur.com/z6iwHmj.gif) -->

<!-- #### Board Edit -->
<!-- ![Board Edit](https://i.imgur.com/0MBGtva.gif) -->

<!-- #### Board Delete -->
<!-- ![Board Delete](https://i.imgur.com/g7JGTyS.gif) -->

Users has a dashboard that displays all of their personal boards. They are able to create new boards by clicking on the Create New Board button and are promptly redirected to the newly created board upon successful creation. Users are also able to update a board's title and delete a board.

## Features to be implemented

Todollo will soon have the following features.

* Creating, deleting, and updating Lists and Cards
* Creating, deleting, and updating Comments
* Putting labels on Cards.
* Change the order of lists and cards by dragging and dropping
* Setting and changing the Background of a board.