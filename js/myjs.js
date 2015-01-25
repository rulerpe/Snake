	var mblue = "rgb(0, 0, 255)";
	var mred = "rgb(255, 0, 0)";
	var mgray = "rgb(192, 192, 192)";
$(document).ready(init());

function init(){
	render();
	move()
;}

function render(){
	var size = "25px";
	var number = 400;

	for(var i = 0; i<number; i++ ){
		$(".gameframe").append("<div class='cell'></div>")
	};
	$(".cell").css({
		"width": size,
		"height": size
	});
}

function move(){
	var snake = {
		"pos": null,
		"length": 2,
		"dir": "r"
	}

	var temp = null;

	if (snake.pos == null) {
			snake.pos = [50,49]
			$(".cell").eq(snake.pos[0]).css("background-color", mblue);
			$(".cell").eq(snake.pos[snake.pos.length-1]).css("background-color", mblue);
		}
	direction(snake);

	
}

function direction(obj){
	var longer;
	if(obj.dir = "r"){
		var temp = obj.pos[0] + 1;
		var color = $(".cell").eq(temp).css("background-color") ;
		if (temp%20 == 0){
			return;
		}else if(color == mblue){
			return;
		}else if(color == mgray){
			longer = false;
		}else if(color == mred){
			longer = true;
		};

		if (longer==false){
			$(".cell").eq(obj.pos[obj.pos.length-1]).css("background-color", mgray);

		};
		$(".cell").eq(temp).css("background-color",mblue); 

	}
}
