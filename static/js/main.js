
const flavours = [

    {"name":"plain",
    "bg_colour":"#e5d6cc",
    "text_colour":"#171717",
    "link_color":"#878f8f"},

    {"name":"mint",
    "bg_colour":"#e6f7ff",
    "text_colour":"#3b3350",
    "link_color":"#f7e8a9"},
    

    {"name":"strawberry",
    "bg_colour":"#ffcde6",
    "text_colour":"#422549",
    "link_color":"#f7e8c8"},

    {"name":"banana",
    "bg_colour":"#fffeb8",
    "text_colour":"#493351",
    "link_color":"#f7f8d0"},


    {"name":"peanut",
    "bg_colour":"#fddebc",
    "text_colour":"#411e2c",
    "link_color":"#f7e8a9"},


    {"name":"grape",
    "bg_colour":"#e7d4f6",
    "text_colour":"#2c0d2c",
    "link_color":"#878f8f"},

    {"name":"melon",
    "bg_colour":"#dff5de",
    "text_colour":"#0d142c",
    "link_color":"#878f8f"},
]

if (!localStorage.getItem("flavour")){
    populate_storage()
    render_flavor(0)
}else{
    render_flavor(localStorage.getItem("flavour"))
}

function populate_storage(){
    localStorage.setItem("flavour",0)
}



function change_flavor(){
    var current_flavor = localStorage.getItem("flavour")
    current_flavor++
    if (current_flavor == flavours.length)
    {current_flavor = 0}
    render_flavor(current_flavor)
}

function render_flavor(current_flavor){
    console.log('changing to',flavours[current_flavor])
    const body = document.body
    const siteFlavour = document.querySelector('.site-flavor > a')

    const anchors = document.querySelector('a')
    const anchorHovers = document.querySelector('a:hover')
    anchors.style.color = flavours[current_flavor].text_colour

    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
           
            links[i].style.color = flavours[current_flavor].text_colour;  
            links[i].addEventListener('mouseover',function(){
                this.style.color = flavours[current_flavor].link_color
            });
            links[i].addEventListener('mouseout',function(){
                this.style.color = flavours[current_flavor].text_colour
            });

            
    }  

    var sheet = window.document.styleSheets[0];
    sheet.insertRule('a:hover { color: ${flavours[current_flavor].link_color}; }', sheet.cssRules.length);
        
    siteFlavour.textContent = flavours[current_flavor].name

    body.style.backgroundColor = flavours[current_flavor].bg_colour
    body.style.color = flavours[current_flavor].text_colour

    localStorage.setItem("flavour",current_flavor)
}