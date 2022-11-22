// Desktop options
const options = document.querySelector('.barra-tareas-options');

const artOpt = document.getElementById('art-opt');
const dbOpt = document.getElementById('db-opt');

// items
const artItem = document.querySelector('#art-item');
const dbItem = document.querySelector('#db-item');

// forms
const formArt = document.querySelector("#myform");
const formDb = document.querySelector("#myData");


// nav
const windowsButton = document.querySelector('#windows-logo');
const windowsIcon = document.querySelector('#windows-icon');

// otros

artItem.style.display = "flex";
formDb.style.display = "none";

// Desktop Button
windowsButton.addEventListener('click', () =>{
    options.classList.toggle('active');
})

// Desktop options
artOpt.addEventListener('click', () => {
    formArt.style.display = 'flex';
    artItem.style.display = 'flex';
    options.classList.remove('active');
})

dbOpt.addEventListener('click', () => {
    formDb.style.display = 'flex';
    dbItem.style.display = 'flex';
    options.classList.remove('active');
});



// Desktop Items
artItem.addEventListener('click', () => {
    formArt.style.display = 'flex';
})
dbItem.addEventListener('click', () => {
    formDb.style.display = 'flex';
})

// minimizing
const miniForm = document.querySelector('#minForm').addEventListener('click', () => {
    formArt.style.display = 'none';
    artItem.style.display = "flex";
})
const miniDb = document.querySelector('#minDb').addEventListener('click', () => {
    formDb.style.display = 'none';
    dbItem.style.display = "flex";
})

// Full Screen
const fullScreenDb = document.querySelector('#fsDb').addEventListener('click', () => {
    if (formDb.style.width === '100%'){
        formDb.style.width = "90%";
        formDb.style.height = "300px";
        formDb.style.top = "10%";
        formDb.style.left = "5%";
    }else{
        formDb.style.top = "0";
        formDb.style.left = "0";
        formDb.style.width = "100%";
        formDb.style.height = "calc(100vh - 35px)";
    }
})

// Closing
const closeForm = document.querySelector('#clForm').addEventListener('click', () => {
    formArt.style.display = 'none';
    artItem.style.display = 'none';
})

const closeDb = document.querySelector('#clDb').addEventListener('click', () => {
    formDb.style.display = 'none';
    dbItem.style.display = 'none';
})

// date time
const desktopDate = document.getElementById('date');
const desktopHour = document.getElementById('hour');

function fechaA (){
    let date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return year + "-" + month + "-" + day;
}

function today (){
    let date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return day + "/" + month + "/" + year;
}

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var session = "a.m.";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "p.m.";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    let time = h + ":" + m + " " + session;

    desktopHour.textContent = time;
    
    setTimeout(showTime, 1000);
    
}

const fechaAlta = document.querySelector('.fechaA');
fechaAlta.value = fechaA();


showTime();
desktopDate.textContent = today();
