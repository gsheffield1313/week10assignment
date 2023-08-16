let id = 0;//sets the id to 0 so the rest of the cells will fill in under it//

document.getElementById('add').addEventListener('click', ()=>{//this is for the click event listenere telling the function what to do//
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;//this is 
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth()+ 1}-${createdDate.getDate()}`;//this is setting the app to get the year date and day and insert it into the cell// 
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;//this allows us to get the new start date the user inputs and display it in the input field//
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;//this allows us to get the new end date the user inputs and display it in the input field//
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));//appends child to the parent//
    document.getElementById('new-task').value = '';//this is setting the task the user inputs to a string to show up on the screen.//
});

function createDeleteButton(id){//this is to create the delete function for the todo app//
    let btn = document.createElement('button');//this defines the button to the element//
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {//this is the mouse event for the button that will delete the rows after it//
        console.log(`Deleting row with id: item-${id}`);//deletes row that button is assigned to//
        let elementToDelete= document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);//removes the child from the parent. //
    };
    return btn;
}
