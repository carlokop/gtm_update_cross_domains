# gtm_update_cross_domains
updates url's with cross domain params

With this solution url's can be updated programatically that arn't updated automatically for some reason

This script works by placing an hidden form field with an url that is clicked via js.
That url will be updated with th _gl query parameter requred for cross domain tracking.
The second part of the script will update all url's with geven url's

Make sure you have the url as a cross domain in GA4 otherwise it won't work.

#what_to_change
Fill in your cross domain in formNode.action
This will be the hidden field

All the url's to update schould be in the urlsToUpdate array
