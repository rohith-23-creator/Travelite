const data =[
    {
        feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod temporibus consequatur placeat vitae, assumenda dolorum provident debitis quis laudantium aspernatur",
        image :  "https://randomuser.me/api/portraits/men/96.jpg",        
    },
    {
        feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod temporibus consequatur placeat vitae, assumenda dolorum provident debitis quis laudantium aspernatur ",
        image :  "https://randomuser.me/api/portraits/women/88.jpg",
    },
    {
        feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod temporibus consequatur placeat vitae, assumenda dolorum provident debitis quis laudantium gsugudsy.",
        image :  "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
        feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod temporibus consequatur placeat vitae, assumenda dolorum provident debitis quis laudantium aspernatur",
        image :  "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
        name : "Steve Wick",
        feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod temporibus consequatur placeat vitae, assumenda dolorum provident debitis quis laudantium aspernatur",
        image :  "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
        feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod temporibus consequatur placeat vitae, assumenda dolorum provident debitis quis laudantium aspernatur.",
        image :  "https://randomuser.me/api/portraits/women/98.jpg",
    }
];


function profileIterator(profiles){
    let nextIndex = 0 ;  
    return {
        next : function(){
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done : false}:
            {done : true}
        }
    }
} 

const profiles = profileIterator(data);

//Next event
document.getElementById("next").addEventListener("click" , nextProfile);

nextProfile();

function nextProfile(){
    const currentProfile = profiles.next().value;
  
    if(currentProfile !== undefined){
        document.getElementById("profileDisplay").innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">${currentProfile.feedback}</li>
        </ul>
        `
        document.getElementById("imageDisplay").innerHTML = `
        <img src="${currentProfile.image}">
        `
    }else{
        window.location.reload();
    }
   
}

document.getElementById("prev").addEventListener("click" , prevProfile);


function prevProfile(){
    const currentProfile = profiles.next().value;
  
    if(currentProfile !== undefined){
        document.getElementById("profileDisplay").innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">${currentProfile.feedback}</li>
        </ul>
        `
        document.getElementById("imageDisplay").innerHTML = `
        <img src="${currentProfile.image}">
        `
    }else{
        window.location.reload();
    }
   
}

document.getElementById("profileDisplay").style.transition="all 0.5s"