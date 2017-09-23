$(document).ready(function(){
	var inputs = [""];
	var operators1 = ["+", "-", "*", "/"];
	var operators2 = ["."];
	var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var totalString;
	function getValue(input){
		//To prevent duplicate decimal points
		if(operators2.includes(inputs[inputs.length - 1])===true && input==="."){
			console.log("Duplicate '.'");
		}
		//To prevent entry of first operator except "-" operator
		else if(inputs.length === 1 && input === "-"){
			inputs.push(input);
		}
		//To prevent double operators
		else if(operators1.includes(inputs[inputs.length - 1]) === false && inputs.length > 1){
			inputs.push(input);
		}
		//To enter a number
		else if(nums.includes(Number(input))){
			inputs.push(input);
		}
	}
	function update(){
		totalString = inputs.join("");
		$("#output").html(totalString);
	}
	function getTotal(){
		totalString = inputs.join("");
		$("#output").html(eval(totalString));
	}
	$("button").on("click", function(){
		if(this.id === "deleteAll"){
			inputs = [""];
			update();
		}
		else if(this.id === "backOne"){
			inputs.pop();
			update();
		}
		else if(this.id === "="){
			getTotal();
		}
		else if(inputs[inputs.length - 1].indexOf("+", "-", "*", "/")===-1){
			getValue(this.id);
			update();
		}
		else{
			getValue(this.id);
			update();
		}
	});
});