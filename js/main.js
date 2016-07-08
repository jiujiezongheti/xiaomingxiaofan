window.onload = function () {
    var peo = document.getElementById("M");
    var zhezao = document.getElementById("zhezao");
    //初始化人物位置
    peo.style.top = 408+"px";
    peo.style.left = 212+"px";
    //初始化遮罩位置
    zhezao.style.top = -342+"px";
    zhezao.style.left = -526+"px";
    var t = parseInt(peo.style.top);
    var l = parseInt(peo.style.left);
    var zt = parseInt(zhezao.style.top);
    var zl = parseInt(zhezao.style.left);

    /*键盘绑定事件*/
    document.onkeyup = function (event) {
        var e = event || window.event;
        var keyCode = e.keyCode || e.which;
        switch (keyCode) {
            case 38:
                t -= 24;
                zt -=24;
                if(zhuangqiang(t,l)){
                    alert("撞墙了，点击确定重新开始");
                    t +=24;
                    location.reload();
                }else{
                    peo.style.top=t+"px";
                    zhezao.style.top=zt+"px";
                }
                break;
            case 37:
                l -= 24;
                zl -= 24;
                if(zhuangqiang(t,l)){
                    alert("撞墙了,点击确定重新开始");
                    l +=24;
                    location.reload();
                }else{
                    peo.style.left=l+"px";
                    zhezao.style.left=zl+"px";
                }
                break;
            case 39:
                l += 24;
                zl +=24;
                if(zhuangqiang(t,l)){
                    alert("撞墙了，点击确定重新开始");
                    l -=24;
                    location.reload();
                }else{
                    peo.style.left=l+"px";
                    zhezao.style.left=zl+"px";
                }
                break;
            case 40:
                t += 24;
                zt +=24;
                if(zhuangqiang(t,l)){
                    alert("撞墙了，点击确定重新开始");
                    t -=24;
                    location.reload();
                }else{
                    peo.style.top=t+"px";
                    zhezao.style.top=zt+"px";
                }
                break;
         default:
                break;
        }
    };
    //判断撞墙事件
    function zhuangqiang(indext,indexl) {
        if((indext==408) & ((indexl==236) || (indexl==260)|| (indexl==284)|| (indexl==308)|| (indexl==332)||
            (indexl==356)|| (indexl==380)|| (indexl==404)|| (indexl==428)|| (indexl==188) || (indexl==164)||
            (indexl==140)|| (indexl==116)|| (indexl==92)|| (indexl==68)|| (indexl==44) || (indexl==20))) {
            return true;
        }else if ((indext==384) & ((indexl==-4)|| (indexl==92)|| (indexl==332))){
            return true;
        }else if ((indext==360) & ((indexl==-4) || (indexl==44)|| (indexl==92)|| (indexl==140)|| (indexl==164) ||
            (indexl==188) || (indexl==212)|| (indexl==236) || (indexl==260)|| (indexl==284)|| (indexl==308)||
            (indexl==332)|| (indexl==356)|| (indexl==380)|| (indexl==428))){
            return true;
        }else if ((indext==336) & ((indexl==-4) || (indexl==44)|| (indexl==140)||(indexl==380)||(indexl==428))){
            return true;
        }else if ((indext==312) & ((indexl==-4) || (indexl==44)|| (indexl==92)|| (indexl==116)|| (indexl==140)||
            (indexl==164) ||(indexl==212)|| (indexl==236) || (indexl==260)|| (indexl==284)|| (indexl==308)||
            (indexl==332)|| (indexl==380)|| (indexl==428))){
            return true;
        }else if ((indext==288) & ((indexl==-4) || (indexl==44)|| (indexl==140)||(indexl==284)|| (indexl==428))){
            return true;
        }else if ((indext==264) & ((indexl==-4) || (indexl==44)|| (indexl==68)|| (indexl==92)|| (indexl==116)||
            (indexl==140)|| (indexl==164) || (indexl==188) ||(indexl==212)|| (indexl==236) ||(indexl==284)||
            (indexl==308)|| (indexl==332)|| (indexl==356)|| (indexl==380)|| (indexl==404)|| (indexl==428))){
            return true;
        }else if ((indext==240) & ((indexl==-4) ||(indexl==116)|| (indexl==284)|| (indexl==428))){
            return true;
        }else if ((indext==216) & ((indexl==-4) ||(indexl==20)|| (indexl==44)|| (indexl==68)|| (indexl==116)||
            (indexl==188) ||(indexl==212)|| (indexl==236) || (indexl==260)|| (indexl==284)|| (indexl==332)||
            (indexl==356)|| (indexl==380)||(indexl==428))){
            return true;
        }else if ((indext==192) & ((indexl==-4) ||(indexl==116)|| (indexl==284)||(indexl==356)|| (indexl==428))){
            return true;
        }else if ((indext==168) & ((indexl==-4) ||(indexl==68)|| (indexl==92)|| (indexl==116)|| (indexl==140)||
            (indexl==164) || (indexl==188) ||(indexl==212)|| (indexl==236) ||(indexl==356)||(indexl==428))){
            return true;
        }else if ((indext==144) & ((indexl==-4) ||(indexl==212) || (indexl==236) || (indexl==284)|| (indexl==308)||
            (indexl==356)|| (indexl==428))){
            return true;
        }else if ((indext==120) & ((indexl==-4) ||(indexl==20) ||  (indexl==44)|| (indexl==68)|| (indexl==92)||
            (indexl==116)|| (indexl==140)|| (indexl==164) ||(indexl==212)|| (indexl==236) ||(indexl==428))){
            return true;
        }else if ((indext==96) & ((indexl==-4) || (indexl==140)|| (indexl==164) ||(indexl==212)|| (indexl==236) ||
            (indexl==284)|| (indexl==308)|| (indexl==332)|| (indexl==356)|| (indexl==380)|| (indexl==404)||
            (indexl==428))){
            return true;
        }else if ((indext==72) & ((indexl==-4) || (indexl==44)|| (indexl==68)|| (indexl==140)|| (indexl==164) ||
            (indexl==428))){
            return true;
        }else if ((indext==48) & ((indexl==-4) || (indexl==44)|| (indexl==68)|| (indexl==116)|| (indexl==140)||
            (indexl==164) || (indexl==188) ||(indexl==212)||(indexl==260)|| (indexl==284)|| (indexl==308)||
            (indexl==356)|| (indexl==404)|| (indexl==428))){
            return true;
        }else if ((indext==24) & ((indexl==-4) ||(indexl==356)||(indexl==404)|| (indexl==428))){
            return true;
        }else if((indext==0) & ((indexl==-4) || (indexl==44)|| (indexl==68)|| (indexl==92)|| (indexl==116)||
            (indexl==140)|| (indexl==164) || (indexl==188) ||(indexl==212)|| (indexl==236) || (indexl==260)||
            (indexl==284)|| (indexl==308)|| (indexl==332)|| (indexl==356)|| (indexl==380)|| (indexl==404)|| (indexl==428))){
            return true;
        }else return false;
    }
};







