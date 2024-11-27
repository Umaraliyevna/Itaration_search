var Ismlar = [];


function addTable(){     
    var row = `
        <tr>
            <th>Ismi</th>
        </tr>        
    `;   
    Ismlar.forEach(element => {
        row += `
            <tr>
                <td>${element}</td>
            </tr>
        `;
    });

    document.getElementById('table').innerHTML = row;
    document.getElementById("name").value = "";        
}


document.getElementById("submitBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = document.getElementById("name").value;
    if (inputValue.trim() !== "") {       
       Ismlar.push(inputValue);     
       addTable();    
    }else {
        console.error("Input maydoni bo'sh!");
    }
});

document.getElementById("searchInput").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();

    Ismlar.map((item) =>{
        if(item.charAt(0).toLowerCase() == searchValue){
            item.style.display = "block";
            addTable();
        }else{
            item.style.display = "none";
        };
        
    })
});


