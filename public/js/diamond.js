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
