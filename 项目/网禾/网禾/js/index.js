window.onload=function () {
    var lunbo = document.getElementById("lunbo");
    var imgs = lunbo.getElementsByTagName("img");
    var spans = lunbo.getElementsByTagName("span");
    for(var i =0;i<spans.length;i++){
        spans[i].id=i;
        spans[i].onclick=function () {
            //清除选项卡的状态和隐藏图片
            for(var j=0;j<spans.length;j++){
                spans[j].className="";
                imgs[j].style.display="none";
            }
            //给点击的选项添加属性和让对应的图片显示
            this.className="cursor";
            imgs[this.id].style.display="block";
        }
    }
};