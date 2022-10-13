const URLSrc = 'https://jsonplaceholder.typicode.com/todos'

let input = document.getElementById('toDoNum')
let numToDo = input.value


async function displayToDo (numToDo) {
 let toDoHTTPresponse = await fetch(URLSrc)
    console.log(toDoHTTPresponse)
if(toDoHTTPresponse.status !== 200){
    console.error('Error')
}
 let toDoresponse = await toDoHTTPresponse.json()
    console.log(toDoresponse)

for(let i; i === numToDo; i++){
    let displayList = document.getElementById('toDoList')
    displayList.innerHTML += `<li>${toDoresponse[i].title}</li>
    `
}

}


let submitBtn = document.getElementById('btn_submit')
submitBtn.onclick = () => {
    document.getElementById('toDoList').innerHTML = ''
    displayToDo(numToDo)
}




