let name=document.getElementById("name")
let email=document.getElementById("email")
let password=document.getElementById("password")
let user_name=document.getElementById("user_name")
let mobile=document.getElementById("mobile")
let info=document.getElementById("info")
let login_btn=document.querySelector(".login_btn")

login_btn.addEventListener("click",registerData)

function registerData()
{
    if(name.value.length==0)
    {
        alert("please Enter Name")
    }
    else if(email.value.length==0)
    {
        alert("please Enter Email")
    }
    else if(password.value.length==0)
    {
        alert("please Enter Password")
    }
    else if(user_name.value.length==0)
    {
        alert("please Enter User Name")
    }
    else if(mobile.value.length==0)
    {
        alert("please Enter mobile")
    }
    else if(info.value.length==0)
    {
        alert("please Enter Info")
    }
    else{
        loadData(name.value,email.value,password.value,user_name.value,mobile.value,info.value)
    }  
}

async function loadData(name,email,password,username,mobile,info)
{

    let obj={
        "name": name,
        "email": email,
        "password": password,
        "username": username,
        "mobile": mobile,
        "description": info
}

console.log(obj);
    const res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
	method: "POST",
	body: JSON.stringify(obj),
	headers: { "Content-Type": "application/json" }
});

let response=await res.json();
console.log(response);
//response.error
 if(response.error==false)
 {
     alert(response.message)
     window.location="index.html"
 }
 else{
    alert(response.message) 
 }


}
