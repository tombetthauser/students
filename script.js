var results = document.getElementById("results")
var c = true;

document.getElementById("clear").onclick = function() {clear()};
document.getElementById("submit").onclick = function() {submit()};
document.getElementById("help").onclick = function() {help()};

window.onkeydown = function(i) {
	var k = i.keyCode ? i.keyCode : i.which;
	if (k == 13) {
		submit();
		c = false;
	} else if (k == 27 && c == true) {
		help();
		c = false;
	} else if (k == 27 && c == false) {
		clear();
		c = true;
	}
}

function submit() {
    results.innerHTML = "(student key not found)";
	document.getElementById("body").style.marginTop = "15%";
    var x = document.getElementById("input").value;
 	document.getElementById("input").value = "";
    document.getElementById("results").innerHTML = 
      students[x].firstName + " "
    + students[x].lastName + " - "
    + students[x].grading + "<br>"
    + students[x].course + ", "
    + students[x].school + " - "
    + students[x].semester + " "
    + students[x].year;
}

function help() {
	document.getElementById("body").style.marginTop = "5%";
    results.innerHTML = "";
	

	var tempArr = (Object.keys(students));
	tempArr.sort();
	console.log(tempArr);

	for (i=0;i<tempArr.length;i++) {
        document.getElementById("results").innerHTML += 
          "<a class='studentLink'>"
        + tempArr[i]
        + "<br>";
	}

	// –––––––––– old solution for printing student list straight from original student object ––––––––––
	// for (var key in students) {
	//     if (students.hasOwnProperty(key)) {
	//         document.getElementById("results").innerHTML += 
	//           "<a class='studentLink'>"
	//         + (key)
	//         + "<br>";
	//     }
	// }

	document.getElementById("results").innerHTML += "<br><br><br><br><br><br>";
 	document.getElementById("input").value = "";
}

function clear() {
	document.getElementById("body").style.marginTop = "15%";
    results.innerHTML = "";
 	document.getElementById("input").value = "";
}

// ------- add enter key listener -------------

