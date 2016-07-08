window.onload = function () {
    var peo = document.getElementById("M");
    var zhezao = document.getElementById("zhezao");
    //初始化人物位置
    peo.style.top = 408+"px";
    peo.style.left = 216+"px";
    //初始化遮罩位置
    zhezao.style.top = -342+"px";
    zhezao.style.left = -522+"px";
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
                }else if (t==384 & l==456){
                    alert("恭喜你走出黑暗，迎向光明！");
                    location.reload();
                }
                else {
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
                }else if(t==432){
                    alert("兄弟，你好像走错方向了；不要当逃兵好不好？");
                    location.reload();
                }
                else {
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
        if(((indext==408) & ((indexl==240) || (indexl==264)|| (indexl==288)|| (indexl==312)|| (indexl==336)|| (indexl==360)|| (indexl==384)||
            (indexl==408)|| (indexl==432)|| (indexl==192) || (indexl==168)|| (indexl==144)|| (indexl==120)|| (indexl==96)|| (indexl==72)||
            (indexl==48) || (indexl==24))) || ((indext==384) & ((indexl==0)|| (indexl==96)|| (indexl==336)))||((indext==360) & ((indexl==0) ||
            (indexl==48)|| (indexl==96)|| (indexl==144)|| (indexl==168) || (indexl==192) || (indexl==216)|| (indexl==240) || (indexl==264)||
            (indexl==288)|| (indexl==312)|| (indexl==336)|| (indexl==360)|| (indexl==384)|| (indexl==432)))||((indext==336) & ((indexl==0) ||
            (indexl==48)|| (indexl==144)|| (indexl==384)||(indexl==432)))||((indext==312) & ((indexl==0) || (indexl==48)|| (indexl==96)||
            (indexl==120)|| (indexl==144)|| (indexl==168) ||(indexl==216)|| (indexl==240) || (indexl==264)|| (indexl==288)|| (indexl==312)||
            (indexl==336)|| (indexl==384)|| (indexl==432)))|| ((indext==288) & ((indexl==0) || (indexl==48)|| (indexl==144)||(indexl==288)||
            (indexl==432)))||((indext==264) & ((indexl==0) || (indexl==48)|| (indexl==72)|| (indexl==96)|| (indexl==120)|| (indexl==144)||
            (indexl==168) || (indexl==192) ||(indexl==216)|| (indexl==240) ||(indexl==288)|| (indexl==312)|| (indexl==336)|| (indexl==360)||
            (indexl==384)|| (indexl==408)|| (indexl==432)))|| ((indext==240) & ((indexl==0) ||(indexl==120)|| (indexl==288)|| (indexl==432)))||
            ((indext==216) & ((indexl==0) ||(indexl==24)|| (indexl==48)|| (indexl==72)|| (indexl==120)|| (indexl==192) ||(indexl==216)||
            (indexl==240) || (indexl==264)|| (indexl==288)|| (indexl==336)|| (indexl==360)|| (indexl==384)||(indexl==432)))||
            ((indext==192) & ((indexl==0) ||(indexl==120)|| (indexl==288)||(indexl==360)|| (indexl==432)))|| ((indext==168) & ((indexl==0)||
            (indexl==72)|| (indexl==96)|| (indexl==120)|| (indexl==144)|| (indexl==168) || (indexl==192) ||(indexl==216)|| (indexl==240) ||
            (indexl==360)||(indexl==432)))|| ((indext==144) & ((indexl==0) ||(indexl==216) || (indexl==240) || (indexl==288)|| (indexl==312)||
            (indexl==360)|| (indexl==432)))||((indext==120) & ((indexl==0) ||(indexl==24) ||  (indexl==48)|| (indexl==72)|| (indexl==96)||
            (indexl==120)|| (indexl==144)|| (indexl==168) ||(indexl==216)|| (indexl==240) ||(indexl==432)))||((indext==96) & ((indexl==0) ||
            (indexl==144)|| (indexl==168) ||(indexl==216)|| (indexl==240) || (indexl==288)|| (indexl==312)|| (indexl==336)|| (indexl==360)||
            (indexl==384)|| (indexl==408)|| (indexl==432)))||((indext==72) & ((indexl==0) || (indexl==48)|| (indexl==72)|| (indexl==144)||
            (indexl==168) || (indexl==432)))||((indext==48) & ((indexl==0) || (indexl==48)|| (indexl==72)|| (indexl==120)|| (indexl==144)||
            (indexl==168) || (indexl==192) ||(indexl==216)||(indexl==264)|| (indexl==288)|| (indexl==312)|| (indexl==360)|| (indexl==408)||
            (indexl==432)))||((indext==24) & ((indexl==0) ||(indexl==360)||(indexl==408)|| (indexl==432)))||((indext==0) & ((indexl==0) ||
            (indexl==48)|| (indexl==72)|| (indexl==96)|| (indexl==120)|| (indexl==144)|| (indexl==168) || (indexl==192) ||(indexl==216)||
            (indexl==240) || (indexl==264)|| (indexl==288)|| (indexl==312)|| (indexl==336)|| (indexl==360)|| (indexl==384)|| (indexl==408)||
            (indexl==432)))){
            return true;
        }else return false;
    }
};







