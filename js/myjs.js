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
		"start_pos": null,
		"end_pos": null,
		"length": 2,
		"dir": "r"
	}

	if (snake.pos == null) {
			snake.start_pos = 50;
			snake.end_pos = 49;
			$(".cell").eq(snake.start_pos).css("background-color", "blue");
			$(".cell").eq(snake.end_pos).css("background-color", "blue");
		}

	
}