const quote = document.getElementById("quote"); 
const author = document.getElementById("author"); 
const api_url = "API_URL"

async function getQuote(url) {
    try {

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("API Error")
        }

        let data = await response.json(); 
        console.log(data); 
        quote.innerHTML = data.content; 
        author.innerHTML = data.author; 

    } catch (error) {
        quote.innerHTML = "could not load quote"
        author.innerHTML = ""
        console.error(error)
    }
}

getQuote(api_url); 

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=600, height=300"); 
}