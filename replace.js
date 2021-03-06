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

//promise版本ajax
function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method, url);
        request.send(data);
    });
}
var log = document.getElementById('test-promise-ajax-result');
var p = ajax('GET', '/api/categories');
p.then(function (text) { // 如果AJAX成功，获得响应内容
    log.innerText = text;
}).catch(function (status) { // 如果AJAX失败，获得响应代码
    log.innerText = 'ERROR: ' + status;
});

request.timeout = 10000;
 request.ontimeout = function(event){
  console.log("请求超时！");
 }
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
//33.移除class名
$(el).removeClass(className);
/*——*/
if(el.classList){
	el.classList.remove(className);
}else{
	el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
//34.用参数里的东西替换元素
$(el).replaceWith(string);
/*——*/
el.outerHTML = string;
//35.设置attr
$(el).attr("tabindex",3);
/*——*/
el.setAttribute('tabindex',3);
//36.返回兄弟元素
$(el).siblings();
/*——*/
Array.prototype.filter.call(el.parentNode.children, function(child){
  return child !== el;
});
//37.绑定class
$(el).toggleClass(className);
/*——*/
if (el.classList) {
  el.classList.toggle(className);
} else {
  var classes = el.className.split(' ');
  var existingIndex = classes.indexOf(className);

  if (existingIndex >= 0)
    classes.splice(existingIndex, 1);
  else
    classes.push(className);

  el.className = classes.join(' ');
}
//事件篇
//38.解绑jq事件
$(el).off(eventName, eventHandler);
/*——*/
el.removeEventListener(eventName, eventHandler);
//39.绑定事件on
$(el).on(eventName, eventHandler);
/*——*/
el.addEventListener(eventName, eventHandler);
//40.页面加载完后加载
$(document).ready(function(){

});
/*——*/
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
//41.手动触发自定义事件
$(el).trigger('my-event', {some: 'data'});
/*——*/
if (window.CustomEvent) {
  var event = new CustomEvent('my-event', {detail: {some: 'data'}});
} else {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent('my-event', true, true, {some: 'data'});
}

el.dispatchEvent(event);
//42.手动触发已有事件
$(el).trigger('my-event');
/*——*/
// 查看全部事件的列表: https://developer.mozilla.org/en-US/docs/Web/API/document.createEvent
var event = document.createEvent('HTMLEvents');
event.initEvent('change', true, false);
el.dispatchEvent(event);
//工具类篇
//43.代理上下文环境
$.proxy(fn, context);
/*——*/
fn.bind(context);
//44.each循环
$.each(array, function(i, item){

});
/*——*/
array.forEach(function(item, i){

});
//45.深度继承
$.extend(true, {}, objA, objB);
/*——*/
var deepExtend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj)
      continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object')
          out[key] = deepExtend(out[key], obj[key]);
        else
          out[key] = obj[key];
      }
    }
  }

  return out;
};

deepExtend({}, objA, objB);
//46.浅复制
$.extend({}, objA, objB);
/*——*/
var extend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    if (!arguments[i])
      continue;

    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key))
        out[key] = arguments[i][key];
    }
  }

  return out;
};

extend({}, objA, objB);
//47.判断是否在数组内inArray
$.inArray(item, array);
/*——*/
array.indexOf(item);
//48.判断是否为数组
$.isArray(arr);
/*——*/
Array.isArray(arr);
//49.map循环
$.map(array,function(val,index){
	//dosomething
});
/*——*/
arr.map(function(val,index){

})
//50.时间
$.now();
/*——*/
Date.now();
//51.转换HTML
$.parseHTML(htmlString);
/*——*/
var parseHTML = function(str) {
  var tmp = document.implementation.createHTMLDocument();
  tmp.body.innerHTML = str;
  return tmp.body.children;
};

parseHTML(htmlString);
//52.json数据转换
$.parseJSON(string);
/*——*/
JSON.parse(string);
//53.去空格
$.trim(string);
/*——*/
string.trim();
//54.确定对象类型
$.type(obj);
/*——*/
Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();