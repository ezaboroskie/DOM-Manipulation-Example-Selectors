//Here are some examples of various way to target HTML elements using DOM Manipulation

//Target an element by id
//A variable called mainHeading is returned which can be directly manipulated
const mainHeading = document.getElementById('main-heading')
mainHeading.style.fontSize = '75px'


//Target an element by class name
//An HTMLCollection is returned and changed into an iterable array
const subHeadings = document.getElementsByClassName('p-sub-heading')
let subChildren = Array.from(subHeadings)
subChildren.forEach(element=>element.style.fontSize = '35px')
subChildren.forEach(element=>element.style.color = 'red')
subChildren.forEach(element=>element.style.margin = '20px')



//Target an element by tag name
//An HTMLCollection is returned and changed into an iterable array
const listItems = document.getElementsByTagName('li')
let subListItems = Array.from(listItems)
subListItems.forEach(element=> element.style.color='darkorange')
subListItems.forEach(element=> element.style.fontSize='25px')
subListItems.forEach(element=> element.style.margin='15px')


//Target multiple elements wtih querySelectorAll
//Returns a NodeList that can be iterated on
const allSpans = document.querySelectorAll('span')
allSpans.forEach(element=> element.style.fontStyle='italic')


//Target an element with querySelector
//Targets the div with id=span-container and then targets the 2nd child element directly 
const selectedSpan = document.querySelector('#span-container > span:nth-child(2)')
selectedSpan.style.fontSize="40px"
selectedSpan.style.color='purple'


