const Quotes = ["“We cannot solve problems with the kind of thinking we employed when we came up with them.”",
"“Learn as if you will live forever, live like you will die tomorrow.”",
"“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”",
"“When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.”"]
;
 
function Quotegen(){
    let randomIndex = Math.floor(Math.random() * Quotes.length);
    document.getElementById("quote-space").innerText = Quotes[randomIndex];
}

function clearQuote(){
    document.getElementById("quote-space").innerText = "New Quotes will be displayed here";
}