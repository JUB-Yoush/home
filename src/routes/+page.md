<script>

  const home_gifs = ["https://media.tenor.com/sK6ZPrUy2hMAAAAC/izu-shaboten-animal-park-capybara.gif","https://media.tenor.com/O45wy7ceQVEAAAAd/daigo-parry-fight.gif","https://media.tenor.com/qHGyE8XvwzUAAAAC/mother3.gif","https://media.tenor.com/U5ruYqXgPWIAAAAC/luffy-baron-omatsuri.gif"]
const home_gif_quotes = ["capybara",'"Lets go Justin!!"',"Check out the site's color themes","I love one piece."]
let gif_number = Math.floor(Math.random() * home_gifs.length)


function swap_gif(){
    gif_number++
    if (gif_number == home_gifs.length){
        gif_number = 0
    }
}

</script>
<div class = "home-content flex flex-column ">


# Jaydenpb
<img class="home-gif mw6 w-50 h-auto" style="" src={home_gifs[gif_number]} alt="">

<a class="gif-changer" href="javascript:;" on:click={swap_gif}>{home_gif_quotes[gif_number]}</a>

Ayo

I'm Jayden, a computer science student at the Lassonde school of Engineering (a part of York University)


While you're here, feel free to learn more [about me](/about) about me, check out what I'm [up to](/projects) or what I'm [thinking about](/blog).


If you're a recruiter who's found this link though my linkedin or resume, then you should definitely consider [hiring](/resume) me, currently interning at Scotiabank, but looking for Summer 2024 positions.


Regardless, thanks for checking out my site, feel free to reach out!

Also, if you go to York and are interested in game development, [gdyu.club](https://www.gdyu.club/).

## HOT NEW FEATURE⁉ ️
Sign up for my new [mailing list](/mail) and I'll send you emails.
nvm it's a lil brokey rn (will fix when I make time for it)
</div>
