// Header Text Toggle
const headerTitle = document.querySelector('h1');
let isToggled = false;
const originalTitle = headerTitle ? headerTitle.textContent : ''; // Store original title on load
if (headerTitle) {
    headerTitle.addEventListener('click', () => {
        if (isToggled) {
            headerTitle.textContent = originalTitle; // Restore original title
        } else {
            headerTitle.textContent = 'Alec - Dog Lover'; // Set to common title
        }
        isToggled = !isToggled;
    });
}

// Paragraph Color Toggle
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    let isColored = false;
    p.addEventListener('click', () => {
        if (isColored) {
            p.style.color = ''; // Revert to default (e.g., #4e342e)
        } else {
            p.style.color = '#8b5a2b'; // Dog-themed brown
        }
        isColored = !isColored;
    });
});

// Materialize Collapsible Initialization
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

// jQuery Collapsible Initialization
$(document).ready(function(){
    $('.collapsible').collapsible();
});