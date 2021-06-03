
function submitData(userName, userEmail){
    let url = 'http://localhost:3000/users'
    let users = {
        name: userName,
        email: userEmail
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(users)
    }
    return fetch(url, configObj)
    .then(function(response){
        return response.json()
    })
    .then (function(object){
        console.log(object)
        document.body.innerHTML = object.id
    })
    .catch(function(error){
        alert("Uh oh, stay calm")
        document.body.innerHTML = error.message
    })
}