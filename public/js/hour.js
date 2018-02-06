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

