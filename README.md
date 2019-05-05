# EventHop-Grid

** The EventHop-Grid rebuild is still in progress! **

This is a complete overhaul of my EventHop web application that was originally made as a single-page app.  This overhaul will create a multi-page application made with css grid, css flexbos, and pug. The new site will focus on drastically improving several things:
	• Usability will be simplified via a more intuitive design 
	• Optimization (much faster loading speeds)
	• Accessibility
	• Responsiveness and Cross-Compatibility across mobile and the popular web browsers

# EventHop

![EventHop Logo](public/img/icon/favicon-310.png "EventHop Logo")

## Application Description

EventHop is an application that allows users to choose from several different activities (restaurants, bars, baseball games, etc) to create a 'route' of activities that they can plan for an afternoon or night out!  Users can create their own group for other users to join or they can join one of EventHop's pre-planned events.

### Features

EventHop contains several prominent features:

	• Google Maps Location Search by Category (Cafe, Restaurant, etc...)
    • Group Event Creation and Sharing
	• User Authentication and Data Persistence
	• Join Pre-Planned Events


When the user loads the application they can login using the navbar at the top-right of the screen using their user name and password to get autheniticated for the site.  If they aren't registered they can also register using an email and password.  Logging in is not required to use EventHop, but it does allow the user to join and save the groups that they see in the application.  The user is then greeted by a splash page that gives the user three options:

**1. Create your own Group Route**

**2. Join a Group Route**

**3. Join an Event with other users**


#### Create Your Own Group Route

Users can choose from different categories to find the kind of event they are looking for, they can then link up to three different locations together to create a route that gives information and ratings for each location as well as how long it takes to walk to the next area (past a certain distance car travel time will be given instead).  The route is then saved to the user's account and will persist through login/logout.  The user also names the route and other users can then find and join the created group!  
 
#### Join a Group Route

 When a user clicks on this option, the page loads the five 'Group routes' with the most users on the map and it describes the five groups and where they are going below the map.  Users can also create a 'Group route' that other users can then join.  Groups are named by the original creator but any user can keep track of their groups when they login to EventHop.  Group markers on the map will display the number of users that are in the group, so the user can easily see how popular each specific group will be!
 
#### Join a Pre-Planned Event

EventHop also features pre-planned 'Events' that usually involve a meal, an activity, and one other stop.  Events will have a pre-determined amount of spots so be sure to sign up early!  These events are a great way to get out and meet/mingle with new people.  They are also ideal for tourists or people visiting from out of town.

## Tutorial and Guest Login

We've provided a guest login for curious users to check out the application without have to sign up!  The following walkthrough will take you step-by-step through creating a group, joining a group, and joining a pre-planned event.  Here are the guest credentials:

**email: guest@gmail.com**

**password: guest**




## APIs 
* [Google Maps](https://developers.google.com/maps/documentation/javascript/)
* [Google Places](https://developers.google.com/places/)
* [Google Maps Directions API](https://developers.google.com/maps/documentation/directions/intro)


## Libraries and Technology
	• Heroku
	• Node.js
	• NPM
	• Express.js
	• Passport.js
	• SASS
	• CSS Grid
	• CSS Flexbox
	• MySQL
	• Sequelize
	• Pug
	• SendGrid

## Things To Come

Stay Tuned! This section will contain information on things to come once the site has been deployed.

## Dev Team 
	
* Zach Harmon [Github](https://www.github.com/zachha) - zachha@gmail.com
