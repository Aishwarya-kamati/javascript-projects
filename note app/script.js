const notescontainer=document.querySelector(".notes-container");
const creatbtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

creatbtn.addEventListener("click",()=>{
    let p=document.createElement("p");
    let img=document.createElement("img");
    p.setAttribute("contenteditable","true");
    p.className="input-box";
    img.src="images/delete.png";
   notescontainer.appendChild(p).appendChild(img);

})
notescontainer.addEventListener("click",(e)=>{
 if(e.target.tagName ==="IMG"){
    e.target.parentElement.remove();
    setdata();
 }
 else if(e.target.tagName ==="P"){
    notes=document.querySelectorAll(".input-box");
    notes.forEach(nt=>{
        nt.onkeyup=function(){
            setdata();
        }
    })
 }
})
function setdata(){
    localStorage.setItem("notes",notescontainer);
}
function showdata(){
    notescontainer.innerHTML=localStorage.getItem("notes")
}
showdata();