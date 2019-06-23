+++
fragment = "contact"
#disabled = true
date = ""
weight = 110
background = "light"
form_name = "defaultContact"

title = "Contact Us"
subtitle  = "Get in touch with Ethical Frenchie. Come meet us in person or book an appointment."
#title_align = "left" # Default is center, can be left, right or center

# PostURL can be used with backends such as mailout from caddy
post_url = "https://portal.ethicalfrenchie.com/forms/wtl/652b9ea9248e0ab4cb638e06c9e95542" #default: formspree.io
email = "adopt@ethicalfrenchie.com"
address = "17 State ST, 40th floor, New York, NY 10004"
phone = "800-205-7859"

button_text = "Submit" # defaults to theme default
#netlify = false

# Optional google captcha
# Won't be used if netlify is enabled
#[recaptcha]
#  sitekey = ""

[message]
  success = "Thank you for awesomely contacting us." # defaults to theme default
  error = "Message could not be send. Please contact us at adopt@ethicalfrenchie.com instead." # defaults to theme default

# Only defined fields are shown in contact form
[fields.name]
  text = "Name *"
  error = "Please enter your name" # defaults to theme default

[fields.phonenumber]
  text = "Cell Phone *"
  error = "Please enter your phone number" # defaults to theme default

[fields.email]
  text = "Email Address *"
  error = "Please enter your email address" # defaults to theme default

[fields.state]
  text = "State *"
  error = "Please enter your state" # defaults to theme default

[fields.description]
  text = "Your Question Goes Here *"
  error = "Please enter your question" # defaults to theme default

# Optional hidden form fields
# Fields "page" and "site" will be autofilled
[[fields.hidden]]
  name = "page"

[[fields.hidden]]
  name = "someID"
  value = "example.com"
+++