function drop_menu_btn() {
  const button = document.getElementById("drop_menu_btn");
  const menu = document.getElementById("drop_menu");
  button.onclick = function(){
    menu.classList.toggle('display_block');
  };
  // button.addEventListener('click', function(e) {
  //   menu.classList.add('display_block');
  // });
};

// window.onload = function() {
//   drop_menu_btn();
// };

function drop_menu_btn() {
  const button = $("#drop_menu_btn");
  const menu = $("#drop_menu");
  button.click(function(){
    menu.fadeToggle()
  });
};

$(function() {
  drop_menu_btn();
})


