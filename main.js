
document.addEventListener("DOMContentLoaded",()=>{
    const textInputUser = document.getElementById('textInput');
    const addTaskBtn = document.querySelector('.btn');
    const taskList = document.getElementById('taskList');

    // add e function 
    function addTask(){
        const taskUser = textInputUser.value.trim();
        // if input != ""
        if(taskUser != ""){
            const list = document.createElement('li');
            list.textContent = taskUser;

            const btnEdit = document.createElement('button')
            btnEdit.textContent = "edit"
            btnEdit.className = 'editBtn';
            btnEdit.addEventListener('click',function(){
                let inputPrompt = prompt('input the text!')
                list.textContent = inputPrompt;

                const btnRemo = document.createElement('button');
            
                btnRemo.textContent = 'delete';
                btnRemo.className = 'deleteBtn';
                btnRemo.addEventListener('click',function(){
                taskList.removeChild(list);
                });

                list.appendChild(btnEdit);
                list.appendChild(btnRemo);
                taskList.appendChild(list);
                taskList.value = '';
            })

            const btnRemo = document.createElement('button');
            
            btnRemo.textContent = 'delete';
            btnRemo.className = 'deleteBtn';
            btnRemo.addEventListener('click',function(){
            taskList.removeChild(list);
            });

            list.appendChild(btnEdit);
            list.appendChild(btnRemo);
            taskList.appendChild(list);
            taskList.value = '';
        }
    }

    // add task when user clicked the butoon
    addTaskBtn.addEventListener('click',addTask);

    textInputUser.addEventListener('keypress',function(event){
        if(event.key === 'enter'){
            addTask();
        }
    })
})

const imageBtn = document.getElementById('image')
imageBtn.addEventListener('click',function(){
    const color = [
        '43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%',
        '45deg, #00DBDE 0%, #FC00FF 100%',
        '160deg, #0093E9 0%, #80D0C7 100%',
        '62deg, #8EC5FC 0%, #E0C3FC 100%',
        '45deg, #85FFBD 0%, #FFFB7D 100%',
        '0deg, #FFDEE9 0%, #B5FFFC 100%',
        '0deg, #08AEEA 0%, #2AF598 100%',
        '19deg, #21D4FD 0%, #B721FF 100%',
        '19deg, #3EECAC 0%, #EE74E1 100%',
        '147deg, #FFE53B 0%, #FF2525 74%',
        '45deg, #FBDA61 0%, #FF5ACD 100%',
        '132deg, #F4D03F 0%, #16A085 100%',
        '180deg, #A9C9FF 0%, #FFBBEC 100%',
        '225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%',
    ];
    const randomColors = color[Math.floor(Math.random() * color.length)]
    document.body.style.background = `linear-gradient(${randomColors})`
})





