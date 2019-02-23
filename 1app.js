var celsInput = document.querySelector('#cels > input');
var fahrInput = document.querySelector('#fahr > input');
var kelvInput = document.querySelector('#kelv > input');
		function c2fk() {	
			var celsTemp = parseFloat(celsInput.value);
					var fahrTemp = ( (celsTemp * (9/5) ) + 32); 
					var kelvTemp = (celsTemp + 273.15);
					fahrInput.value = fahrTemp;
					kelvInput.value = kelvTemp;
			searchcity(celsTemp);
		};

		function f2ck() {	var fahrTemp = parseFloat(fahrInput.value);
					var celsTemp = ( (fahrTemp - 32 ) * (5/9) ); 
					var kelvTemp = (celsTemp + 273.15);
					celsInput.value = celsTemp;
					kelvInput.value = kelvTemp;
				 			searchcity(fahrTemp);

			};

		function k2cf() {	var kelvTemp = parseFloat(kelvInput.value);
					var celsTemp = ( kelvTemp - 273.15 ); 
					var fahrTemp = ( (celsTemp * (9/5)) + 32 ); 
					celsInput.value = celsTemp;
					fahrInput.value = fahrTemp;
				 searchcity(kelvTemp);
				 
		};
function round2d(n) { return Math.round(n * 100)/100; };     //incase i need it but i won't bcoz am a mathy kid :P
function searchcity(temp){
	alert("temp is "+ temp);
}
function main() {	celsInput.addEventListener('input', c2fk);
			fahrInput.addEventListener('input', f2ck);
			kelvInput.addEventListener('input', k2cf);		};
main();
