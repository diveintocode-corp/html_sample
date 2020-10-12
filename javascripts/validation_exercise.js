function emailValidation() {
  const form = document.getElementById('form');
  const emailComfirmField = document.getElementById('email_confirm');
  const contentField = document.getElementById('content_field');
  console.log(contentField.parentNode)
  const element = document.createElement('p')
  const message = document.createTextNode("Eメールが一致しません")
  element.classList.add("alert_color");
  emailComfirmField.addEventListener('input', e => {
    e.preventDefault();
    if(form.email.value !== form.email_confirm.value) {
      element.appendChild(message);
      contentField.parentNode.insertBefore(element, contentField);
      emailComfirmField.classList.add("alert_bg");
    } else {
      element.removeChild(message);
    }
  });
};

window.onload = function() {
  emailValidation();
};
