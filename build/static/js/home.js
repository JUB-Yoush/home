//plain
//mint
//strawberry
//banana
//peanut
//grape
//melon 

//https://31.media.tumblr.com/tumblr_m8rx8yABPY1qcguwpo1_500.gif

const home_gifs = ["https://media.tenor.com/sK6ZPrUy2hMAAAAC/izu-shaboten-animal-park-capybara.gif","https://media.tenor.com/O45wy7ceQVEAAAAd/daigo-parry-fight.gif","https://media.tenor.com/qHGyE8XvwzUAAAAC/mother3.gif","https://media.tenor.com/U5ruYqXgPWIAAAAC/luffy-baron-omatsuri.gif"]
const home_gif_quotes = ["capybara",'"Lets go Justin!!"',"Check out the site's color themes","I love one piece."]
let gif_number = Math.floor(Math.random() * home_gifs.length)
console.log(gif_number)

render_gif()
function swap_gif(){
    gif_number++
    if (gif_number == home_gifs.length){
        gif_number = 0
    }
    render_gif()
}
function render_gif(){
    const homeGif = document.querySelector('.home-gif')
    const gifChanger = document.querySelector('.gif-changer')
    homeGif.src = home_gifs[gif_number]
    gifChanger.textContent = home_gif_quotes[gif_number]
}