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


