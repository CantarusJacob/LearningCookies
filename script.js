const sayHello = () => {
    alert("Yo!");
}

const getDatePlusOffset = days =>{
    let d = new Date();
    d.setTime(d.getTime() + days*24*60*60*1000);
    return d.toUTCString();
}

const addCookie = () => {
    alert("Add cookies entered");
    const key = document.getElementById("key").value;
    const value = document.getElementById("value").value;
    document.cookie = `${key}=${value};expires=${getDatePlusOffset(1)};path=/`;
}

const getCookies = () => {
    alert("Get cookies entered");
    const cookies = document.cookie;
    const cookieContainer = document.getElementById("cookiesContainer");
    cookieContainer.innerHTML = cookies;
}

const getCookie = (key) =>{
    if(key == undefined){
        const key = document.getElementById("key").value;
    }
    console.log("Key: " + key);
    const cookiesArr = document.cookie.split(';');
    //possibly need to decode cookie, need to look into this more
    console.log(cookiesArr);
    for(var i = 0; i <cookiesArr.length; i++) {
        var cookie = cookiesArr[i];
        //while loop gets rid of leading spcaes
        while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1);
          console.log("     _" + cookie+"_")
        }
        if (cookie.indexOf(key) == 0) {
          return cookie.substring(key.length, cookie.length);
        }
      return "";
    }
}

const alertSpecificCookie = () => {
    const key = document.getElementById("key").value;
    if(getCookie(key) != ""){
        alert("Cookie value: " + getCookie(key));
    } else{
        alert("Cookie does not exist");
    }
    
}

const checkCookie = (key) =>{
    const cookieValue = getCookie(key);
    if(cookieValue != ""){
        return true;
    } else{
        return false;
    }
}

const deleteCookie = () =>{
    const key = document.getElementById("key").value;
    const cookieExists = checkCookie(key);
    if(!cookieExists){
        alert("Cookie doesnt exist");
    }
    else{
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        alert(`Cookie: ${key} has been deleted`);
    }
}