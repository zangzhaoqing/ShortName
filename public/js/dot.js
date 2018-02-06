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
