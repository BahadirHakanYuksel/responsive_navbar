const nav_titles = document.querySelectorAll('.nav_title');
const res_bar = document.getElementById('res_bar');
const menu = document.getElementById('menu');

nav_titles.forEach(title => {
    title.addEventListener('click',() => {

        //defining the active class property for the clicked title
        nav_titles.forEach(title => title.classList.remove("active"))
        title.classList.add("active")

        //navbar closes after menu selection
        close_menu()

        //example of text change for page transitions
        document.getElementById('main').textContent = title.textContent;
    })
})

//turn responsive menu on and off
res_bar.addEventListener('click',() => {
    //open
    if(menu.style.visibility != 'visible'){
        menu.style.visibility = 'visible';
        menu.style.height = 'calc(100vh - 60px)';
        menu.style.opacity = '1';
    }
    //close
    else close_menu()
})


function close_menu(){
    menu.style.visibility = '';
    menu.style.height = '';
    menu.style.opacity = '';
}