// Get the form and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Validate the form data
  if (!validateFormData(formData)) {
    return;
  }

  // Send the email
  sendEmail(formData);
}

function validateFormData(formData) {
  // Check if the name field is empty
  const name = formData.get('name');
  if (!name) {
    alert('Please enter your name.');
    return false;
  }

  // Check if the email field is empty
  const email = formData.get('email');
  if (!email) {
    alert('Please enter your email address.');
    return false;
  }

  // Check if the email address is valid
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // Check if the message field is empty
  const message = formData.get('message');
  if (!message) {
    alert('Please enter a message.');
    return false;
  }

  // All validation passed
  return true;
}

function sendEmail(formData) {
  // Use an email service or API to send the email
  // For example, here is how to use EmailJS API to send the email:
  emailjs.send('service_id', 'template_id', {
    from_name: formData.get('name'),
    from_email: formData.get('email'),
    message_html: formData.get('message')
  }).then(function(response) {
    alert('Your message was sent successfully.');
    form.reset();
  }, function(error) {
    alert('There was an error sending your message. Please try again later.');
    console.log(error);
  });
}
