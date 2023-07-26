
function setAction(form) {
  const email = form[0]
  const re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
   const msg = form.children[0].children[1]
 
  if(!re.exec(email.value )) {
    msg.classList.remove("msg-hidden")
    email.classList.add('error-email')
    
  } 
  else {
  msg.classList.add("msg-hidden")
  email.classList.remove('error-email')
  alert('Form submited')
  return true;
  }

  return false;
}