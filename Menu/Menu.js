/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.
*/




const header = document.querySelector('.header')
header.appendChild(createMenu(menuItems))


function createMenu(arr) {
  // Create elements
  const menu = document.createElement('div')
  const list = document.createElement('ul')

  // Setup structure
  menu.appendChild(list)

  // Add classes
  menu.classList.add('menu')

  // Step 2: Iterate over array
  arr.forEach(item => {
    let listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.textContent = item;
  })

  // Step 3: Using a DOM selector, select the menu button currently on the DOM.
  const menuButton = document.querySelector('.menu-button')

  // Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open')
  })

  
  // Step 5: Return the menu component
  return menu;
}



TweenMax.to(".menu--open", 6, {left:300})
/*


  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/



