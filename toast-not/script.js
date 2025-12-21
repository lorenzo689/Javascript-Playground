let toastBox = document.getElementById("toastBox"); 
let successMsg = '<img src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png"></img>Successfully submitted!'; 
let errorMsg = '<img src="https://cdn-icons-png.flaticon.com/512/5720/5720474.png"></img>Please fix the error!'; 
let invalidMsg = '<img src="https://cdn-icons-png.flaticon.com/512/4856/4856460.png"></img>Invalid Input, check again!'; 

function showToast(msg) {
    let toast = document.createElement("div"); 
    toast.classList.add("toast"); 
    toast.innerHTML = msg; 
    toastBox.appendChild(toast); 

    if(msg.includes(errorMsg)) {
        toast.classList.add('error'); 
    }; 

    if(msg.includes(invalidMsg)) {
        toast.classList.add('invalid'); 
    };

    setTimeout(()=>{
        toast.remove(); 
    }, 6000); 
}