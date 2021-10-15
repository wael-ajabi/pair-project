
$('body').append('<div id= "intro" ><img id= "logo" src="logo.png"></div>');
$('#intro').hide()
$('#intro').show(5000)
$('#intro').hide(6000)
$('body').append('<button id="test" onclick="refresh()">Play again</button>')
$('#test').hide()
$('body').append('<div id= "main" ><header> <nav> <ul><li>Home</li><li>About us</li><li>Contact us</li></ul></nav></header><div id="home"><img class="image" src=" https://pbs.twimg.com/media/E-7IBR2XIAAUtUZ.jpg"></div><footer><ul id="names"><li class="names2">Wael Ajabi</li><li class="names2">Amir Hammami</li></ul></footer></div>');
		 $("body").append("<img id='lost'  src='lost.png'>");

$("#lost").hide();
	
       var counter1=30;
       var counter2=30;
       var counter3=30;
       var counter4=30;
       var counter5=30;
       var counter6=30;
       var counter7=30;
       var counter8=30;
       var counter9=30;
       var counter10=30;
       var counter11=30;
    



$("#main").hide();
$("#main").show();
$('#home').append('<button id="play" onclick="game()">Start Playing</button>')


document.addEventListener('click', play);
function play() {
    document.getElementById('player').play();
    document.removeEventListener('click', play);
   
}

$('body').append('<aside><ul><li id="1M" style="color:gold;font-weight:bolder;" class="right">1MILLIAR</li><br><li id="800m" class="right">800 million</li><br><li id="500m" class="right">500 million</li><br><li id="250m" style="color:gold;" class="right">250 million</li><br><li id="100m" class="right">100 million</li><br><li id="50m" class="right" >50 million</li><br><li id="10m" style="color:gold;" class="right">10 million</li><br><li id="2m" class="right">2 million</li><br><li id="500" class="right">500 dt</li><br><li id="200" class="right">200 dt</li><br><li id="100" class="right">    100 dt    </li></ul></aside>')
$('aside').hide();

function game(){
	$("#home").html("");
		$("#home").append("<img class='image' src='http://potionpictures.co.uk/wp-content/uploads/2018/05/2018-Who-Wants-To-Be-A-Millionaire-colour-corrected.jpg'>");
          $("#home").append("<div id='buttons'><p></p> <div id='question'><h1 id='question1'>whats achref's full name ?</h1></div><br><table><tr><td><button  class='shape' onclick='lose()'>achref karmous</button></td><td><button  class='shape' onclick='lose()'> achref mouhamed karmous</button></td></tr><br><tr><td><button class='shape' onclick='win1()'>mouhamed achref karmous</button></td><td> <button class='shape' onclick='lose()'>karmous</button></td></tr></table></div>")
 	document.getElementById('player').pause();
	document.getElementById('player1').play();
	$('#100').css('color','red');

	$('aside').show();
var ch = $("p")
	var myvar =setInterval(function(){ 
		    ch.html("")
 			ch.append('<div id="timer">'+counter1+'</div>');
 		if(counter1>0)
 		{	
 			counter1--;
 		}
 		else {
                
 			$("#home").html("");
 		
		$("#home").append("<div id='lost1'><img class='image' src='saadi.jpg'></div>");
           $("#lost").show(3000);
        document.getElementById('player1').pause();
         document.getElementById('player2').play();
            $('aside').hide();
            $('#test').show();


 		}	
	 }, 1000);
}


function lose(){
	$("#home").html("");
		$("#home").append("<div id='lost1'><img id='saadi' class='image' src='saadi.jpg'></div>");
           $("#lost").show(3000);
        document.getElementById('player1').pause();
         document.getElementById('player2').play();
         $('aside').hide();
         $('#test').show();


}

function refresh(){
location.reload()}


