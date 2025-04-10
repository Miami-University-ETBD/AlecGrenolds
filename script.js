// 1. Header Text Toggle
const headerTitle = document.querySelector('h1');
let isToggled = false;
headerTitle.addEventListener('click', () => {
    if (isToggled) {
        headerTitle.textContent = headerTitle.textContent.replace("Alec - Dog Lover", "Furry Friends Hub").replace("Alec - Dog Lover", "Dog of the Week: Greta").replace("Alec - Dog Lover", "About Me - The Creator");
    } else {
        headerTitle.textContent = "Alec - Dog Lover";
    }
    isToggled = !isToggled;
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
// 2. Paragraph Color Toggle
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    let isColored = false;
    p.addEventListener('click', () => {
        if (isColored) {
            p.style.color = ''; // Revert to default
        } else {
            p.style.color = '#8b5a2b'; // Dog-themed brown
        }
        isColored = !isColored;
    });
});