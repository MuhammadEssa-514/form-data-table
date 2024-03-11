function sub(event){
    event.preventDefault();

    var studentName=document.getElementById('studentName').value;
    var fatherName=document.getElementById('fatherName').value;
    var email=document.getElementById('email').value;
    var studentID=document.getElementById('studentID').value;
    var totalMarks=document.getElementById('totalMarks').value;
    var obtainedMarks=document.getElementById('obtainedMarks').value;

    var tbody=document.getElementById('tbody')
    var row=tbody.insertRow();  

    var column1=row.insertCell(0)
    column1.innerHTML=studentName;    
    var column2=row.insertCell(1)
    column2.innerHTML=fatherName;    
    var column3=row.insertCell(2)
    column3.innerHTML=email;    
    var column4=row.insertCell(3)
    column4.innerHTML=studentID;    
    var column5=row.insertCell(4)
    column5.innerHTML=totalMarks;   
    var column6=row.insertCell(5)
    column6.innerHTML=obtainedMarks;
    form.reset();
    ////// for search================================
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search");
    const table = document.querySelector("table"); 
    // function to show table when search input is empty
    function showTable() {
      let rows = table.querySelectorAll("tbody tr");
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        row.style.display = "";
      }
    }
    searchBtn.addEventListener("click", function () {
      let searchTerm = searchInput.value.toLowerCase();
      let rows = table.querySelectorAll("tbody tr");
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let studentName = row.querySelector("td:nth-child(1)").textContent.toLowerCase();
        let fatherName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
        let studentID = row.querySelector("td:nth-child(4)").textContent.toLowerCase();
        let searchRowBy = studentName.includes(searchTerm) || fatherName.includes(searchTerm) || studentID.includes(searchTerm)
        row.style.display = searchRowBy ? "" : "none";
      }
    });
    // add event listener to search input to show table when empty
    searchInput.addEventListener("input", function () {
      if (searchInput.value === "") {
        showTable();
      }
    }); 
    //////// for sort=========================
   var sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', () => {
      var sortType = sortSelect.value;
      var rows = Array.from(table.querySelectorAll('tbody tr'));
      var sortedRows = rows.map(row => row).sort((rowA, rowB) => {
        var valueA = rowA.querySelector(`td:nth-child(${sortType === 'name' ? 1 : sortType === 'father-name' ? 2 : 3})`).textContent.toLowerCase();
        var valueB = rowB.querySelector(`td:nth-child(${sortType === 'name' ? 1 : sortType === 'father-name' ? 2 : 3})`).textContent.toLowerCase();
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
      });
      var tbody = table.querySelector('tbody');
      tbody.innerHTML = '';
      sortedRows.forEach(row => tbody.appendChild(row));
    });   
}