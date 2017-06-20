/*! replace.JS - v0.0.1 - 2017-06-20
 * http://github.com/Tinsson/replace
 *	替换jq的原生JS,减少对jq的依赖
 * Copyright (c) 2017 Tinsson; */

 //ajax篇
 //获取
 $.getJSON('url',function(data){
 	//dosomething...
 })
/*——*/
 var request = new XMLHttpRequest();
 request.open("GET","url",true);
 request.onload = function(){
 	if(request.status >= 200 && request.status < 400){
 		//success!
 		var data = JSON.parse(request.responseText);
 	}else{
 		//reached our target server,but it returned an error
 	}
 };
 request.onerror = function(){
 	//connection error
 }
 request.send();
//传递数值
$.ajax({
  type: 'POST',
  url: '/my/url',
  data: data
});
/*——*/
var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);

//动画效果篇
//1.fadeIn
$(el).fadeIn();
/*——*/
function fadeIn(el) {
  el.style.opacity = 0;
  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();
    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
}
fadeIn(el);
//2.hide和show
$(el).hide();
$(el).show();
/*——*/
el.style.display = "none";
el.style.display = "";

//元素效果改动
//1.添加class操作
$(el).addClass(className);
/*——*/
if(el.classList){
	el.classList.add(className);
}else{
	el.className += " " + className;
}
//2.after同级元素后添加
$(el).after(htmlString);
/*——*/
el.insertAdjacentHTML("afterend",htmlString);
//3.append子元素后添加
$(parent).append(el);
/*——*/
parent.appendChild(el);
//4.before同级元素之前添加
$(el).before(htmlString);
/*——*/
el.insertAdjacentHTML("beforebegin",htmlString);
//5.children获取子元素
$(el).children();
/*——*/
el.children;
//6.clone克隆节点
$(el).clone();
/*——*/
el.cloneNode(true);
//7.是否包含子元素
$.contains(el,child);
/*——*/
el !== child && el.contains(child);
//8.判断是否包含子节点
$(el).find(selector).length;
/*——*/
el.querySelector(selector) !== null
//9.each节点循环
$(selector).each(function(i,el){
	//dosomething
})
/*——*/
var elements = document.querySelectorAll(selector);
Array.prototype.forEach.call(elements,function(el,i){

});
//10.empty清空子节点
$(el).empty();
/*——*/
el.innerHTML = "";
//11.filter过滤器
$(selector).filter(filterFn);//返回正确值就能取到元素集合，filterFn定义的函数里传入的参数为元素索引值index
/*——*/
Array.prototype.filter.call(document.querySelectorAll(selector),filterFn);//filterFn里传入的参数为获取元素本身ele
//12.find寻找子节点
$(el).find(selector);
/*———*/
el.querySelectorAll(selector);
//13.寻找元素
$(".my #awesome selector");
/*——*/
document.querySelectorAll(".my #awesome selector");
//14.获取属性
$(el).attr("tabindex");
/*——*/
el.getAttribute('tabindex');
//15.获取HTML内容
$(el).html();
/*——*/
el.innerHTML;
//16.获取外部html
$('<div>').append($(el).clone()).html();
/*——*/
el.outerHTML;
//17.获取css的值
$(el).css(ruleName);
/*——*/
getComputedStyle(el)[ruleName];
//18.获取内容
$(el).text();
/*——*/
el.textContent;
//19.判断是否有class，hasClass
$(el).hasClass(className);
/*——*/
if(el.classList){
	el.classList.contains(className);
}else{
	new RegExp('(^| )' + className + '( |$)','gi').test(el.className);
}
//20.元素过滤is(元素对象)
$(el).is($(otherEl));
/*——*/
el === otherEl;
//21.元素过滤is(元素)
$(el).is(".my-class");
/*——*/
var matches = function(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};
matches(el, '.my-class');
//22.下一个元素next()
$(el).next();
/*——*/
el.nextElementSibling;
//23.元素位置偏移值
$(el).offset();
/*——*/
var rect = el.getBoundingClientRect();
{
	top: rect.top + document.body.scrollTop;
	left: rect.left + document.body.scrollLeft;
}
//24.获取具有定位的祖先元素
$(el).offsetParent();
/*——*/
el.offsetParent || el
//25.outerHeight()
$(el).outerHeight();
/*——*/
el.offsetHeight
//26.outerHeight加上margin
$(el).outerHeight(true);
/*——*/
function outerHeight(el) {
  var height = el.offsetHeight;
  var style = getComputedStyle(el);
  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}
outerHeight(el);
//宽度的获取与高度类似
//27.父级元素
$(el).parent();
/*——*/
el.parentNode;
//28.position定义过的坐标
$(el).position();
/*——*/
{left: el.offsetLeft,top: el.offsetTop}
//29.相对于relative的元素坐标
var offset = el.offset();
{
  top: offset.top - document.body.scrollTop,
  left: offset.left - document.body.scrollLeft
}
/*——*/
el.getBoundingClientRect();
//30.子节点前添加内容
$(parent).prepend(el);
/*——*/
parent.insertBefore(el, parent.firstChild);
//31.节点前添加内容
$(el).prev();
/*——*/
el.previousElementSibling
//32.移除节点
$(el).remove();
/*——*/
el.parentNode.removeChild(el);