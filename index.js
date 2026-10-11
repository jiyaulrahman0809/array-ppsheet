// let arr1 = ["Apple","Mango","Banana","Guvava"]
let lang =["HTML","CSS","javascript"]
// lang.push("javascript");

// console.log(lang);
// lang.pop("javascript")
// console.log(lang);

// lang.shift();
// console.log(lang);
// lang.unshift("HTML")
// console.log(lang);

// lang.push("js","react")
// console.log(lang);

// lang.splice(1,0,"jiyaul")
// console.log(lang);
// lang.slice()

// lang.splice(2,1,"jiyaul")
// console.log(lang);
// lang.slice(0,2)
// console.log(lang);
// let languages = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
// let indx = languages.indexOf("JavaScript")
// console.log(indx);
// let users = [
//  { name: "Rahul", age: 20 },
//  { name: "Priya", age: 22 }
// ];
// let user = users.find(function(user) {
//  return user.name === "Rahul";
// });
// console.log(user);

let h2 = document.querySelector("h2")

h2.innerText = h2.innerText + "Apna Collage";

let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
        div.innerText = `New unique value ${idx++} `

}

// let div = document.querySelectorAll("div")
// div[0].innerText = "New1"
// div[1].innerText = "2"
// div[2].innerText = "New3"

let para = document.querySelector("p")


 para.remove();


let btn = document.createElement("button");
btn.textContent ="Click ME"
btn.style.backgroundColor="red";
btn.style.color="white";

let body = document.querySelector("body").prepend(btn)

let para = document.querySelector("p").classList.add("Newcontent")

let btn1 = document.querySelector("#btn1");
let currentMode = "Light"
btn1.addEventListener('click',(e) =>{
      if(currentMode ==="Light"){
        currentMode = "Dark"
        document.querySelector("body").style.backgroundColor ="black"
        console.log(currentMode);
      }else{
        currentMode = "Light"
         document.querySelector("body").style.backgroundColor ="white"
         console.log(currentMode);
      }
})