  var words=['Carl','Negan','Michonne','Zombies','Alexandria','Shiva','Rick','Terminus','Hilltop','Maggie','Lucille','Carol','Daryl','Shane','The Governor']
  var word=words[Math.floor(Math.random ()* words.length)] 
  var wordField = document.getElementById('wordField')
    

 
  var arrayWord = word.split("")
  // console.log(arrayWord)

  var dashArray=[];
  for(let i=0; i<arrayWord.length; i++){
   wordField.innerHTML += " _ ";
    
  function checkWord(guessedLetter){
    if(currentWord.includes(guessedLetter)){
        console.log('correct')
    }else {
        console.log('incorrect')
    }
}
  }	

var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y',
'z']
for(let i=0; i<alphabet.length; i++){

	var div=document.createElement("DIV");
	var letters=document.createTextNode(alphabet[i]);
	div.appendChild(letters);
	div.style.width="40px";
	div.style.height="40px";
	div.style.border="3px solid";
	div.style.margin="10px";
	div.classList.add('box');
	div.style.display="inline-block";
	document.body.appendChild(div);
	var boxes= document.getElementsByClassName('box');
	boxes[i].addEventListener('click', function(){
		showLetter(i);
		//console.log(i);
	})
}

function showLetter(currentItem){
	console.log(alphabet[currentItem])
}

var answer=[]
for (i=0, i<=answer.length, i++){
	if
		else
}




