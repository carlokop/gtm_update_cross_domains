 /*
 * Put this script in a HTML tag
 * this script will set a hidden field and generate de _gl parameters and update all url's to a given link with the _gl query params
 */
function getLinkerParameter() {
  // Create form element, give it an action, make it hidden and prevent the submit event

  var formNode = document.createElement('FORM');
  formNode.id = "gtm_cross_domain";
  formNode.action = 'https://example.com';  //CHANGE THIS WITH YOUR CROSS DOMAIN
  formNode.style.opacity = '0';
  
  formNode.addEventListener('submit', function(event) {
     event.preventDefault();
  });
    
  // Create a button node, make it type=submit and append it to the form
  var buttonNode = document.createElement('BUTTON');
  buttonNode.type = 'submit';
  buttonNode.id = "gtm_btn_cross_domain";
  formNode.appendChild(buttonNode);
    
  // Append the form (and button) to the DOM
  document.body.appendChild(formNode);

  // Trigger a click on the button node to submit the form
  buttonNode.click();

  // Check for the input[name=_gl] hidden input in the form (if decoration worked)
  var _glNode = formNode.querySelector('input[name="_gl"]');
  if (_glNode) {
    return _glNode.value;
  }

  return '';
}

function updateUrls() {
 //updates all url's in urlsToUpdate with the _gl params
  var linkerParameter = getLinkerParameter();
  if (!linkerParameter) {
    return;
  }

  var urlsToUpdate = ['https://example.com'];  //CHANGE THIS, ALL THE LINKS WITH THIS LINK WILL BE UPDATED
  var anchors = document.getElementsByTagName('a');

  for (var i = 0; i < anchors.length; i++) {
    var href = anchors[i].href;

    for (var j = 0; j < urlsToUpdate.length; j++) {
      if (href.indexOf(urlsToUpdate[j]) !== -1) {
        // Update the URL with the linker parameter
        var newUrl = href;
        if (href.indexOf('?') === -1) {
          newUrl += '?_gl=' + linkerParameter;
        } else {
          newUrl += '&_gl=' + linkerParameter;
        }

        anchors[i].href = newUrl;
      }
    }
  }
}
updateUrls(); 
