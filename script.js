//Here are some examples of various way to target HTML elements using DOM Manipulation

//Target an element by id
//A variable called mainHeading is returned which can be directly manipulated
    const mainHeading = document.getElementById('main-heading')
    mainHeading.style.fontSize = '75px'


//Target an element by class name
//An HTMLCollection is returned and changed into an iterable array
    const subHeadings = document.getElementsByClassName('p-sub-heading')
    let subChildren = Array.from(subHeadings)

    subChildren.forEach(element=>element.style.color = 'red')
    

//Target an element by tag name
//An HTMLCollection is returned and changed into an iterable array
//forEach is used to style each element in the now iterable array
    const listItems = document.getElementsByTagName('li')
    let subListItems = Array.from(listItems)

    subListItems.forEach(element=> element.style.color='darkorange')
    subListItems.forEach(element=> element.style.fontSize='25px')
    subListItems.forEach(element=> element.style.margin='15px')


//Target an element with querySelector
//Targets the div with id=span-container and then targets the 2nd child element directly 
    const selectedSpan = document.querySelector('#span-container > span:nth-child(2)')

    selectedSpan.style.fontSize="40px"
    selectedSpan.style.color='purple'


//Target the span container with getElementById
//Creates a new span element using createElement
//InnerHTML adds text to the newSpan element
//Append adds the newSpan element to the element spanContainer
    const spanContainer = document.getElementById('span-container')
    const newSpan = document.createElement('span')

    newSpan.innerHTML='This text was appended'
    newSpan.style.color='black'
    spanContainer.append(newSpan)


//Targets the button with id add-text-btn and div with id of dynamic-text-container
    const newTextBtn = document.getElementById('add-text-btn')
    const newTextContainer = document.getElementById('dynamic-text-container')


//Adds an event listener to the button that creates a new span on click and appends it to the div container
    newTextBtn.addEventListener('click', function(){
        const dynamicSpan = document.createElement('span')
        dynamicSpan.innerHTML= 'This text was added dynamically with a button' 
        newTextContainer.appendChild(dynamicSpan) 
    })


//Target multiple elements wtih querySelectorAll
//Returns a NodeList that can be iterated on
    const allSpans = document.querySelectorAll('span')

    allSpans.forEach(element=> element.style.fontStyle='italic')
    allSpans.forEach(element=> element.style.textDecoration='underline')







