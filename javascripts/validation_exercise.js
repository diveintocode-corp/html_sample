function emailValidation() {
  const form = document.getElementById('form');
  const emailComfirmField = document.getElementById('email_confirm'); // --2
  const element = document.createElement('p'); // --4
  const message = document.createTextNode("Eメールが一致しません"); // --5
  element.appendChild(message); // --6
  element.classList.add("alert_color"); // --7
  emailComfirmField.addEventListener('input', e => { // --1
    if(form.email.value !== form.email_confirm.value) { // --3
      const contentField = document.getElementById('content_field'); // --9
      contentField.parentNode.insertBefore(element, contentField); // --8
      emailComfirmField.classList.add("alert_bg");
    } else {
      emailComfirmField.classList.remove("alert_bg");
      element.removeChild(message);
    }
  });
};

window.onload = function() {
  emailValidation();
};
