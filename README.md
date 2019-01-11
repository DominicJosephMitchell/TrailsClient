README

USER STORIES:

RIDER:
A rider wants to know how many total miles of the trail.
A rider wants to know the location of each trail.
A rider wants to know how difficult the trail is.
A rider wants to know what feature each trail has.
A rider wants to know the elevation of their trail.

USER:
A user wants to be able to see pictures of the trails.
A user wants to be able to see trails they have completed.
A user wants to create an account, with user name and password.
A user wants to update their password.
A user wants to sign in and log out.
A user wants to get all trails.
A user wants to get only trails they have completed.
A user wants to see information on all the trails listed.

STRETCH GOALS:
A rider wants to know how difficult the ride is.
A rider wants to know what feature each ride has.
A rider wants to know how many streets would have to crossed over during the ride.

WIREFRAMES:

A wireframe is a layout of a web page that demonstrates what interface elements will exist on key pages. It is a critical part of the interaction design process. ... Wireframes can also be used to create the global and secondary navigation to ensure the terminology and structure used for the site meets user expectations.

Wireframes focus on:
* To have a easy to use of program.
* Create a appealing UI/UX design .
* The range of functions available
* The relative priorities of the information and functions
* The rules for displaying certain kinds of information
* The effect of different scenarios on the display.

Entity Relationship Diagrams (ERD)

An entity-relationship diagram (ERD) is a data modeling technique that graphically illustrates an information system's entities and the relationships between those entities. An ERD is a conceptual and representational model of data used to represent the entity framework infrastructure. ... Entities. Relationships
* Identify the entities. The first step in making an ERD is to identify all of the entities you will use. ...
* Identify relationships. Look at two entities, are they related? ...
* Describe the relationship. How are the entities related? ...
* Add attributes. ...
* Complete the diagram.

Catalog of Routes:
Authentication
Verb	URI Pattern	Controller#Action
POST	/sign-up	users#signup
POST	/sign-in	users#signin
PATCH	/change-password/	users#changepw
DELETE	/sign-out/	users#signout
GET	/users/:id	users#show
Trails
Verb	URI Pattern	Controller#Action
GET	/trails	Trails#index
GET	/trails/:id	Trails#show
CompletedTrails
Verb	URI Pattern	Controller#Action
POST	/completed_trails	CompletedTrails#create
GET	/completed_trails	CompletedTrails#index
GET	/completed_trails/:id	CompletedSummits#show
PATCH	/completed_trails/:id	CompletedTrails#update
DELETE	/completed_trails/:id	CompletedTrails#destroy




<!-- [![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# react-auth-template

A front-end framework template for starting projects with a recent version of
either the [Rails API Template](https://git.generalassemb.ly/ga-wdi-boston/rails-api-template)
or the [Express API Template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template).

## Installation

1. [Download](../../archive/master.zip) this template.
1. Unzip and rename the template directory (`unzip ~/Downloads/ember-auth-template-master.zip`).
1. Move into the new project and `git init`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace `ga-wdi-boston.react-auth-template` in `package.json` with your
   projects name.
1. Replace the `"homepage"` field in `package.json` with your (public) Github
   account name and repository name.
1. Install dependencies with `npm install`.
1. `git add` and `git commit` your changes.
1. Run the development server with `npm start`.

## About

This template is derived from GA Boston's [react-template](https://git.generalassemb.ly/ga-wdi-boston/react-template).
Most of the development dependencies, such as linters, SCSS compiler, Webpack
config, NPM scripts, etc in this repo come from there.

It includes all the components and routes needed to sign up, sign in, change
passwords, and sign out of an API built with either template linked above, with
no need for modification.

**NOTE**: You should customize the included components to suit you app! They're
provided as a guide and a bare minimum of functionality and style. Consider
changing the provided SCSS styles, modifying the auth code, improving the flash
messages, etc.

## Structure

Currently, the top-level `App` component stores the currently authenticated
user in state, as well as data related to the flash messages. `App` renders the
`Header` component, and a list of routes, each of which render a component from
`src/auth/components`. The `auth` directory has two non-component files, `api`
and `messages`, which contain all the needed `fetch` calls, and messages to
display when API calls succeed or fail, respectively.

We recommend following this pattern in your app. For instance, if you are making
an app that keeps track of books, you might want a `books` directory next to
`auth`, which contains its own `api` and `messages` files, as well as a
`components` directory.

## Features

### `<AuthenticatedRoute />`

This template contains a handy component for creating routes that require a
user to be authenticated before visiting. This component lives in
`src/auth/components/AuthenticatedRoute.js` and is already required in `App`.
It's a thin wrapper around React Router's `<Route />` component. The only
difference is that it expects a prop called `user`, and if that prop is falsy,
it will render a `<Redirect />` that takes the user to `/`. **If you want to use
it, you must pass it the currently authenticated as a prop!**

It supports both the `component=` and `render=` attributes, but like `<Route />`
it will not forward props to the component if you use `component=`.

### Flash Messages

The `App` component has a rudimentary version of flash messages. To use it,
pass `this.flash` into a subcomponent of `App` as a prop and call it from there.
It expects two arguments: a message to display, and a message type, which is one
of `'flash-success'`, `'flash-warning'`, and `'flash-error'` which make the
message green, yellow, and red, respectively. You must pass one of these types.
You can add more types by adding more CSS rules in `App.scss`.

In the auth components, flash messages are used in conjunction with the
 `auth/messages` file to select from a list of predefined success/failure
 messages. To undertand how to do this, look at the definition of `flash` in
 `App.js`, the `signUp` method in `auth/components/SignUp.js`, and the
 `auth/messages.js` file.

 To change the duration of the message, replace `2000` with a value of your
 choice (in milliseconds) in the `flash` method definition in `App.js`.

 ### `src/apiConfig.js`

 Just like in
[browser-template](https://git.generalassemb.ly/ga-wdi-boston/browser-template),
this file will determine whether you're in a production or development
environment and choose an API URL accordingly. Don't forget to replace the
`production` URL with your deployed API's URL.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co. -->
