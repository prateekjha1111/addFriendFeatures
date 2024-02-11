var isFriend = document.querySelector("h5");
var btn = document.querySelector("button");

var flag = 0;
btn.addEventListener("click", function(){
    if(flag === 0){
        isFriend.innerHTML = "Friends";
        isFriend.style.color = "green";
        btn.innerHTML = "Remove Friend";
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
        flag = 1;
    } else {
        isFriend.innerHTML = "Stranger";
        isFriend.style.color = "rgb(176, 0, 0)";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "#dadada";
        btn.style.color = "rgb(37, 37, 37)";
        flag = 0;
    }
});