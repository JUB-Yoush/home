<link href='https://fonts.googleapis.com/css?family=Spline Sans Mono' rel='stylesheet'>
<script>
  import "../css/tachyons.css"
  import "../css/global.css";
  //FLAVOUR LOGIC
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

</script>
<body class="ma4 flex flex-column justify-center items-center">
    <div class="border">
    </div>
    
    <div class="mr-auto ml-auto flex">
        <div class="navbar">
            <div class="home-nav link"><a href="index">home</a></div>
            <div class="about-nav"><a href="about">about</a></div>
            <div class="resume-nav"><a href="resume">hire me 😳</a></div>
            <div class="projects-nav"><a href="projects">projects</a></div>
            <div class="blog-nav"><a href="posts">blog</a></div> 
            <div class="site-flavor"><a href="javascript:;" onclick="change_flavor()">plain</a></div>
        </div>
        <div>
            <slot/>
        </div>
    </div>
    <div class="border">
        <div>----------------------------</div>
    </div>
<div class="links">
    <a href="mailto:jayden.patrick.brooks@gmail.com"target="_blank">email</a>
    <a href="https://www.linkedin.com/in/jaydenpb/"target="_blank">linkedin</a>
    <a href="https://github.com/JUB-Yoush"target="_blank">github</a>
    <a href="https://yoush.itch.io/"target="_blank">itch.io</a>
</div>
</body>