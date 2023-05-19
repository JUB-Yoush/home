
const flavors = [

    {"name":"plain",
    "bg_color":"#e5d6cc",
    "text_color":"#171717",
    "link_color":"#878f8f"},

    {"name":"mint",
    "bg_color":"#e6f7ff",
    "text_color":"#3b3350",
    "link_color":"#66b7b0"},
    

    {"name":"strawberry",
    "bg_color":"#ffcde6",
    "text_color":"#422549",
    "link_color":"#f179a0"},

    {"name":"banana",
    "bg_color":"#fffeb8",
    "text_color":"#493351",
    "link_color":"#e9c46a"},


    {"name":"peanut",
    "bg_color":"#fddebc",
    "text_color":"#411e2c",
    "link_color":"#a97766"},


    {"name":"grape",
    "bg_color":"#e7d4f6",
    "text_color":"#2c0d2c",
    "link_color":"#878f8f"},

    {"name":"melon",
    "bg_color":"#dff5de",
    "text_color":"#0d142c",
    "link_color":"#878f8f"},
]

if (!localStorage.getItem("flavor_index")){
    populate_storage()
    render_flavor(flavors[0])
}else{
    render_flavor(flavors[localStorage.getItem("flavor_index")])
}

function populate_storage(){
    localStorage.setItem("flavor_index",0)
}

function change_flavor(){
    let flavor_index = localStorage.getItem("flavor_index")
    flavor_index++
    if (flavor_index == flavors.length)
    {flavor_index = 0}
    let current_flavor = flavors[flavor_index]
    console.log(flavors[flavor_index])
    localStorage.setItem("flavor_index",flavor_index)
    render_flavor(current_flavor)
}

function render_flavor(current_flavor){
    console.log('changing to',current_flavor)
    console.log(current_flavor)
    const body = document.body
    const siteflavor = document.querySelector('.site-flavor > a')

    let links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {   links[i].style.color = current_flavor.text_color;  
        links[i].addEventListener('mouseover',function(){
            this.style.color = current_flavor.link_color
        });
        links[i].addEventListener('mouseout',function(){
            this.style.color = current_flavor.text_color
        });}   
    siteflavor.textContent = current_flavor.name

    body.style.backgroundColor = current_flavor.bg_color
    body.style.color = current_flavor.text_color
}