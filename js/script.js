window.onload = function(){
  let [...popular_products] = document.querySelectorAll('.popular_products > div');
  for(let i = 0; i < [...popular_products].length; i++){
    [...popular_products][i].onmouseenter = (e)=>{
      let target = e.target;
      let quick_view = target.lastElementChild.previousElementSibling;
      let color_selection = target.lastElementChild;
      quick_view.style = "display:block";
      color_selection.style = "display:block";
    }
    [...popular_products][i].onmouseleave = (e)=>{
      let target = e.target;
      let quick_view = target.lastElementChild.previousElementSibling;
      let color_selection = target.lastElementChild;
      quick_view.style = "display:none";
      color_selection.style = "display:none";
    }
  }
  function showMobileMenu(){
    let button = document.querySelector('.fa-bars');
    let mob_menu = document.querySelector('nav>ul');
    button.onclick = ()=>{
      if(mob_menu.style["display"] == "block"){
        mob_menu.style = "display:none;";
      } else {
        mob_menu.style = "display:block;";
      }
    };
  }
  showMobileMenu();
}