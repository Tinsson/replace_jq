function rndnum(m){
	var arr1 = new Array(m);
	for(var i = 0;i < m;i++){
		arr1[i] = i;
	}
	var arr2 = new Array();
	for(var i = 0;i < m;i++){
		var rnd = Math.floor(Math.random() * (i+1));
		[arr1[rnd],arr1[i]] = [arr1[i], arr1[rnd]];
	}

	return arr1;
}
//16位随机字符串
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
chars = chars.split('');
var sign = "";
for(var i = 0;i < 16;i++){
	sign += chars[Math.floor(Math.random() * 61)];
}

//倒计时代码
function backtime(){
    var num = parseInt($(".num").text());//开始时间
    if(num != 0){
        $(".num").text(num - 1);
    }else{
        window.location.href = url;
    }
    var t = setTimeout(function(){
        backtime();
    },1000)
}
backtime();