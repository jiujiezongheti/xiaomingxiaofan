window.onload= function () {
    var M = document.getElementById("M");
    var btns = document.getElementsByTagName("span");
    M.style.left=120+"px";
    M.style.top=120+"px";
    var t = parseInt(M.style.top);
    var l = parseInt(M.style.left);
    for(var i=0;i<btns.length;i++){
        //绑定按键事件
        btns[i].onclick=function () {
            if(this.innerHTML=="上"){
                t -= 24;
                if(t<0||t>=240){
                    alert("撞墙了，点击确定重新开始");
                    t +=24;
                    location.reload();
                }else{
                    var t1 = t+24;
                    var time1 = setInterval(function () {
                        t1-=1;
                        M.style.top=t1+"px";
                        if(t1==t){
                            window.clearInterval(time1);
                        }
                    },10);
                }
            }else if(this.innerHTML=="左"){
                l -= 24;
                if(l<0||l>=240){
                    alert("撞墙了,点击确定重新开始");
                    l +=24;
                    location.reload();
                }else{
                    var l1 = l+24;
                    var time2 = setInterval(function () {
                        l1-=1;
                        M.style.left=l1+"px";
                        if(l1==l){
                            window.clearInterval(time2);
                        }
                    },10);
                }
            }else if(this.innerHTML=="右"){
                l += 24;
                if(l<0||l>=240){
                    alert("撞墙了，点击确定重新开始");
                    l -=24;
                    location.reload();
                }else{
                    var l2 = l-24;
                    var time3 = setInterval(function () {
                        l2+=1;
                        M.style.left=l2+"px";
                        if(l2==l){
                            window.clearInterval(time3);
                        }
                    },10);
                }
            }else if(this.innerHTML=="下"){
                t += 24;
                if(t<0||t>=240){
                    alert("撞墙了，点击确定重新开始");
                    t -=24;
                    location.reload();
                }else{
                    var t2 = t-24;
                    var time4 = setInterval(function () {
                        t2+=1;
                        M.style.top=t2+"px";
                        if(t2==t){
                            window.clearInterval(time4);
                        }
                    },10);
                }
            }
        }
    }
//绑定键盘事件
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