function win1(){
	counter1=10000000
	
	$("p").html("");
	$("#home").html("");
		$("#home").append("<img class='image' src='http://potionpictures.co.uk/wp-content/uploads/2018/05/2018-Who-Wants-To-Be-A-Millionaire-colour-corrected.jpg'>");
          $("#home").append("<div id='buttons'><p></p> <div id='question'><h1 id='question1'>whats dhia's favorite wild pet ?</h1></div><br><table><tr><td><button  class='shape' onclick='lose()'>lion</button></td><td><button  class='shape' onclick='win2()'>Kangaroo</button></td></tr><br><tr><td><button class='shape' onclick='lose()'>gorilla</button></td><td> <button class='shape' onclick='lose()'>tiger</button></td></tr></table></div>")
 	document.getElementById('player').pause();
	document.getElementById('player1').play();
	$('#200').css('color','red');
	$('#100').css('color','#2EE59D');

	$('aside').show();
var ch = $("p")
	setInterval(function(){ 
		    ch.html("")
 			ch.append('<div id="timer">'+counter2+'</div>');
 		if(counter2>0)
 		{	
 			counter2--;
 		}
 		else{
 			$("#home").html("");
		$("#home").append("<div id='lost1'><img class='image' src='saadi.jpg'></div>");
           $("#lost").show(3000);
        document.getElementById('player1').pause();
         document.getElementById('player2').play();
            $('aside').hide();
            $('#test').show();

 		}	
	 }, 1000);
}
function win2(){
	counter2=100000
	$("p").html("");
	$("#home").html("");
		$("#home").append("<img class='image' src='http://potionpictures.co.uk/wp-content/uploads/2018/05/2018-Who-Wants-To-Be-A-Millionaire-colour-corrected.jpg'>");
          $("#home").append("<div id='buttons'><p></p> <div id='question'><h1 id='question1'>how old is $i$i ?</h1></div><br><table><tr><td><button  class='shape' onclick='lose()'>30</button></td><td><button  class='shape' onclick='win3()'>27</button></td></tr><br><tr><td><button class='shape' onclick='lose()'>19</button></td><td> <button class='shape' onclick='lose()'>38</button></td></tr></table></div>")
 	document.getElementById('player').pause();
	document.getElementById('player1').play();
$('#500').css('color','red');
$('#200').css('color','#2EE59D');


	$('aside').show();
var ch = $("p")
	setInterval(function(){ 
		    ch.html("")
 			ch.append('<div id="timer">'+counter3+'</div>');
 		if(counter3>0)
 		{	
 			counter3--;
 		}
 		else{
 			$("#home").html("");
		$("#home").append("<div id='lost1'><img class='image' src='saadi.jpg'></div>");
           $("#lost").show(3000);
        document.getElementById('player1').pause();
         document.getElementById('player2').play();
            $('aside').hide();
            $('#test').show();

 		}	
	 }, 1000);
}



function win3(){
	counter3=1000000
	$("p").html("");
	$("#home").html("");
		$("#home").append("<img class='image' src='http://potionpictures.co.uk/wp-content/uploads/2018/05/2018-Who-Wants-To-Be-A-Millionaire-colour-corrected.jpg'>");
          $("#home").append("<div id='buttons'><p></p> <div id='question'><h1 id='question1'>who owns a red car ?</h1></div><br><table><tr><td><button  class='shape' onclick='lose()'>Alia</button></td><td><button  class='shape' onclick='lose()'>Saddem</button></td></tr><br><tr><td><button class='shape' onclick='lose()'>Sahar</button></td><td> <button class='shape' onclick='win4()'>Ghassen</button></td></tr></table></div>")
 	document.getElementById('player').pause();
	document.getElementById('player1').play();
	$('#2m').css('color','red');
    $('#500').css('color','#2EE59D');
  

	$('aside').show();
var ch = $("p")
	setInterval(function(){ 
		    ch.html("")
 			ch.append('<div id="timer">'+counter4+'</div>');
 		if(counter4>0)
 		{	
 			counter4--;
 		}
 		else{
 			$("#home").html("");
		$("#home").append("<div id='lost1'><img class='image' src='saadi.jpg'></div>");
           $("#lost").show(3000);
        document.getElementById('player1').pause();
         document.getElementById('player2').play();
            $('aside').hide();
            $('#test').show();

 		}	
	 }, 1000);
}



