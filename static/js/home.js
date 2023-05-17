//plain
//mint
//strawberry
//banana
//peanut
//grape
//melon 

//https://31.media.tumblr.com/tumblr_m8rx8yABPY1qcguwpo1_500.gif

let gif_number = 0
const home_gifs = ["https://media.tenor.com/sK6ZPrUy2hMAAAAC/izu-shaboten-animal-park-capybara.gif","https://media.tenor.com/O45wy7ceQVEAAAAd/daigo-parry-fight.gif","https://media.tenor.com/qHGyE8XvwzUAAAAC/mother3.gif","https://media.tenor.com/U5ruYqXgPWIAAAAC/luffy-baron-omatsuri.gif","https://media.tenor.com/x4kWAZADh_0AAAAS/when-the-money.gif","https://media.tenor.com/Kba7MbKvzFkAAAAd/paper-mario-super-mario-galaxy.gif"]
const home_gif_quotes = ["capybara!!",'"Lets go Justin"',"Check out the site's color themes","I love one piece.","WHEN THE (me after getting a job)","Me at the gym"]

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