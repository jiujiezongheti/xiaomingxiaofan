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
                    alert("撞墙了，点击确定重新开始");
                    t +=24;
                    location.reload();
                }else{ M.style.top=t+"px";}
            }else if(this.innerHTML=="左"){
                l -= 24;
                if(l<0||l>=240){
                    alert("撞墙了,点击确定重新开始");
                    l +=24;
                    location.reload();
                }else{ M.style.left=l+"px";}
            }else if(this.innerHTML=="右"){
                l += 24;
                if(l<0||l>=240){
                    alert("撞墙了，点击确定重新开始");
                    l -=24;
                    location.reload();
                }else{ M.style.left=l+"px";}
            }else if(this.innerHTML=="下"){
                t += 24;
                if(t<0||t>=240){
                    alert("撞墙了，点击确定重新开始");
                    t -=24;
                    location.reload();
                }else{ M.style.top=t+"px";}
            }
        }
    }

    document.onkeyup = function (event) {
        var e = event || window.event;
        var keyCode = e.keyCode || e.which;
        switch (keyCode) {
            case 38:
                t -= 24;
                if(t<0||t>=240){
                    alert("撞墙了，点击确定重新开始");
                    t +=24;
                    location.reload();
                }else{ M.style.top=t+"px";}
                break;
            case 37:
                l -= 24;
                if(l<0||l>=240){
                    alert("撞墙了,点击确定重新开始");
                    l +=24;
                    location.reload();
                }else{ M.style.left=l+"px";}
                break;
            case 39:
                l += 24;
                if(l<0||l>=240){
                    alert("撞墙了，点击确定重新开始");
                    l -=24;
                    location.reload();
                }else{ M.style.left=l+"px";}
                break;
            case 40:
                t += 24;
                if(t<0||t>=240){
                    alert("撞墙了，点击确定重新开始");
                    t -=24;
                    location.reload();
                }else{ M.style.top=t+"px";}
                break;
            default:
                break;
        }
    }
};