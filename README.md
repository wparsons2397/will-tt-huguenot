# This project can be run with the following commands

npm i
npm start

loads up on localhost:3000

# Info
this was built using create-react-app with a typescript template as the basis

Source of icons: https://feathericons.com/

Figma for reference
https://www.figma.com/design/MkHXiu3Wjja0JGx3HvjzcF/FE-Test---Fund-Centre?node-id=1615-277791&node-type=frame&t=Iq8lzcVGbZrkc64o-0


This project served as a tech test for a company during an interview process
This will be made private as a repository once the interview process is completed

# My thoughts at the conclusion of this work

I spent just under 10 hours working on this, and I was unable to 100% complete the work as described. That being said, the resulting website is very great effort in time. 
-List View set up
-Grid View set up
-Sidebar filters working
-Clear All filters
-Show Managers button shows & hides content
-Website Header & Banner working
-Colors applied via styling to replicate Figma
-Fonts, line spacing, and styling set to replicate Figma

Additionally - I chose to copy the data from the Figma for use here - I decided to create 2 constant files to maintain the data - which is just imported as necessary when in use. I felt this was an acceptable solution for what I had to do, but this is a hardcoded and limited scope example. The hardcoded table/grid based on the number of data points I used allowed me to get such a product done in about 10 hours, however that also would require reworking for a production quality code. I would most certainly want (& would use) a dynamic solution to the data load in & table/grid generation in a real world scenario.


# What I would prioritize next, if given more time
The incomplete components that are left (and how I would prioritize working them) are as follows:
1. Footer - I was able to start briefly on this but elected to prioritize working filtering - therefore there is not actually a footer at this time.
2. Grid View Filtering - The filtering works and hides elements, but I would rewrite this to rearrange the grid components accordingly - this was a limitation of my solution with the time I had and had to make do with the solution as I started it.
3. Managers View Filtering - there are buttons for the Manager section but they do nothing - functionality is key so this would be an immediate priority.
4. Styling final check & pass - I was styling as I went and was able to do a great job for matching the mocks. However, since this is an exercise intended for a real world client, I would definitely prioritize another styling pass to really make things perfect. Right now, there is a bit of in certain scenarios.
5. Search Bar - the search bar does nothing right now, so I would then create a functional search bar.
6. CSS variable assignment & creation outside of single properties - I was able to assign most of the properties as variables as designated in the Figma - but I would much prefer to have an object property set up, for example 'Title-XL' that contains all the title stlying wrapped up into one - this would have helped the CSS bloat.