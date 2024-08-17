document.getElementById('addtskbtn').addEventListener('click', function(){ 
    let taskinput = document.getElementById('taskinput').value;
    if(taskinput !== ""){ 
        addTask(taskinput)
        document.getElementById('taskinput').value = "";
    }
});
function addTask(taskText){ 
    let taskdiv = document.createElement('div')
    taskdiv.className = 'task'
    taskdiv.innerHTML = taskText;

    let donebtn = document.createElement('button')
  donebtn.innerHTML = 'Done'
  donebtn.addEventListener('click' , function(){ 
    taskdiv.classList.add('done')
    taskdiv.classList.remove('not-done')
  });

  let notdonebtn = document.createElement('button')
  notdonebtn.innerHTML = 'Not Done'
  notdonebtn.addEventListener('click', function(){ 
    taskdiv.classList.add('not-done')
    taskdiv.classList.remove('done')
    movetasktotomrrow(taskdiv);
  });
  taskdiv.appendChild(donebtn);
  taskdiv.appendChild(notdonebtn);
  document.getElementById('todaytask').appendChild(taskdiv);


function movetasktotomrrow(taskdiv){
document.getElementById('todaytask').removeChild(taskdiv);
     document.getElementById('tomrrowtsk').appendChild(taskdiv)

}

}