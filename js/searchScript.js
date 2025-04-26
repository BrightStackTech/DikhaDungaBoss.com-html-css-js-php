// getting all required elements
const searchWrapper = document.querySelector(".searchwrapper");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".iconn");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        if(userData=="Mumbai"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Mumbaisubproperties/Mumsubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(userData=="Thane"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Thanesubproperties/Thanesubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(userData=="Navi Mumbai"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/NaviMumbaisubproperties/NaviMumsubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(userData=="Delhi"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Delhisubproperties/Delhisubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(userData=="New Delhi"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/NewDelhisubproperties/NewDelhisubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(userData=="Gurgoan"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Gurgoansubproperties/Gurgoansubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(userData=="Pune"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Punesubproperties/Punesubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(userData=="Banglore"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Bangloresubproperties/Bansubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(userData=="Ahemdabad"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Ahemdabadsubproperties/ADBsubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else{
            icon.onclick = ()=>{
                // // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../errorpage.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }

    
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    // icon.onclick = ()=>{
    //     webLink = `https://www.google.com/search?q=${selectData}`;
    //     linkTag.setAttribute("href", webLink);
    //     linkTag.click();
    // }

    if(inputBox.value){
        if(inputBox.value=="Mumbai"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Mumbaisubproperties/Mumsubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(inputBox.value=="Thane"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Thanesubproperties/Thanesubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(inputBox.value=="Navi Mumbai"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/NaviMumbaisubproperties/NaviMumsubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(inputBox.value=="Delhi"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Delhisubproperties/Delhisubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(inputBox.value=="New Delhi"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/NewDelhisubproperties/NewDelhisubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(inputBox.value=="Gurgoan"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Gurgoansubproperties/Gurgoansubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(inputBox.value=="Pune"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Punesubproperties/Punesubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(inputBox.value=="Banglore"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Bangloresubproperties/Bansubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else if(inputBox.value=="Ahemdabad"){
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../../html/Ahemdabadsubproperties/ADBsubproperties1.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
        else{
            icon.onclick = ()=>{
                // webLink = `https://www.google.com/search?q=${userData}`;
                webLink = `../errorpage.html`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            }
        }
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
