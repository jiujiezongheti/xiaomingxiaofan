window.onload= function () {
    var M = document.getElementById("M");
    var btns = document.getElementsByTagName("span");
    M.style.left=120+"px";
    M.style.top=120+"px";
    var t = parseInt(M.style.top);
    var l = parseInt(M.style.left);
    for(var i=0;i<btns.length;i++){
        btns[i].onclick=function () {
            if(this.innerHTML=="上"){
                t -= 24;
                if(t<0||t>=240){
                    alert("撞墙了");
                    t +=24;
                }else{ M.style.top=t+"px";}
            }else if(this.innerHTML=="左"){
                l -= 24;
                if(l<0||l>=240){
                    alert("撞墙了");
                    l +=24;
                }else{ M.style.left=l+"px";}
            }else if(this.innerHTML=="右"){
                l += 24;
                if(l<0||l>=240){
                    alert("撞墙了");
                    l -=24;
                }else{ M.style.left=l+"px";}
            }else if(this.innerHTML=="下"){
                t += 24;
                if(t<0||t>=240){
                    alert("撞墙了");
                    t -=24;
                }else{ M.style.top=t+"px";}
            }
        }
    }
};