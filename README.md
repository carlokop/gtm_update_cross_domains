# gtm_update_cross_domains
updates url's with cross domain params

With this solution url's can be updated programatically that arn't updated automatically for some reason

This script works by placing an hidden form field with an url that is clicked via js.
That url will be updated with th _gl query parameter requred for cross domain tracking.
The second part of the script will update all url's with geven url's

Make sure you have the url as a cross domain in GA4 otherwise it won't work.

# what to change
Fill in your cross domain in formNode.action
This will be the hidden field

All the url's to update schould be in the urlsToUpdate array

# how to implement
Create a HTML tag in GTM and wrap the JS file in script tags
In the file there are two things to change.
In formNode.action you create the url for the hidden field. Add the cross domain there and make sure this url is also included in GA4 as an domain for the property
In urlsToUpdate you can add an array of link url's you want to update.

Fire the HTML tag after the GA4 config tag 
Since there is probably something wrong why this isn's done automatically
You may want to create a timer trigger to fire this once after 1 second after the page is loaded initially
