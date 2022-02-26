let token=localStorage.getItem("token")
let username=localStorage.getItem("username")
let right_div=document.querySelector(".right_div")
let name=document.querySelector("#name")
let u_email=document.querySelector("#u_email")
let u_user=document.querySelector("#u_user")
let number=document.querySelector("#number")
let desc=document.querySelector("#desc")


 
loadData()

async function loadData()
{

    try {  
        const res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
        headers: { "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
       },
    });

    let response=await res.json();
    console.log(response);
    if(response.error==true)
    {
        alert(response.message)
    }
    else{
//         description: "oo"
    // email: "oo"
    // mobile: "77"
    // name: "oo"
    // token: "e47ca7a09cf6781e29634502345930a7"
    // username: "oo"
    name.innerText="Name:"+response.name
    u_email.innerText="Email:"+response.email
    u_user.innerText="User Name:"+response.username
    number.innerText="Mobile Number:"+response.mobile
    desc.innerText="hobbie:"+response.description


    }
        
    } catch (error) {
        alert(error) 
    }
  
//console.log(await res.json());





}
