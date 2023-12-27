// Random Quote generator API
// https://api.quotable.io/random

//Twitter share link 
// https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview

const newQuote=document.querySelector('.quote')
newQuote.addEventListener('click',getQuote)



async function getQuote(){
    const response=await fetch('https://api.quotable.io/random')
    var data=await response.json();
    // console.log(data.results[0].content)
    // console.log(data.content)
    // console.log(data.author)
    let blockQuote=document.querySelector('blockquote')
    blockQuote.innerHTML=data.content

    let author=document.querySelector('.card span')
    author.innerHTML=data.author
}

function tweet(quote,author){
    // console.log(quote)
    window.open("https://twitter.com/intent/tweet?text="+quote+"----by"+" "+author,"Tweet Window","width=600,height=400")
}

let tweetBtn=document.querySelector('.tweet')
tweetBtn.addEventListener('click',()=>{
    blockQuote=document.querySelector('blockquote')
    author=document.querySelector('.card span')
    tweet(blockQuote.innerHTML,author.innerHTML)
})
