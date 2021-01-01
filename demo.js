var students = [
    {name:"Abhay",class:"BTech",technology:"React"},
    {name:"Abhishek",class:"BTech",technology:"React"},
    {name:"Manas",class:"BTech",technology:"JS"},
    {name:"Pooja",class:"MCA",technology:"Digital Marketing"},
    {name:"Arsheen",class:"BTech",technology:"Designing"},
    {name:"Kiran",class:"MCA",technology:"SEO"},
    {name:"Kangan",class:"BMM",technology:"Graphics"}
]

var showStudents = function(){
	if(students.length===0 || students == undefined || students==null){
		alert("No students found in this class.");
		return;
	}
	var tbl = document.createElement("table");
	var tblHeaderRow = document.createElement("tr");
	var tblHeader1 = document.createElement("th");
	tblHeader1.innerHTML="NAME"; 
	var tblHeader2 = document.createElement("th");
	tblHeader2.innerHTML="CLASS"; 
	var tblHeader3 = document.createElement("th");
	tblHeader3.innerHTML="TECHNOLOGY"; 
	tbl.appendChild(tblHeaderRow);
	tblHeaderRow.appendChild(tblHeader1);
	tblHeaderRow.appendChild(tblHeader2);
	tblHeaderRow.appendChild(tblHeader3);
	var parentDiv = document.getElementById("studentList");
	parentDiv.appendChild(tbl);
	var tblRows = [];
	var col1 = [];
	var col2 = [];
	var col3 = [];
	for(var i = 0 ; i < students.length ; i++){
		tblRows[i]=document.createElement("tr");
		tblRows[i].id = "student"+(i+1);
		
		col1[i]=document.createElement("td");
		col1[i].id=tblRows[i].id+"_name";
		col1[i].innerHTML=students[i].name;

		col2[i]=document.createElement("td");
		col2[i].id=tblRows[i].id+"_class";
		col2[i].innerHTML=students[i].class;

		col3[i]=document.createElement("td");
		col3[i].id=tblRows[i].id+"_technology";
		col3[i].innerHTML=students[i].technology;

		tblRows[i].appendChild(col1[i]);
		tblRows[i].appendChild(col2[i]);
		tblRows[i].appendChild(col3[i]);
		tbl.appendChild(tblRows[i]);


	}

}