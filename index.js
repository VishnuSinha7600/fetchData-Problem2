
document.getElementById("fetchUsers").addEventListener('click' , fetchData)


async function fetchData (){

     const reqresAPI = 'https://reqres.in/api/users?page=2'
     console.log(reqresAPI)
    try{
        let responce = await fetch(reqresAPI)
        let data = await responce.json();
         ShowData(data.data)
        console.log(data.data)
    }catch(error){
        console.log('Something is wrong..' ,error)
    }
}

  const  ShowData = (URL)=>{

const fetchUsers = document.getElementById("fetchUsers")

fetchUsers.innerHTML = ''


    console.log(URL)
    // let array = await fetchData(URL)

    URL.forEach((element) => {

            let card = document.createElement("div");
           
            let name = document.createElement("p")
            name.innerHTML = `<b>First_name : </b>${element.first_name}`

            let email = document.createElement("p")
            email.innerHTML = `<b>Email id : </b> ${element.email}`


            let img = document.createElement("img")
            img.src = element.avatar;



            card.append(img , name , email)
            usersCard.append(card)
            

    });

  }
//   fetchData(reqresAPI)
  

//   document.getElementById("container").addEventListener('click' , fetchData(reqresAPI))



// fetchData(reqresAPI)

