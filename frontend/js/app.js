

const API_URL = "http://localhost:8000/api/users/"

// GET request
async function getUsers(){

    try{

        const response = await fetch(API_URL)

        const data = await response.json()

        document.getElementById("output").textContent =
            JSON.stringify(data, null, 2)

    }catch(error){

        console.error(error)

    }

}


// POST request
async function createUser(){

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    const user = {
        name: name,
        email: email
    }

    try{

        const response = await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(user)

        })

        const data = await response.json()

        document.getElementById("output").textContent =
            JSON.stringify(data,null,2)

    }catch(error){

        console.error(error)

    }

}