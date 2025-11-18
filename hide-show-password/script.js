let eyeicon = document.getElementById("eyeicon"); 
let password = document.getElementById("password"); 

eyeicon.onclick = function() {
    if (password.type == "password") {
        password.type = "text"; 
        eyeicon.src = "https://openclipart.org/image/800px/188640";
    } else {
        password.type = "password"; 
        eyeicon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWouVlx0IdQoXAztTXJEUFyDgsw9Ikk7sgg&s"; 
    }
}