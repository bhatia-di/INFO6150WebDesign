//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

/**
 * All Elements
 */
 const dropDownTextAreaCollection = document.getElementsByClassName("dropDownTextArea");

 const submit = document.getElementById("button");
 const addStudentButton = document.getElementById("add");
 const mainTable = document.getElementById("myTable");


/**
 * Requirement 1:
 * 1.	Table should not be expanded when page loads
 *  Delete Column should not be visible when page loads
 */
function collapaseAll() {
  for (let i = 0; i < dropDownTextAreaCollection.length; i++) {
    dropDownTextAreaCollection[i].style.display = "none";
  }
}

collapaseAll(); 

/**
 * Adding edit column tr and display to be none
 */
function addEditColumn () {
  let mainRowCollection = document.getElementsByClassName("mainRow");

  for(let i = 0; i < mainRowCollection.length; i++ ) {

    if(mainRowCollection[i].getElementsByClassName("editCol").length === 0) {

      var newCell = mainRowCollection[i].insertCell(9);
      newCell.setAttribute("class", "editCol");

      var newEditButton = document.createElement("button");
      newEditButton.setAttribute("class", "editBtn");
      newEditButton.innerText = "Edit";
      newCell.style.display = "inherit";

      newCell.appendChild(newEditButton);

    }

    if(mainRowCollection[i].getElementsByClassName("deleteCol")[0].getElementsByTagName("button").length === 0) {
      var newDeleteButton = document.createElement("button");
      newDeleteButton.setAttribute("class", "deleteBtn");
      newDeleteButton.innerText = "Delete";
      newDeleteButton.style.display = "inherit";
      mainRowCollection[i].getElementsByClassName("deleteCol")[0].appendChild(newDeleteButton);
    }


  }
}
addEditColumn();


function deleteColHide() {
  document.getElementById("deleteHeader").style.display = "none";
  const deleteColCollection = document.getElementsByClassName("deleteCol");

  for(let i = 0; i < deleteColCollection.length; i++ ) {
    deleteColCollection[i].style.display = "none";
  }
}
function deleteEditColHide() {
  document.getElementById("editHeader").style.display = "none";
  const editColCollection = document.getElementsByClassName("editCol");

  for(let i = 0; i < editColCollection.length; i++ ) {
    editColCollection[i].style.display = "none";
  }
}
function showEditColHide() {
  document.getElementById("editHeader").style.display = "table-cell";
  // const editColCollection = document.getElementsByClassName("editCol");

  // for(let i = 1; i < editColCollection.length; i++ ) {
  //   editColCollection[i].style.display = "table-cell";
  // }
}
function showdeleteColHide() {
  document.getElementById("deleteHeader").style.display = "table-cell";
  // const deleteColCollection = document.getElementsByClassName("deleteCol");
  // for(let i = 1; i < deleteColCollection.length; i++ ) {
  //   deleteColCollection[i].style.display = "table-cell";
  // }

}

deleteColHide();
deleteEditColHide();
/**
 * Requirement 2:
 * 2.	2.	Submit button to be disabled and grayed out and it should not be clickable
 */
submit.disabled = true;

/**
 * Requirement 3:
 * 3.	Add New Student Button should add new student with dummy values 
 * and dummy values should be dynamically added e.g for row 4 the values will 
 * be Student 4, Teacher 4 etc. and for row 5 the values will be Student 5, 
 * Teacher 5 etc.
 * 4.	For newly added rows make sure existing CSS are applied too.
   5.	After successful add of the record display the pop-up message as Record added successfully (any user-friendly message is also fine) 
    and display error message in case add of record addition failed.

*/
addStudentButton.onclick = () => {

  const mainRows = document.getElementsByClassName("mainRow");
  const mainRowLength = mainRows.length + 1;

  var newMainRow = document.createElement("tr");
  newMainRow.setAttribute("class", "mainRow");
  newMainRow.innerHTML = `
      <td><input type="checkbox" /><br /><br /><img src="down.png" width="25px" /></td>
			<td>Student ${mainRowLength}</td>
			<td>Teacher ${mainRowLength}</td>
			<td>Approved</td>
			<td>Fall</td>
			<td>TA</td>
			<td>34567</td>
			<td>100%</td>
			<td class="deleteCol"></td>
  
      `;

    var detailedRow = document.createElement("tr");
    detailedRow.setAttribute("class", "dropDownTextArea");
    detailedRow.innerHTML = `
    <td colspan="8">
    Advisor:<br /><br />
    Award Details<br />
    Summer 1-2014(TA)<br />
    Budget Number: <br />
    Tuition Number: <br />
    Comments:<br /><br /><br />
    Award Status:<br /><br /><br />
    </td>
  
      `;
      detailedRow.style.display = "none";
  
      mainTable.appendChild(newMainRow);
      mainTable.appendChild(detailedRow);
      addEditColumn();

      newMainRow.getElementsByClassName("deleteCol")[0].style.display = "none";
      newMainRow.getElementsByClassName("editCol")[0].style.display = "none";


      // deleteColHide();
      // deleteEditColHide();
      expandWhenImgClicked();
      addBackgroundAndColumnsWhenCheckboxIsSelected();
      alert("Student Details recorded successfully");

};

/**
 * Requirement 4:
 Expand image should expand the detailedRow

*/
function expandWhenImgClicked() {
  var imageCollection = document.getElementsByTagName("img");
  var tableRowCollection = document.getElementsByClassName("dropDownTextArea");

  for (let i = 0; i < imageCollection.length; i++) {
      imageCollection[i].onclick =  () => {
        if (tableRowCollection[i].style.display == "table-row") {
          tableRowCollection[i].style.display = "none";
        } else {
          tableRowCollection[i].style.display = "table-row";
        }
       
      }
  }
  

}
expandWhenImgClicked();

/**
 * Requirement 5:
 checkbox selected - bg -yellow
 add column delete and edit
*/

function addBackgroundAndColumnsWhenCheckboxIsSelected() {
  var inputCollection = document.getElementsByTagName("input");
  var mainRowCollection = document.getElementsByClassName("mainRow");

  for (let i = 0; i < inputCollection.length; i++) {
    inputCollection[i].onclick = () => {
      if (inputCollection[i].checked) {
        mainRowCollection[i].style.backgroundColor = "yellow";
        submit.disabled = false;
        showEditColHide();
        showdeleteColHide();

        const selectedDelete = mainRowCollection[i].getElementsByClassName("deleteCol")[0];
        selectedDelete.style.display = "table-cell";

        const selectedEdit = mainRowCollection[i].getElementsByClassName("editCol")[0];
        selectedEdit.style.display = "table-cell";
        

      } else {
        mainRowCollection[i].style.backgroundColor = "white";
        const selectedDelete = mainRowCollection[i].getElementsByClassName("deleteCol")[0];
        selectedDelete.style.display = "none";

        const selectedEdit = mainRowCollection[i].getElementsByClassName("editCol")[0];
        selectedEdit.style.display = "none  ";
        /** is any input checked - then disabled */
        var isANYChecked = false;
        for (let i = 0; i < inputCollection.length; i++) {
          if (inputCollection[i].checked) {
            isANYChecked = true;
            break;
          }

        }

        if (isANYChecked === false) {
          submit.disabled = true;
          deleteColHide();
          deleteEditColHide();
        }
      }
  
    };
  }

}
addBackgroundAndColumnsWhenCheckboxIsSelected();






