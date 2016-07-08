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
                if(zhuangqiang()){
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
                if(zhuangqiang()){
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
                if(zhuangqiang()){
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
                if(zhuangqiang()){
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
    function zhuangqiang() {
        return false;
    }
};







