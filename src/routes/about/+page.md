<script>
const hobbies = ["remaking this website","still modding Nintendo stuff","learning another VScode Vim shortcut","breaking my linux installation","dreaming about being cool enough to use Raylib","finishing my drawabox homework", "learning about the Godot engine","playing the piano","making jazz playlists","thinking about turn-based RPGs","making up new serves in ping pong","mashing in Guilty Gear","reading the new One Piece chapter","emulating retro games","beating my cybergrind high-score","wishing they'd port Final Fantasy Tactics","trying to put on 5 lbs of muscle","designing Mercury Man lore"]

let order = []
let current_hobby = ''
function shuffle_order(){
    while (order.length < hobbies.length){
        let rng = Math.floor(Math.random() * hobbies.length)
        if (!order.includes(rng)){
            order.push(rng)}
    }
    next_hobby()
}

function next_hobby(){
    current_hobby = hobbies[order.pop()]
    console.log(order.length)
    if (order.length == 0){
        shuffle_order()
    }
}

shuffle_order()

</script>

<div class = "home-content flex flex-column ">

# About Me

    <img class="mw6 w-40 h-auto" src="mm.png" alt="">
    <a class="source" href="https://www.instagram.com/apple_toast/?hl=en" target="_blank">mercury man commission by @apple_toast</a>

    I'm Jayden, a computer science student at York University.
    I'm a certified digital thingamabob maker (software developer to some people)

    I've been in love with programming and creating with computers since modifying old Nintendo games and consoles with fan-made hacking tools (don't look for my old starmen.net account, my Earthbound hacks were very bad). 
 
    I got my start proper with using Gamemaker 8 in grade 10 to make simple games, and that's when my interest in programming really began.
  
    Since then I've founded York's game development club ([gdyu.club](https://www.gdyu.club/)), learned full-stack development, got good at OOP, and have experience with many different tools and languages (see my [resume!!](/resume)).

   
    I'm a fan of programming in many forms, and am always looking for opportunities to use code to make interesting, expressive, artistic, and cool stuff.


    When I'm not looking for work or running my club, you can find me <a class="hobby-anchor" href="javascript:;" on:click={next_hobby}>{current_hobby}.</a>
</div>