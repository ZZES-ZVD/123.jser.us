$(function() {
    $('[data-toggle="tooltip"]').tooltip()
    var arr = $('.description')
    console.log(arr)
    for(var i =0 , len = arr.length;i < len;i++){
    	var j = arr[i].innerHTML
    	console.log(j+"  "+j.length)
    	if (j.length>30) {
    		j = j.substr(0, 30) + "..."	
    	}
    	console.log("转换后："+j)
    	$('.description')[i].innerHTML = j
    }
});