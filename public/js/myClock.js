/*智游教育  clock js文件 version 1.0.0*/
//控件类，页面所有可见元素都从这里继承
//提供了创建元素功能（render方法）和布局功能（layout方法）
function Control(){
	this.render()
	this.layout()
}
//填充颜色
Control.prototype.fillColor = 'black'
//添加到页面上
Control.prototype.render = function(){
	this.el = document.createElement('div')
	this.el.style.backgroundColor = this.fillColor
	this.el.style.position = 'absolute'
	document.body.appendChild(this.el)
}
//调整大小及在页面上的位置
Control.prototype.layout = function(){}


//添加窗口工作区宽高数据到Control，以便子对象使用
Control.windowResize = function(){
	Control.clientWidth = document.documentElement.clientWidth
	Control.clientHeight = document.documentElement.clientHeight
	Control.radius = Math.min(Control.clientWidth, Control.clientHeight) / 2
	console.log('窗口工作区宽高：%d, %d', Control.clientWidth, Control.clientHeight)
}
Control.windowResize()


//时钟周围的小圆点
function Diamond(minute, sizeRadio){
	this.minute = minute
	this.sizeRadio = sizeRadio || 0.01
	this.arc = 6 * (this.minute - 15) * 2 * Math.PI / 360
	this.fillColor = 'black'
	Control.call(this)
}
Diamond.prototype = Object.create(Control.prototype)

Diamond.prototype.calcChangeArgs = function (){
	
	this.size = Control.radius * this.sizeRadio
	this.width = 2*this.size
	this.height =   2*this.size
	
	var radiusDiamond = Control.radius * 0.9
	var left = radiusDiamond * Math.cos(this.arc)
	var top = radiusDiamond * Math.sin(this.arc)
	this.top = Control.clientHeight /2 + top -this.size 
	this.left = Control.clientWidth / 2 + left - this.size 
}

Diamond.prototype.render  = function(){
	Control.prototype.render.call(this)
	
	this.el.style.borderRadius = '50%'

	this.el.style.zIndex = 6
}

Diamond.prototype.layout = function (){
	this.calcChangeArgs()
	this.el.style.width = this.width + 'px'
	this.el.style.height = this.height + 'px'
	this.el.style.top = this.top + 'px'
	this.el.style.left = this.left + 'px'
}

function Dot(size,color){
	this.size = size ||40
	this.fillColor = color || 'red'
	Control.call(this)
}

Dot.prototype = Object.create(Control.prototype)

Dot.prototype.calcChangeArgs = function(){
	
	this.top =  (Control.clientHeight - this.size)/2
	this.left = (Control.clientWidth - this.size)/2
}

Dot.prototype.render = function(){
	
	Control.prototype.render.call(this)
	
	this.el.style.zIndex = 10
	
	this.el.style.width = this.size + 'px'
	this.el.style.height = this.size + 'px'
	
	this.el.style.borderRadius = this.size/2 + 'px'
}

Dot.prototype.layout = function (){
	
	this.calcChangeArgs()
	this.el.style.top = this.top + 'px'
	this.el.style.left = this.left  + 'px'
}

function Second(color){
	this.fillColor = color || 'green'
	Control.call(this)
}

Second.prototype = Object.create(Control.prototype)

Second.prototype.calcChangeArgs = function(){
	this.width = Control.radius * 2 * 0.01
	this.height = Control.radius *2 * 0.9 
	
	this.top =  (Control.clientHeight - this.height)/2
	this.left =  (Control.clientWidth - this.width)/2
}
Second.prototype.calcArgs = function(){
	
	var time = new Date();
    var s = time.getSeconds() * -1;
    this.delay = s 
    this.duration = 60
    this.zIndex = 9 
}
Second.prototype.render= function(){
	
	this.calcArgs()
	Control.prototype.render.call(this)
	
	
	this.el.style.backgroundColor = 'initial'
	this.el.style.zIndex = this.zIndex
	
	this.el.style.animationName = 'rotate'
	this.el.style.animationDelay = this.delay + 's'
	this.el.style.animationTimingFunction = 'linear'
	this.el.style.animationIterationCount = 'infinite'
	this.el.style.animationDuration = this.duration + 's'
	
	this.ele = document.createElement('div')
	this.ele.style.backgroundColor = this.fillColor
	this.el.appendChild(this.ele)
}

Second.prototype.layout = function (){
	this.calcChangeArgs()
	
	this.el.style.width = this.width + 'px'
	this.el.style.height = this.height + 'px'
	this.el.style.top = this.top + 'px'
	this.el.style.left = this.left + 'px'
	
	this.ele.style.width = this.width + 'px'
	this.ele.style.height = this.height * 0.5 + 40 + 'px'
}

function Minute(color){
	Second.call(this,color || 'blue')
}

Minute.prototype = Object.create(Second.prototype)
Minute.prototype.calcArgs = function(){
	
	var time = new Date();
    var s = time.getSeconds() * -1;
    var m = time.getMinutes() * -1;
    this.delay = (m * 60) + s;
    
    this.duration = 60 * 60 
    
    this.zIndex = 8 
}

Minute.prototype.calcChangeArgs = function(){
	var height = document.documentElement.clientHeight
	var width = document.documentElement.clientWidth
	var radius = Math.min(height,width)/2
	
	this.width = radius * 2 * 0.015
	this.height = radius *2 * 0.8 
	
	this.top =  (height - this.height)/2
	this.left =  (width - this.width)/2
}



function Hour(color){
	Second.call(this,color || 'black')
}
Hour.prototype = Object.create(Second.prototype)
Hour.prototype.calcArgs = function(){
	
	var time = new Date(); 
    var s = time.getSeconds() * -1;
    var m = time.getMinutes() * -1;
    var h = time.getHours();
    h = h > 12 ? h - 12 : h;
    h = h * -1;
    this.delay = (h * 60 * 60)  + (m * 60) + s
    this.duration = 60 * 60 *12
    this.zIndex = 7 
}

Hour.prototype.calcChangeArgs = function(){
	var height = document.documentElement.clientHeight
	var width = document.documentElement.clientWidth
	var radius = Math.min(height,width)/2
	
	this.width = radius * 2 * 0.02
	this.height = radius *2 * 0.7 
	
	this.top =  (height - this.height)/2
	this.left =  (width - this.width)/2
}


function Clock(){
	//添加样式表
	var i = 0
	var style = document.createElement('style')
	document.head.appendChild(style)
	style.sheet.insertRule('html{height:100%}', i++)
	style.sheet.insertRule('body{margin:0;height:100%}', i++)
	style.sheet.insertRule('*{box-sizing:border-box}', i++)
	style.sheet.insertRule('@keyframes rotate{from{ transform: rotate(0); } to{ transform: rotate(360deg); }}', i++)
	
	
	//创建时钟
	var dot = new Dot()
	var second = new Second()
	var minute = new Minute('blue')
	var hour = new Hour('green')
	
	var diamonds = []
	for(var i = 0; i < 60; i++){
		var sizeRadio = i % 5 == 0 ? 0.02 : 0
		diamonds.push(new Diamond(i, sizeRadio))
	}
	
	//窗口尺寸变化时重新布局
	window.onresize = function(){
		Control.windowResize()
		
		dot.layout()
		second.layout()
		minute.layout()
		hour.layout()
		
		for(var i = 0; i < 60; i++){
			diamonds[i].layout()
		}
	}
}
