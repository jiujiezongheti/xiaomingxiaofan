window.onload=function () {
    var form = document.getElementById("form");
    var divs = form.getElementsByTagName("div");
    var spans = form.getElementsByTagName("span");
    for(var i =0;i<spans.length;i++){
        spans[i].id=i;
        spans[i].onclick=function () {
            //清除选项卡的状态和div的状态
            for(var j=0;j<spans.length;j++){
                spans[j].className="";
                divs[j].style.display="none";
            }
            //给点击的选项和对应的div添加属性
            this.className="dianji";
            divs[this.id].style.display="block";
        }
    }
};