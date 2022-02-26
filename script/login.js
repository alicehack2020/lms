let login_btn=document.querySelector(".login_btn")
let email=document.querySelector("#email")
let password=document.querySelector("#password")

login_btn.addEventListener("click",loginData)

function loginData()
{

    let e=email.value
    let p=password.value

    if(e.length==0)
    {
        alert("Please Enter User Name")
    }
    else if(p.length==0)
    {
        alert("Please Password")
    }
    else{
        loadData(e,p)
    }

}

async function loadData(e,p)
{

    try {
        let obj={
            "password": p,
            "username":e
        }
    
        const res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" }
    });

    let response=await res.json();
    console.log(response);
    if(response.error==true)
    {
        alert(response.message)
    }
    else{
        alert("Welcome!") 
        window.location="dash.html"
        localStorage.setItem("token",response.token)
        localStorage.setItem("username",e)
    }
    
        
    } catch (error) {
        alert(error) 
    }
  
//console.log(await res.json());





}
