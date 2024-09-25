const output = document.getElementById("output")
const loader = document.getElementById("loader")

const getUsers = async()=>{
    console.log("i  got here");
    output.innerHTML = "i am loading..."
    fetch('http://localhost:4022/api/users').then(res =>{

        return res.json()
    })
    .then(data=>{
        console.log(data);
        output.innerHTML = data.map(user=>{
            return `
            <div class="usercard">
            <p class="">${user.name}</p>
            <p class="">${user.email}</p>
            <button onclick="deleteUser('${user._id}')">delete</button>
            </div>
            `
        }).join("")


    })
    .catch(err=>{
        output.innerHTML = "i have an error"
    })
}
getUsers()


const createUser = async(event)=>{
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    console.log(name,email);
    loader.style.display = "block"
    fetch('http://localhost:4022/api/users', {
        method:"post",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({
            name,
            email
        })
    }).then(res =>{
        return res.json()
    })
    .then(data=> {
        console.log(data)
        loader.innerHTML = "user created successfully"
        event.target.reset()
        getUsers()
    })
    .catch(err=>{
        console.log("i  have an error:",err);
    })
    .finally(()=>{
        loader.style.display = "none"
    })
    }

    const deleteUser = async(id)=>{
        console.log("i am deleting user:",id);
        fetch(`http://localhost:4022/api/users/${id}`, {
            method:"delete"
        }).then(res =>{
            return res.json()
        })
        .then(data=> {
            console.log(data)
            loader.innerHTML = "user deleted successfully"
            getUsers()
        })
        .catch(err=>{
            console.log("i  have an error:",err);
        })
    }
