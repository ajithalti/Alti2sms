let content=document.getElementById ("content");
let header=document.getElementById ("header");
let mstatus=0;
let chats=0;
let groups=0;
let log=0;
let w=window.innerWidth;
let h=window.innerHeight;
let bgc="white",c="black";
window.onload=function()
{
    let bd=document.body;
    bd.style.height=h;
    bd.style.width=w;
    let hp=document.getElementById ("homepage");
    let welcome=document.getElementById ("welcome");
    hp.style.display="none";
    
    let pval=0,busy=0;
    let i=setInterval(progress,0);
    function progress()
    {
        let prog=document.getElementById ("prog");
        prog.style.backgroundColor="lightgreen";
        busy++;
        if(busy>50&&busy<100||(busy>125&&busy<200));
        else
        pval++;
        if(pval==101)
        {
        clearInterval(i);
        prog.style.display="none";
        welcome.style.display ="none";
        hp.style.display="block";
        return;
        }
        prog.value=pval;
        
    }
	const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  console.log('Form submission cancelled.');
});
}
function hmenu()
{
    mstatus++;
    let menu=document.getElementById("menu");
    if(mstatus%2===0)
        menu.style.display="none";
    else
        menu.style.display="block";
    
}
let settingsstatus=0;
function settings()
{
    settingsstatus++;
    let popup=document.getElementById ("settings");
    if(settingsstatus%2===0)
    {
        popup.style.display ="block";
    }
    else
        popup .style .display ="none";
}
let themestatus=0;
function theme()
{
    let content=document.getElementById("content");
    let bg=document.body;
    let buttons=document.querySelectorAll("button");
    let menu=document.getElementById("menu");
    let inputs=document.querySelectorAll("input");
    let log=document.getElementById ("log");
    if(buttons===undefined)
    alert("noo");
    themestatus++;
    if(themestatus%2===0)
        {
            bgc="black";
            c="white";
            document.getElementById ("theme").innerHTML="Light theme";
        }
        
    else
    {
        bgc="white";
        c="black";
            log.style.backgroundColor ="white";
        document.getElementById ("theme").innerHTML="Dark theme";
    }
    menu.style.backgroundColor=bgc;
            menu.style.color=c;
            content.style.backgroundColor=
            bgc;
            content.style.color=c;
            for(i=0;i<buttons.length;i++)
            {
            buttons[i].style.backgroundColor=bgc;
            buttons[i].style.color=c;
            }
            for(i=0;i<inputs.length;i++)
            {
            inputs[i].style.backgroundColor=bgc;
            inputs[i].style.color=c;
            }
            log.style.backgroundColor =bgc;
            bg.style.backgroundColor=bgc;
            bg.style.color=c;

    
    
}
function newchat()
{
    let chat=document.getElementById ("newchat");
    chat.style.display="block";
}
function newgroup()
{
    let group=document.getElementById ("newgroup");
    group.style.display="block";
}
function contentf()
{
    
}
function logging()
{
    let logger=document.getElementById ("log");
    if(log===0)
    {
        let logger=document.getElementById ("log");
        logger.style.display ="block";
    }
    else 
    {
        
    }
}
function act(input)     
{      
	alert(input);
	var XHR= new XMLHttpRequest();       
	if(XHR)
		alert('xhr ok');
	XHR.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     alert("res");
    }
  };
	let data={};                                             let form=document.getElementById(input); 
	let i=0;
	for(i=0;i<form.length-1;i++)                              {
                data[form.elements[i].name]=form.elements[i].value;
        }
	alert(JSON.stringify(data));
	XHR.setRequestHeader("Content-Type", "application/json");
	XHR.send(JSON.stringify(data));
}
function signin()
{
    let signiner=document.getElementById ("signin");
    let sinb=document.getElementById ("sinb");
    let supb=document.getElementById ("supb");
    
    let signuper=document.getElementById ("signup");
    sinb.style.backgroundColor ="yellow";
    supb.style.backgroundColor =bgc;
    signuper.style.display="none";
    signiner.style.display="block";
    
}
function signup()
{
    let signiner=document.getElementById ("signin");
    
    let signuper=document.getElementById ("signup");
    let sinb=document.getElementById ("sinb");
    let supb=document.getElementById ("supb");
    sinb.style.backgroundColor =bgc;
    supb.style.backgroundColor ="yellow";
    signuper.style.display="block";
    signiner.style.display="none";
    
}
function closelog()
{
     let logger=document.getElementById ("log");
     logger.style.display="none";
}
