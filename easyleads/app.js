let myleads=[];

const inputel=document.getElementById("input-el");
const inputb=document.querySelector("#input-btn");
const savetab=document.querySelector("#save-tab-btn");
const deletebtn=document.querySelector("#delete-btn");
const listEl=document.querySelector(".list-el");

savetab.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myleads=JSON.parse(localStorage.getItem("myleads"));
        myleads.push(tabs[0].url);
        localStorage.setItem("myleads",JSON.stringify(myleads));
        renderlead(myleads);
    })
    
})

let leads=JSON.parse(localStorage.getItem("myleads"));
if(leads){
    renderlead(leads);
}
deletebtn.addEventListener("click",function(){
    localStorage.clear();
    myleads=[];
    renderlead(myleads);
})


inputb.addEventListener("click",()=>{
    if(JSON.parse(localStorage.getItem("myleads"))){
        myleads=JSON.parse(localStorage.getItem("myleads"));
    }
    myleads.push(inputel.value);
    inputel.value="";
    

    localStorage.setItem("myleads" , JSON.stringify(myleads));
    renderlead(myleads);
})

function renderlead(leads){
    let listitem="";
    
    for(let i=0;i<leads.length;i++){
        listitem+="<li> <a  href=" + leads[i]+">"+leads[i] +" </a> </li> ";
    }
    listEl.innerHTML=listitem;
    
}
