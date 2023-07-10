function addNewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Enter here'); 

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);

    
}

function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Enter here'); 

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("eqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

//generating Cv
function generateCV(){
    //console.log('generating cv')
    let nameField=document.getElementById('name').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

    //direct
    document.getElementById('nameT2').innerHTML=nameField;
    document.getElementById('contactT').innerHTML=document.getElementById('contact').value;
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
    document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;
    document.getElementById('linkedT').innerHTML=document.getElementById('linkedinField').value;
    
    document.getElementById('objectiveT').innerHTML=document.getElementById('objField').value;
    let wes =document.getElementsByClassName('weField');
    let str=" ";  
    for(let e of wes){
        str=str+`<li>${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML=str;
    let aqs=document.getElementsByClassName('eqField');
    let s=" ";
    for(let e of aqs){
        s=s+`<li>${e.value}</li>`;
    }
    document.getElementById('aqT').innerHTML=s;

    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'
    
}
//print cv
function printCV(){
    window.print()
}