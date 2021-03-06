// <!--
//     WEEKEND EXERCISES!

//     EX1.: Create a header for the page
//     EX2.: Create a subtitle for the page
//     EX3.: Create a table with 4 rows and 5 columns (ID, Name, Surname, Age, Email)
//     EX4.: Add a link to a Facebook profile for each of the IDs
//     EX5.: Add a text input "textChange" for plain text
//     EX6.: Add a button next to "textChange", when pressed the title and the H1 of the page must be changed with the content of "textChange"
//     EX7.: When the button is pressed, if "textChange" is empty, alert the user with a message
//     EX8.: Add a new section with title "Enrolled Students"
//     EX9.: Add an empty UL or DIV inside this new section
//     EX10.: Add an extra column to the Table named "actions"
//     EX11.: Add a button in each "action cell" with a "+" sign. When the button is pressed a new line must appear inside the "UL / DIV" in the enrolled section list
//     EX12.: Add button for each item of the list. When pressed, the student is removed from the list. 
//     EX13.: Create a simple form with 5 fields: ID, Name, Surname, Age, Email
//     EX14.: Create a button "add students" which adds a new row to the table
//     EX15.: Add a "counter section" in which there is always the number of items in the List

//     EX16.: Add somewhere a button, on click, it changes the color of each item in the list in RED
//     EX17.: Add somewhere a button, on click, it counts the number of entry in the list and shows it in a newly created paragraph
//     EX18.: Add somewhere a button, on click, it swaps HEADER and Subtitle
//     EX19.: Add somewhere a button, on click, change the table background to a random color
//     EX20.: Add a "color picker" to the page, when the color changes, apply it to the header
//     EX21.: Add a dropdown (<select> tag), with your fav movies. When one is selected, change the heading of the page with the selected value
// --></select>
//     EX4.: Add a link to a Facebook profile for each of the IDs
function addLink(){
    let link = document.querySelectorAll('.link')
       let linkArray = []

       for (let i = 0; i < link.length; i++){
           linkArray.push(link[i].innerHTML)
       }
       for (let i = 0; i < link.length; i++){
            link[i].innerHTML = ''
            let linkNode = document.createElement('a')
            linkNode.href = 'https://facebook.com'
            linkNode.innerHTML =linkArray[i]
            link[i].appendChild(linkNode)
       }
}
    // EX6.: Add a button next to "textChange", when pressed the title and the H1 of the page must be changed with the content of "textChange"
function changeH1Content() {
    let value = document.getElementById('textChange').value
    let h1 = document.querySelector('h1')
      h1.innerHTML = value
    let h2 = document.querySelector('h2')
     h2.innerHTML = value   
     if (value === ''){
         alert('Please fill in input field')
     }
}

//     EX7.: When the button is pressed, if "textChange" is empty, alert the user with a message
// function contentEmpty(){
//     let value = document.getElementById('textChange').value
//     if (value === ''){
//         alert('Please fill in the input field')
//     }
// }
//     EX8.: Add a new section with title "Enrolled Students"
function enrolledStudent(){
    let enroll = document.createElement('section')
       enroll.innerHTML = 'Enrolled Students'
       document.getElementsByTagName('body')[0].appendChild(enroll)
}
//     EX9.: Add an empty UL or DIV inside this new section
function addEmptyUlOrDiv(){
    let enroll = document.querySelector('section')
    let enrollNode = document.createElement('ul')
        enrollNode.innerHTML = ''
        enrollNode.classList.add('ul')
        enroll.appendChild(enrollNode)
}
//     EX10.: Add an extra column to the Table named "actions"
function addColumn(){
    let column = document.getElementById('categories')
    let columnNode = column.insertCell(column.length)
        columnNode.innerText = "Actions"
}

//     EX11.: Add a button in each "action cell" with a "+" sign. When the button is pressed a new line must appear inside the "UL / DIV" in the enrolled section list
function addButton(){
    let columns = document.querySelectorAll('tr')

    for(i = 1; i < columns.length; i++){

    let tabledata = document.createElement('td')
    let button = document.createElement('button')
    button.innerHTML='+'
    button.classList='newList'
    tabledata.appendChild(button)

    columns[i].appendChild(tabledata)
  }
    let buttonNode = document.getElementsByClassName('newList')

      for (let i = 0; i < buttonNode.length; i++) {
            buttonNode[i].addEventListener('click',addToList)
      } 
}

function addToList(){
    let list = document.getElementsByTagName('ul')[0]
    let listNode = document.createElement('li')
        listNode.innerHTML = 'New students'
        listNode.classList.add('new-students')
        list.appendChild(listNode)
}

//     EX12.: Add button for each item of the list. When pressed, the student is removed from the list. 
function addbtn(){
          let list = document.getElementsByTagName('li')

          for (let i = 0; i < list.length; i++){
              let btn = document.createElement('button')
              btn.classList.add('remove button')
              btn.innerHTML = 'Remove btn'
            //   btn.accessKeyLabel('click', ()=>{
            //       btn.parentNode.removeChild()
            //   })
              list.appendChild(btn)
          }
}

//     EX13.: Create a simple form with 5 fields: ID, Name, Surname, Age, Email
//            DONE WITH HTML

//     EX14.: Create a button "add students" which adds a new row to the table
//            Button was created in html, now adding functionality with JS
function addStudent(){
    let addStud = document.getElementById('categories')
    let addStudNode = document.createElement('tr')
        addStudNode.classList.add('stud')
        addStudNode.innerText = 'Add students'
        addStud.appendChild(addStudNode)
}
//     EX15.: Add a "counter section" in which there is always the number of items in the List


// EX16.: Add somewhere a button, on click, it changes the color of each item in the list in RED
function changeColorUl(){ 
    let changeColor = document.querySelector('ul')
        changeColor.style.color = 'red'
}


//     EX17.: Add somewhere a button, on click, it counts the number of entry in the list and shows it in a newly created paragraph

//     EX18.: Add somewhere a button, on click, it swaps HEADER and Subtitle
function swapHeader(){
    let h1 = document.querySelector('h1')
      h1.innerHTML = 'Sike !!'
    let h2 = document.querySelector('h2')
     h2.innerHTML = 'Sike !!'
}

//     EX19.: Add somewhere a button, on click, change the table background to a random color





window.onload = function(){
    enrolledStudent()
    addEmptyUlOrDiv()
    addColumn()
    addButton()
    addbtn()
    addLink()
    
}