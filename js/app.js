/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

var spanMatch = document.getElementById('matCount');
spanMatch.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

var spanMsg = document.getElementById('msgCount');
spanMsg.innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

var divFullname = document.getElementById('fullname');
divFullname.innerHTML = 'Ronald McDonald';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

var divAge = document.getElementById('age');
divAge.innerHTML = 63;

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var divJob = document.createElement('div');
divJob.id = 'job';
divJob.innerHTML = 'Clown and Restauranteur';
data.appendChild(divJob);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var divHobbies = document.createElement('div');
divHobbies.id = 'hobbies';
divHobbies.innerHTML = "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.";
data.appendChild(divHobbies);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var divLocation = document.createElement('div');
divLocation.id = 'location';
divLocation.innerHTML = 'Honoulu, HI';
data.appendChild(divLocation);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var divWants = document.createElement('div');
divWants.id = 'wants';
divWants.innerHTML = 'Looking for a Mrs. McDonald';
data.appendChild(divWants);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var pPro2 = document.createElement('p');
pPro2.id = 'pro2';
pPro2.innerHTML = "Do you want it your way?  Then this might not work out...  I'm lovin' it!";
profile.appendChild(pPro2);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var firstNameClass = document.getElementsByClassName('firstName');
firstNameClass[0].innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var otherAgeClass = document.getElementsByClassName('otherAge');
otherAgeClass[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var statusClass = document.getElementsByClassName('status');
statusClass[0].innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

firstNameClass[1].innerHTML = 'Peko Chan';

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

otherAgeClass[1].innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto

var imgMyProfile = document.getElementById('profilePic');
imgMyProfile.src = "https://vignette.wikia.nocookie.net/yandere-simulator/images/a/a3/Wendy%27s.png/revision/latest?cb=20170802202854";



