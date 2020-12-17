const sayHello = () => {
    alert("Yo!");
}

const getDatePlusOffset = days =>{
    let d = new Date();
    d.setTime(d.getTime() + days*24*60*60*1000);
    return d.toUTCString();
}

const addCookies = () => {
    alert("Add cookies entered");
    //document.cookie = `name=kim`; //expires=${getDatePlusOffset(1)};path=/;
    document.cookie = "username=John Doe";
    alert("Cookies: "+ document.cookie);
}

const getCookies = () => {
    alert("Get cookies entered");
    const cookies = document.cookie;
    const cookieContainer = document.getElementById("cookiesContainer");
    cookieContainer.innerHTML = cookies;
}