/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
 module.exports = function getLoveTrianglesCount(preferences = []) {
 	let numberOfTriangles=0;
 	let workingStage={};

 	for(let i=0;i<preferences.length; i++){
 		let tempValue1=preferences[i];
 		let tempValue2=preferences[tempValue1-1];
 		let tempValue3=preferences[tempValue2-1];

 		let tempIndex1=i+1;
 		let tempIndex2=tempValue1;
 		let tempIndex3=tempValue2;

 		let arrValues=[tempValue1, tempValue2, tempValue3];
 		let arrIndexes=[i+1, tempValue1, tempValue2];	

 		for(let j=0; j<arrValues.length; j++){
 			workingStage.j=1;
 		}


 		for(let k=0; k<arrIndexes.length; k++){

 			for(key in workingStage){
 				if(key==k){
 					workingStage.key++;
 				}
 				workingStage.k=1;
 			}
 		}

 		for(key in workingStage){
 			if(workingStage.key!=2){

////////////////////////wewwegwef////
 			}
 			else {
 				numberOfTriangles++;
 			}
 		}
 	}

 	return numberOfTriangles;
 };
