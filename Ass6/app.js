const inp=document.querySelector('#inp');
const btn=document.querySelector('#btn');
const list=document.querySelector('#list');

//  document.addEventListener('DOMContentLoaded',gettodos);
btn.addEventListener('click',todos);
// list.addEventListener('click',deleteCheck);


function todos(e){
    e.preventDefault();
    const tododiv=document.createElement('div');
    tododiv.classList.add('todo');

    const li=document.createElement('li');
    li.classList.add('todo-item');
    const todoText =inp.value;
    li.innerText= todoText;
    tododiv.appendChild(li);

    // savelocalstorage(inp.value);

    const todobtn=document.createElement('button');
    todobtn.classList.add('todo-btn');
    todobtn.innerHTML='<i class="fas fa-trash"></i>';
    tododiv.appendChild(todobtn);
    
    list.appendChild(tododiv);
    inp.value="";

    todobtn.addEventListener('click',(e)=>{
        
        // removelocalstorage(tododiv);
        tododiv.remove();
        
    })

}

// function deleteCheck(e){
//     const item = e.target;
//     if(item.classList[0]==='todo-btn'){
//         const it= item.parentElement;
//         it.classList.add("fall");
//         removelocalstorage(it);
//         // console.log(it);
//         it.remove();
        
//     }

// }


// function savelocalstorage(todo){

//     let todos;
//     if(localStorage.getItem('todos')===null){
//         todos=[];
//     }
//     else{
//         todos=JSON.parse(localStorage.getItem('todos'));
//     }


//     todos.push(todo);
//     localStorage.setItem('todos',JSON.stringify(todos));
// }

// function gettodos(){
    
//     let todos;
//     if(localStorage.getItem('todos')===null){
//         todos=[];
//     }
//     else{
//         todos=JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.forEach(todo => {
//         const tododiv=document.createElement('div');
//         tododiv.classList.add('todo');

//         const li=document.createElement('li');
//         li.classList.add('todo-item');
//         li.innerText= todo;
//         tododiv.appendChild(li);

//         const todobtn=document.createElement('button');
//         todobtn.classList.add('todo-btn');
//         todobtn.innerHTML='<i class="fas fa-trash"></i>';
//         tododiv.appendChild(todobtn);
        
//         list.appendChild(tododiv);
        
//     });

// }

// function removelocalstorage(todo){
    
//     let todos;
//     if(localStorage.getItem('todos')===null){
//         todos=[];
//     }

//     else{
//         todos=JSON.parse(localStorage.getItem('todos'));
//     }
    
//     const todoindex=todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoindex),1);
//     localStorage.setItem('todos',JSON.stringify(todos));    
    
// }