var students = {
	Bartschat:	{lastName: "Bartschat", 	firstName: "Megan",		grading: "Letter Grade",	course: "Painting I",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Bourke:	 	{lastName: "Bourke", 		firstName: "Hannah",	grading: "Letter Grade",	course: "Painting I",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Clarkpoets:	{lastName: "Clark-Poets",	firstName: "Lavetta", 	grading: "Letter Grade",	course: "Painting I",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Hammett:	{lastName: "Hammett", 		firstName: "Rebecca", 	grading: "Letter Grade",	course: "Painting I",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Hernandez:	{lastName: "Hernandez", 	firstName: "Iram", 		grading: "Letter Grade",	course: "Painting I",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Skomorokho:	{lastName: "Skomorokho", 	firstName: "Ida", 		grading: "Letter Grade",	course: "Painting I",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Slatton:	{lastName: "Slatton", 		firstName: "Corey",		grading: "Letter Grade",	course: "Painting I",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Zabokrtsky:	{lastName: "Zabokrtsky", 	firstName: "Connie",	grading: "Letter Grade",	course: "Painting I",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Pardoe:	 	{lastName: "Pardoe",		firstName: "Camille",	grading: "Letter Grade",	course: "Painting II",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Kissling:	{lastName: "Kissling",		firstName: "Charlotte",	grading: "Letter Grade",	course: "Painting III",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Wayland:	{lastName: "Wayland",		firstName: "Avery",		grading: "Letter Grade",	course: "Painting III",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Woo:	 	{lastName: "Woo",			firstName: "Choi Yue Victor",	grading: "Letter Grade",	course: "Painting III",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Baldwin:	{lastName: "Baldwin",		firstName: "Jessica",	grading: "Letter Grade",	course: "Painting IV",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Chang:	 	{lastName: "Chang",			firstName: "Beulah"	,	grading: "Letter Grade",	course: "Painting IV",	semester: "Fall",	year:"2018", 	school: "College of Marin"},
	Lizbanova: 	{lastName: "Lizbanova", 	firstName: "Liudmila",	grading: "Pass / Fail",		course: "Painting I",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Foote: 		{lastName: "Foote", 		firstName: "Mark",		grading: "Pass / Fail",		course: "Painting II",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Turitzin: 	{lastName: "Turitzin", 		firstName: "Stephen", 	grading: "Pass / Fail",		course: "Painting II",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Ferris: 	{lastName: "Ferris", 		firstName: "Jeanine", 	grading: "Pass / Fail",		course: "Painting III",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Klain: 		{lastName: "Klain", 		firstName: "Judith",	grading: "Pass / Fail",		course: "Painting III",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	DAbravanel: {lastName: "DAbravanel", 	firstName: "Kore",		grading: "Pass / Fail",		course: "Painting IV",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Maxwell: 	{lastName: "Maxwell", 		firstName: "David",		grading: "Audit",			course: "Painting I",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Wakelin: 	{lastName: "Wakelin", 		firstName: "Michael",	grading: "Audit",			course: "Painting II",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Lee: 		{lastName: "Lee", 			firstName: "Naomi",		grading: "Audit",			course: "Painting III",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Sloan: 		{lastName: "Sloan", 		firstName: "Michi",		grading: "Audit",			course: "Painting III",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Bogart: 	{lastName: "Bogart", 		firstName: "Ronnie",	grading: "Audit",			course: "Painting IV",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Gilardi: 	{lastName: "Gilardi", 		firstName: "Mary",		grading: "Audit",			course: "Painting IV",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Hallet: 	{lastName: "Hallet", 		firstName: "Marsha",	grading: "Audit",			course: "Painting IV",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Monsef: 	{lastName: "Monsef", 		firstName: "Paula",		grading: "Audit",			course: "Painting IV",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Pelletier: 	{lastName: "Pelletier", 	firstName: "Anne",		grading: "Audit",			course: "Painting IV",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Gilardi: 	{lastName: "Gilardi", 		firstName: "Mary",		grading: "Audit",			course: "Painting IV",	semester: "Fall",	year: "2018", 	school: "College of Marin"},
	Alkali:		{lastName: "Alkali", 		firstName: "Bahder", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Allegrezza:	{lastName: "Allegrezza", 	firstName: "Jessica", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Allen:		{lastName: "Allen", 		firstName: "Benjamin", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Auer:		{lastName: "Auer", 			firstName: "Geary", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Bajan:		{lastName: "Bajan", 		firstName: "Mia", 		grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Blasik:		{lastName: "Blasik", 		firstName: "Mason", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Bradley:	{lastName: "Bradley", 		firstName: "Julie", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Charekian:	{lastName: "Charekian", 	firstName: "Stephanie", grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Covitz:		{lastName: "Covitz", 		firstName: "Elijah", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Francis:	{lastName: "Francis", 		firstName: "Elizabeth", grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Havens:		{lastName: "Havens", 		firstName: "Brooke", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Ho:			{lastName: "Ho", 			firstName: "Daphne", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Landeros:	{lastName: "Landeros", 		firstName: "Lennix", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Martinez:	{lastName: "Martinez", 		firstName: "Cristian", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Minker:		{lastName: "Minker", 		firstName: "Andrew", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Oduma:		{lastName: "Oduma", 		firstName: "Nicholas", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Rodriguez:	{lastName: "Rodriguez", 	firstName: "Jorge", 	grading: "Letter Grade", 	course: "Art History I",	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Greenfield: {lastName: "Greenfield", 	firstName: "Michelle", 	grading: "Letter Grade",	course: "Rep. Drawing", 	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Neynavaei: 	{lastName: "Neynavaei", 	firstName: "Mojtaba", 	grading: "Letter Grade",	course: "Rep. Drawing", 	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Sinclair: 	{lastName: "Sinclair", 		firstName: "Ryder", 	grading: "Letter Grade",	course: "Rep. Drawing", 	semester: "Fall",	year: "2018",	school: "West Valley College"},
	Ziegler: 	{lastName: "Ziegler", 		firstName: "Grayson", 	grading: "Letter Grade",	course: "Rep. Drawing", 	semester: "Fall",	year: "2018",	school: "West Valley College"}
}


// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


// document.getElementsByClassName("studentLink").onclick = function() {studentLink()};

// function studentLink() {
// 	document.getElementById("body").style.marginTop = "15%";
//     document.getElementById("input").value = ; // got stuck here -- how do I insert the value from respectively clicked <a> tag??

//     var x = document.getElementById("input").value;
//     document.getElementById("results").innerHTML = 
//       students[x].firstName + " "
//     + students[x].lastName + " - "
//     + students[x].grading + "<br>"
//     + students[x].course + ", "
//     + students[x].semester + " "
//     + students[x].year + " - "
//     + students[x].school;
// }


// ––––––––– copied code for alphabetically sorting students –––––––––––


// var result = Object.keys(obj).map(function(key) {
//   return [obj[key].lastName];
// });

// console.log(result);



// var maxSpeed = {
//     car: 300, 
//     bike: 60, 
//     motorbike: 200, 
//     airplane: 1000,
//     helicopter: 400, 
//     rocket: 8 * 60 * 60
// };
// var sortable = [];
// for (var vehicle in maxSpeed) {
//     sortable.push([vehicle, maxSpeed[vehicle]]);
// }

// sortable.sort(function(a, b) {
//     return a[1] - b[1];
// });
