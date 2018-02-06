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
