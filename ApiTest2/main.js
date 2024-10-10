const quotes = document.getElementById('quotes'); 

fetch("http://localhost:4022/api/users",{
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    // quotes.innerText = data.results[0].content;
})


axios.get()