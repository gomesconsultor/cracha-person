//const LinksSocialMedia = { github: "gomesconsultor",
//}

const url = "https://api.github.com/users/gomesconsultor";

function getGitHubProfileInfos() {

 fetch(url)
 .then(response => response.json())
 .then(data => {
   // userName.textContent = data.name;
    userBio.textContent = data.bio;
  //  userLink.href =  data.html_url
    userImage.src = data.avatar_url  
  });  
}



const getInfo = () => {
  fetch(url)
 .then(response => response.json())
 .then(data => {
      // userName.textContent = data.name;
    userBio.textContent = data.bio;
  //  userLink.href =  data.html_url
    userImage.src = data.avatar_url
 });

}

getInfo();
//getGitHubProfileInfos();
