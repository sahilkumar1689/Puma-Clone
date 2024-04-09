let dropDownBtns = document.querySelectorAll(".dropDownBtns");
let footerContainer = document.querySelectorAll(".footerContainer");
let hamburgerMenu = document.querySelector(".hamburgerMenu");
let flag=0;
onload()

function onload(){
    showHideFooterContent();
    showHideHiddenNav();
}

function showHideFooterContent(){
   for(let it of dropDownBtns){
        it.addEventListener("click",(details)=>{
            if(details.target.classList.contains('fa-chevron-up')){
                let contentClass = it.childNodes[1].id;
                it.childNodes[1].style.visibility="hidden";
                it.childNodes[3].style.visibility="visible";

                for(let i=0;i<footerContainer.length;i++){
                    if(i==0){
                        if(footerContainer[i].childNodes[3].style.display=="grid"){
                            footerContainer[i].childNodes[3].style.display="none";
                        }
                    }
                    else{
                        if(footerContainer[i].childNodes[3].style.display=="block"){
                            footerContainer[i].childNodes[3].style.display="none";
                        }
                    }
                }

                if(contentClass == "firstFooterContent")
                    document.querySelector(`.${contentClass}`).style.display="grid";
                else document.querySelector(`.${contentClass}`).style.display="block";
            }
            else if(details.target.classList.contains('fa-chevron-down')){
                let contentClass = it.childNodes[3].id;
                it.childNodes[1].style.visibility="visible";
                it.childNodes[3].style.visibility="hidden";

                document.querySelector(`.${contentClass}`).style.display="none";
            }
        })
   }
}

function showHideHiddenNav(){
    hamburgerMenu.addEventListener("click",()=>{
        if(flag==0){
            document.querySelector('.hiddenNav').style.display="block";
            flag=1;
        }
        else{
            document.querySelector('.hiddenNav').style.display="none";
            flag=0;
        }
    })
}

