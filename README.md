Header
Body
 Sidebar 
   menu-items
 Main-container
   buttonlist
   videocontainer
      videocard


Debouncing
 typing slow = 200ms 
 typing fast =  30ms

 performance
 - iphone pro max=  14 letter *1000 =  14000 api calls
 - with debouncing  =  3 api calls  = 3000 api calls

 Debouncing with 200ms
  - if difference between two key strokes is less than <200ms - not call the api, decline the api call
  - if it is greater than > 200ms -  call the api 
# youtubeCloneAk
