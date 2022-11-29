# Development

### Link to Deployed Website
https://athleticmamba13.github.io/development/

### Goal and Value of the Application
The goal of this application is to visualize all
12 players of the Golden State Warriors and their 
statistics in an easily-digestible manner. The app
allows users to sort players by their contributions, 
selecting between different stats such as points per game,
rebounds per game, assists per game, +/-, and more. The
application also allows users to filter players based on 
attributes such as their position and whether or not they
are part of the starting lineup. Finally, the application
also allows users to "favorite" players. 

### Usability Principles Considered
The conceptual model behind this site is designed 
to be simple, yet efficient -- both highly learnable and
highly memorable for new users. I specifically considered
hierarchy when designing the nav-bar with the different 
filters, deciding that sorting by position is likely 
going to be the most common desired sorting mechanism, so 
I placed that on the left side of the nav-bar, where users
will likely look first. I also strategically placed the 
"Sort By" button in the top-left corner under the nav-bar, 
because users will likely glance towards that area quickly 
after loading the app. 
Each individual player box is modeled in the same way, making
studying statistics easy to learn and efficient, and hopefully, 
highly usable. 

### Organization of Components
There are two primary components within this application: the 
main App.js component, which represents the foundation of the 
page, as well as the PlayerItem.js component, which serves as 
the model for each player box. The PlayerItem component is 
contained within the main App.js component, and is contingent
on data received from the primary component. 

### How Data is Passed Down Through Components
Data is passed between the App.js and PlayerItem.js components using props.
App.js gets the data on the Warriors players, mapping every player into a
PlayerItem.js and passing in the data using the {item} prop, which has 
attributes such as PPG, RPG, APG and more called upon in the PlayerItem.js 
component.
Data is passed back into the App.js component from the PlayerItem.js component 
using state: some of the props passed into the PlayerItem.js components
include "set" state functions, which can trigger state changes in the App 
component when used by a PlayerItem.js component. 

### How the User Triggers State Changes
The user triggers state changes by interacting with the page: selecting filters 
or favorites, adding or removing players from favorites, or clicking one of the
options on the "Sort By" drop-down all trigger state changes. 
There are state variables for each of the different filters to set them each ON or
OFF (True or False), each of which change when a filter is selected. For sorting, 
there is a state variable called "sortType", which triggers changes in sorting 
based on user's location. 
