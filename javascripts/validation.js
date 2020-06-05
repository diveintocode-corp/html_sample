// 1段階め
// function emailValidation() {
//   const form = document.getElementById('form');
//   form.onsubmit = function(){
//     if(form.email.value !== form.email_confirm.value) {
//       const element = document.createElement('p')
//       const message = document.createTextNode("Eメールが一致しません")
//       form.appendChild(element);
//       element.appendChild(message);
//       return false;
//     } else {
//       form.submit();
//     }
//   };
// };

// 2段階め
// function emailValidation() {
//   const form = document.getElementById('form');
//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     if(form.email.value !== form.email_confirm.value) {
//       const element = document.createElement('p')
//       const message = document.createTextNode("Eメールが一致しません")
//       form.appendChild(element);
//       element.appendChild(message);
//       element.classList.add("alert")
//     } else {
//       form.submit();
//     }
//   });
// };

function emailValidation() {
  const form = document.getElementById('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if(form.email.value !== form.email_confirm.value) {
      const element = document.createElement('p')
      const message = document.createTextNode("Eメールが一致しません")
      form.appendChild(element);
      element.appendChild(message);
      element.classList.add("alert");
      setTimeout(() => {
        form.removeChild(element)
      }, 3000)
    } else {
      form.submit();
    }
  });
};

window.onload = function() {
  emailValidation();
};
