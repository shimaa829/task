
const addBtn = document.getElementById('add-task')


function getTodos()
{
    var todos = new Array;

    //fetches the content of the todo key of the sessionStorage using the getItem method
    var todos_str = sessionStorage.getItem('todo');
    if(todos_str != null)
    {
        // convert the JSON string back to JavaScript data
        todos =JSON.parse(todos_str);
    }

    return todos;
}

function add()
{
    var task = document.getElementById('new-task').value;
     
    var todos = getTodos();
   
    // append the new task to the Array
    todos.push(task);
    
    //stringify the Array using the JSON.stringify
    //save the new list of TODO items in the sessionStorage of webPage
    sessionStorage.setItem('todo' , JSON.stringify(todos));

    //function that will update the list of TODOs displayed on the web page
    show();
   
    //to avoid any further actions generated by the 'click' event.
    return false;

}

function removeTask(){
  
    var id = this.getAttribute('id');

    var todos = getTodos();

    todos.splice(id , 1);

    sessionStorage.setItem('todo' , JSON.stringify(todos));

    show();

    return false;

}

function show(){
    
    var todos = getTodos();

    var html = '<ul>';
    for(var i = 0 ; i < todos.length ; i++)
    {
        html += '<li>' + todos[i] + '<button class="remove" id = "' + i + '"> x </button></li><br>'
  
    };

    html += '</ul>';

    document.getElementById('tdl-list').innerHTML = html;

    var removedBtns = document.getElementsByClassName('remove');

    for(var i = 0 ; i < removedBtns.length ; i++)
    {
        removedBtns[i].addEventListener('click' , removeTask);
    }
}


addBtn.addEventListener('click' , add);
show();