
	// Код работает только если n может ровняться только 3, 4
	// Всё, что неизвестно помечать как '0'
	// Если вы используете знак √, то число вводить в S, а корень в Ssqrt
	// Пример:  Если у вас число 15√3, то S = 15; Skor = '3'
	let answer = '0'

	let r = '0'

	let R = '0'

	let S = '0'
	let Skor = '0'

	let p = '0'
	let pkor = '0'

	let an = 15
	let ankor = '3'

	let n = 4

	// Нахождение стороны, R > 0 &  если n = 3
	function anRAnw3() {
		an = 2 * R * grad
		answer = 'an ='+an + '√3'
		console.log(answer)
	}
	// Нахождение стороны, R > 0 &  если n = 4
	function anRAnw4() {
		an = 2 * R * grad
		answer = 'an = ' + an + '√2'
		console.log(answer)
	}	
	// Нахождение периметра, R > 0 & если n = 3
	function PRAnw3() {
 		p = an * 3
 		answer = 'p ='+ p + '√3'
 		console.log(answer)
 	}
 	function PRAnw4() {
 		p = an * 4
 		answer = 'p ='+p+'√2'
 		console.log('p =',p+'√2')
 	} 	
 	// Нахождение радиуса, R > 0 & если n = 3
 	function rRAnw3() {
 		r = R * 0.5
 		answer = 'r = '+r
 		console.log('r = ',r)
 	}
 	// Нахождение радиуса, R > 0 & если n = 4
 	function rRAnw4() {
 		r = R * 0.5
 		answer = 'r = '+r+ '√2'
 		console.log(answer)
 	}
 	// Нахождение площади, если R > 0 & n == 3 
 	function SRAnw3() {
 		S = p * r * 0.5
 		console.log('S =', S + '√3')
 	}
 	// Нахождение площади, если R > 0 & n == 4 
 	function SRAnw4() {
 		S = p * r * 1
 		console.log('S =', S)
 	}
 	// Нахождение площади, если r > 0 & n = 6 
 	function RrAnw3() {
 		R = r * 2
 		answer = 'R = ' +R
 		console.log(answer)
 	}
 	function RrAnw4() {
 		R = r * 2 
 		answer = 'R = ' +R
 		console.log(answer + '/√2')
 	}
 	function RrAnw6() {
 		R = r * 2
 		answer = 'R = ' +R
 		console.log(answer + '/√3')
 	}
 	function anAnw3 () {
 		an = R
 		answer = an
 		console.log('an = '+an+ '/√3')
 	}
 	function anAnw4 () {
 		an = R
 		answer = an
 		console.log('an = '+an+ '√2')
 	}

	function prAnw3() {
		p = an * 3
		answer = 'p = ' + p + '/√3'
		console.log(answer)
	}
	function prAnw4() {
		p = an * 3
		answer = 'p = ' + p + '√2'
		console.log(answer)
	}
	
	function SRanw3() {
		S = p * r
		answer = 'S = ' +S+ '/√3'
		console.log(answer)
	}
	function SRanw4() {
		S = p * r
		answer = 'S = ' +S+ '√2'
		console.log(answer)
	}
	function anpansWithOutKor3(){
		an = p / 3
		answer = an
		console.log('an = '+an)
	}
	function anpansWithKor3(){
		an = p / 3
		answer = an
		console.log('an = '+an+ '√' +pkor)
	}
	function RpanwWithOutKor3() {
		R = an
		answer = 'R = '+ R
		console.log(answer)
	}
	function RpanwWithKor3(){
		R = an
		answer = 'R = '+ R
		console.log(answer)
	}
 	function SRAnwWithKor3() {
 		S = p * r / 2
 		answer = 'S =' + S
 		console.log('S =', S)
 	}
 	function anpAnwWithKor4() {
 		an = p / 4
		answer = an
		console.log('an = '+an+ '√'+pkor)
 	}
 	function RpAnwWithKor4() {
 		R = an
 		answer = 'R = ' + R
 		console.log (answer)
 	}
 	function rpAnwWithKor4() {
		r = R / 2
 		answer = 'r = ' + r
 		console.log (answer)
 	}
	
 	function SpAnwWithKor4() {
 		S = (p * r) / 2
 		answer = 'S = ' + S + '√'+pkor
 		console.log( answer)
 	}
 	


 	

	if ( n == 3 & R > 0) {
		grad = 0.5
		anRAnw3()
		PRAnw3()
		rRAnw3()
		SRAnw3()
	}

	if ( n == 4 & R > 0) {
		grad = 0.5
		anRAnw4()
		PRAnw4()
		rRAnw4()
		SRAnw4()
	}

			


			if ( n == 3 & r > 0 & R < 0.00001) {
				RrAnw3()
				anAnw3()
				prAnw3()
				SRanw3()
			}
			if ( n == 4 & r > 0 & R < 0.00001) {
				RrAnw4()
				anAnw4()
				prAnw4()
				SRanw4()
			}
		

			
				if (p > 0 && pkor > 0 && n == 3 && R < 0.00001) {
					anpansWithKor3()
					RpanwWithKor3()
					rRAnw3()
					SRAnwWithKor3()
				}
				if (p > 0 && pkor > 0 && n == 4 && R < 0.00001) {
					anpAnwWithKor4()
					RpAnwWithKor4()
					rpAnwWithKor4()
					SpAnwWithKor4()
				}



	if (an > 0 && n == 3 && ankor > 0) {
		p = an * n
		answer = 'p = ' + p + '√' +ankor
		console.log(answer )
		R = an
		answer = 'R = ' + R
		console.log(answer)
		r = R / 2
		answer = 'r = ' + r
		console.log(answer)
		S = r * p / 2 
		answer = 'S = ' +S+ '√' + ankor
		console.log(answer)
		console.log('an = '+ an + '√' + ankor)
	}
	if (an > 0 && n == 4 && ankor > 0) {
		p = an * n
		answer = 'p = ' + p + '√' +ankor
		console.log(answer )
		R = 2 * an
		answer = 'R = ' + R
		console.log(answer)
		r = R / 2
		answer = 'r = ' + r + '√' +ankor
		console.log(answer)
		S = r * p / 2 
		answer = 'S = ' +S+ '√' + ankor
		console.log(answer)
		console.log('an = '+ an + '√' + ankor)
	}



				if (an > 0 && n == 3 && ankor == 0) {
					console.log('Введите корень к an')
					console.log('Пока что программа не научилась решать подобное..Так что вы можете напряч свою голову и попытаьтся сделать это самим')
				}
				if (an > 0 && n == 4 && ankor == 0) {
					console.log('Введите корень к an')
					console.log('Пока что программа не научилась решать подобное..Так что вы можете напряч свою голову и попытаьтся сделать это самим')
				}



			
		// Кладбище(

	/*function PRAnw6() {
 		p = an * 6
 		console.log('p =',+p +'')
 	}
 	function anpAnwWithKor6() {
 		an = p / 6
 		answer = 'an = '+an
 		console.log(answer)
 	}
	function RpAnwWithKor6(){
		R = an
		answer = R
		console.log('R = '+ R )
	}
 	function rpAnwWithKor6() {
		r = R / 2
 		answer = 'r = ' + r
 		console.log (answer)
 	}
	
 	function SpAnwWithKor6() {
 		S = (p * r) / 2
 		answer = S
 		console.log( answer)
 	}
 	function SRanw6() {
		S = p * r
		answer = 'S = ' +S+ '/√3'
		console.log(answer)
	}
	function anRAnw6() {
		an = 2 * R * grad
		answer = 'an ='+an
		console.log(answer)
	}
	function anAnw6 () {
 		an = R
 		answer = an
 		console.log('an = '+an+ '/√3')
	}	
	function prAnw6() {
		p = an * 3
		answer = 'p = ' + p + '/√3'
		console.log(answer)
	}
 	function SRAnw6() {
 		S = p * r * 0.5
 		answer = 'S =', +S+ '√3'
 		console.log('S =', S+ '√3')
 	}
 	function rRAnw6() {
 		r = R * 0.5
 		answer = 'r = '+r+ '√3'
 		console.log(answer)
 	}
 	if ( n == 6 & r > 0 & R < 0.00001) {
		RrAnw6()
		anAnw6()
		prAnw6()
		SRanw6()
	}
		if (p > 0 && pkor < 0.0001 && n == 6 && R < 0.00001) {
			anpAnwWithKor6()
			RpAnwWithKor6()
		}
			if ( n == 6 & R > 0) {
				grad = 0.5
				anRAnw6()
				PRAnw6()
				rRAnw6()
				SRAnw6()
			}
 	*/