function win4(){
	counter4=1000000
	$("p").html("");
	$("#home").html("");
		$("#home").append("<img class='image' src='http://potionpictures.co.uk/wp-content/uploads/2018/05/2018-Who-Wants-To-Be-A-Millionaire-colour-corrected.jpg'>");
          $("#home").append("<div id='buttons'><p></p> <div id='question'><h1 id='question1' style='font-size:19pt;'> how many people wear glasses in cohort 17 ?</h1></div><br><table><tr><td><button  class='shape' onclick='win5()'>18</button></td><td><button  class='shape' onclick='lose()'>25</button></td></tr><br><tr><td><button class='shape' onclick='lose()'>30</button></td><td> <button class='shape' onclick='win5()'>10</button></td></tr></table></div>")
 	document.getElementById('player').pause();
	document.getElementById('player1').play();
	$('#10m').css('color','red');
	$('#2m').css('color','#2EE59D');
  

	$('aside').show();
var ch = $("p")
	setInterval(function(){ 
		    ch.html("")
 			ch.append('<div id="timer">'+counter5+'</div>');
 		if(counter5>0)
 		{	
 			counter5--;
 		}
 		else{
 			$("#home").html("");
		$("#home").append("<div id='lost1'><img class='image' src='saadi.jpg'></div>");
           $("#lost").show(3000);
        document.getElementById('player1').pause();
         document.getElementById('player2').play();
            $('aside').hide();
            $('#test').show();

 		}	
	 }, 1000);
}
function win5(){
		counter5=1000000
$("p").html("");
	$("#home").html("");
	$("#home").append("<div class='image'><img class='image' src='checkpoint.jpg'></div>");
  $("#home").append("<div><table id='checkpoint'><tr class='amir'><td><h2>Do you want to risk it all and be a</h2></td><td><button onclick='win6()' class='button-checkpoint'>MILLIONAIRE</button></td></tr></table><table class='checkpoint'><tr class='amir'><td><h2>Take the money and go home a</h2></td><td><button id ='coward' class='button-checkpoint onclick='win6()'>Coward</button></td></tr></table></div>")	
 $('#10m').html("$ 10.000 $")
    $('#10m').css('color','gold');
 
}
  
function win6(){
	$("p").html("");
	$("#home").html("");
		$("#home").append("<img class='image' src='http://potionpictures.co.uk/wp-content/uploads/2018/05/2018-Who-Wants-To-Be-A-Millionaire-colour-corrected.jpg'>");
          $("#home").append("<div id='buttons'><p></p> <div id='question'><h1 id='question1' style='font-size:19pt;'> who has thes last name 'gift'?</h1></div><br><table><tr><td><button  class='shape' onclick='lose()'>Rojla</button></td><td><button  class='shape' onclick='lose()'>Wale</button></td></tr><br><tr><td><button class='shape' onclick='win7()'>$isssi</button></td><td> <button class='shape' onclick='lose()'>Ahmed</button></td></tr></table></div>")
 	document.getElementById('player').pause();
	document.getElementById('player1').play();
	$('#50m').css('color','red');
   


	$('aside').show();
var ch = $("p")
	setInterval(function(){ 
		    ch.html("")
 			ch.append('<div id="timer">'+counter6+'</div>');
 		if(counter6>0)
 		{	
 			counter6--;
 		}
 		else{
 			$("#home").html("");
		$("#home").append("<div id='lost1'><img class='image' src='saadi.jpg'></div>");
           $("#lost").show(3000);
        document.getElementById('player1').pause();
         document.getElementById('player2').play();
            $('aside').hide();
            $('#test').show();

 		}	
	 }, 1000);
}




function win7(){
	counter6=100000
	$("p").html("");
	$("#home").html("");
		$("#home").append("<img class='image' src='http://potionpictures.co.uk/wp-content/uploads/2018/05/2018-Who-Wants-To-Be-A-Millionaire-colour-corrected.jpg'>");
          $("#home").append("<div id='buttons'><p></p> <div id='question'><h1 id='question1' style='font-size:19pt;'> who was a nuclear bomb in the past ?</h1></div><br><table><tr><td><button  class='shape' onclick='lose()'>Sakr</button></td><td><button  class='shape' onclick='lose()'>Amir</button></td></tr><br><tr><td><button class='shape' onclick='lose()'>Waeeeeel</button></td><td> <button class='shape' onclick='win8()'>Badis</button></td></tr></table></div>")
 	document.getElementById('player').pause();
	document.getElementById('player1').play();
	$('#100m').css('color','red');
	$('#50m').css('color','#2EE59D');
 


	$('aside').show();
var ch = $("p")
	setInterval(function(){ 
		    ch.html("")
 			ch.append('<div id="timer">'+counter7+'</div>');
 		if(counter7>0)
 		{	
 			counter7--;
 		}
 		else{
 			$("#home").html("");
		$("#home").append("<div id='lost1'><img class='image' src='saadi.jpg'></div>");
           $("#lost").show(3000);
        document.getElementById('player1').pause();
         document.getElementById('player2').play();
            $('aside').hide();
            $('#test').show();

 		}	
	 }, 1000);
}



