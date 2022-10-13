const URLSrc = 'https://jsonplaceholder.typicode.com/todos'





async function displayToDo (i) {
 let toDoHTTPresponse = await fetch(URLSrc)
    console.log(toDoHTTPresponse)
let toDoresponse = await toDoHTTPresponse.text()
    // console.log(toDoresponse)
let parsedToDo = JSON.parse(toDoresponse)
// console.log(parsedToDo)
console.log(parsedToDo[0])

if(toDoHTTPresponse.status !== 200){
    console.error('Error')
}else{

    let display = document.getElementById('list_container')
    display.innerHTML = `<span>hai da fare: ${parsedToDo[i].title}</span>`
}
}



let submitBtn = document.getElementById('btn_submit')
submitBtn.onclick = () => {
    document.getElementById('list_container').innerHTML = ''
    let numToDo = document.getElementById('toDoNum').value
    displayToDo(numToDo)
}