function win8(){
	counter7=100000
	$("p").html("");
	$("#home").html("");
		$("#home").append("<img class='image' src='http://potionpictures.co.uk/wp-content/uploads/2018/05/2018-Who-Wants-To-Be-A-Millionaire-colour-corrected.jpg'>");
          $("#home").append("<div id='buttons'><p></p> <div id='question'><h1 id='question1' style='font-size:19pt;'> who is addicted to sleep ?</h1></div><br><table><tr><td><button  class='shape' onclick='lose()'>foued</button></td><td><button  class='shape' onclick='check()'>Amir</button></td></tr><br><tr><td><button class='shape' onclick='lose()'>wassim</button></td><td> <button class='shape' onclick='win8()'>Bechir</button></td></tr></table></div>")
 	document.getElementById('player').pause();
	document.getElementById('player1').play();
	
	$('#250m').css('color','red');
	$('#100m').css('color','#2EE59D');



	$('aside').show();
var ch = $("p")
	setInterval(function(){ 
		    ch.html("")
 			ch.append('<div id="timer">'+counter8+'</div>');
 		if(counter8>0)
 		{	
 			counter8--;
 		}
 		else{
 			$("#home").html("");
		$("#home").append("<div id='lost1'><img class='image' src='saadi.jpg'></div>");
           $("#lost").show(3000);
        document.getElementById('player1').pause();
         document.getElementById('player2').play();
            $('aside').hide();
            $('#test').show();

 		}	
	 }, 1000);
}



function check(){
		counter8=1000000
$("p").html("");
	$("#home").html("");
	$("#home").append("<div class='image'><img class='image' src='checkpoint.jpg'></div>");
  $("#home").append("<div><table id='checkpoint'><tr class='amir'><td><h2>Do you want to risk it all and be a</h2></td><td><button onclick='win9()' class='button-checkpoint'>MILLIONAIRE</button></td></tr></table><table class='checkpoint'><tr class='amir'><td><h2>Take the money and go home a</h2></td><td><button id ='coward' class='button-checkpoint onclick='win6()'>Coward</button></td></tr></table></div>")	

 $('#250m').html('$$250.000$$')
	$('#250m').css('color','gold');}









function win9(){
	$("p").html("");
	$("#home").html("");
		$("#home").append("<img class='image' src='http://potionpictures.co.uk/wp-content/uploads/2018/05/2018-Who-Wants-To-Be-A-Millionaire-colour-corrected.jpg'>");
          $("#home").append("<div id='buttons'><p></p> <div id='question'><h1 id='question1' style='font-size:19pt;'> The KING of feed back's?</h1></div><br><table><tr><td><button  class='shape' onclick='lose()'>Amine</button></td><td><button  class='shape' onclick='lose()'>Bob</button></td></tr><br><tr><td><button class='shape' onclick='win10()'>Wassim</button></td><td> <button class='shape' onclick='lose()'>Mourad</button></td></tr></table></div>")
 	document.getElementById('player').pause();
	document.getElementById('player1').play();
	$('#500m').css('color','red');
	

	$('aside').show();
var ch = $("p")
	setInterval(function(){ 
		    ch.html("")
 			ch.append('<div id="timer">'+counter9+'</div>');
 		if(counter9>0)
 		{	
 			counter9--;
 		}
 		else{
 			$("#home").html("");
		$("#home").append("<div id='lost1'><img class='image' src='saadi.jpg'></div>");
           $("#lost").show(3000);
        document.getElementById('player1').pause();
         document.getElementById('player2').play();
            $('aside').hide();
            $('#test').show();

 		}	
	 }, 1000);
}



function win10(){
	counter9=100000
	$("p").html("");
	$("#home").html("");
		$("#home").append("<img class='image' src='http://potionpictures.co.uk/wp-content/uploads/2018/05/2018-Who-Wants-To-Be-A-Millionaire-colour-corrected.jpg'>");
          $("#home").append("<div id='buttons'><p></p> <div id='question'><h1 id='question1' style='font-size:19pt;'> Who always knows everything ?</h1></div><br><table><tr><td><button  class='shape' onclick='win11()'>Amine Jlassi</button></td><td><button  class='shape' onclick='lose()'>Sakrakr</button></td></tr><br><tr><td><button class='shape' onclick='lose()'>Wassim</button></td><td> <button class='shape' onclick='lose()'>Wassim</button></td></tr></table></div>")
 	document.getElementById('player').pause();
	document.getElementById('player1').play();
	$('#800m').css('color','red');
	$('#500m').css('color','#2EE59D');
	

	$('aside').show();
var ch = $("p")
	setInterval(function(){ 
		    ch.html("")
 			ch.append('<div id="timer">'+counter10+'</div>');
 		if(counter10>0)
 		{	
 			counter10--;
 		}
 		else{
 			$("#home").html("");
		$("#home").append("<div id='lost1'><img class='image' src='saadi.jpg'></div>");
           $("#lost").show(3000);
        document.getElementById('player1').pause();
         document.getElementById('player2').play();
            $('aside').hide();
            $('#test').show();

 		}	
	 }, 1000);
}


