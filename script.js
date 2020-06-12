let bill = [];

inputData = () => {
    bill.push({
        id: 1 + Math.random(),
        name: document.getElementById("name").value,
        qty: document.getElementById("qty").value,
        amt: document.getElementById("amt").value,
        sum: document.getElementById("qty").value *
            document.getElementById("amt").value,
    });
    document.getElementById("form").reset();
    displayData();
};

displayData = () => {
    tbody.innerHTML = "";
    bill.map(
        (data) =>
        (tbody.innerHTML += `<div class="tdata grid border">
        <div>${data.name}</div>
        <div>${data.qty}</div>
        <div>${data.amt}</div>
        <div>${data.sum}</div>  
        <div>
        <button id="edit" onclick="editItem(${data.id})">📝</button>
        <button id="del" onclick="deleteItem(${data.id})">❌</button>
    
      </div>
      </div>
      `)
    );
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    calculation();
    tdate.innerHTML = m + "/" + d + "/" + y;
};

deleteItem = (id) => {
    result = confirm("This item will be deleted!");
    if (result) {
        bill = bill.filter((data) => data.id !== id);
    }
    displayData();
};

editItem = (id) => {
    i = bill.findIndex((obj) => obj.id == id);
    editField.innerHTML =
        `<div class="box entry" >
            <h1>Edit your entry here:</h1>
            <form autocomplete="off">
                <label>Item:</label></br>
                <input required type ="text" id="editName" value="${bill[i].name}" /></br>
                <label>Quantity</label></br> 
                <input required  type ="number" id="editQty" value="${bill[i].qty}" /></br>
                <label>Rate</label></br>
                <input required  type ="number" id="editAmt" value="${bill[i].amt}" /></br>  
                <center>
                    <button onclick="editData()">Save</button>
                    <button onclick="cancel()">Cancel</button>
                </center>
            </form>
        </div>`;

    cancel = () => {
        editField.innerHTML = "";
    };

    editData = () => {
        bill[i].name = document.getElementById("editName").value;
        bill[i].qty = document.getElementById("editQty").value;
        bill[i].amt = document.getElementById("editAmt").value;
        bill[i].sum =
            document.getElementById("editQty").value *
            document.getElementById("editAmt").value;
        editField.innerHTML = "";
        displayData();
    };

};

calculation = () => {
    sum = 0;
    bill.map((data) => (sum += data.sum));
    sumTotal.innerHTML = sum;
    discount = document.getElementById("discount").value / 100;
    vat = document.getElementById("vat").checked;
    disAmt = sum - sum * discount;
    if (vat) {
        grandAmt = disAmt + 0.13 * disAmt;
    } else {
        grandAmt = disAmt;
    }
    grandTotal.innerHTML = grandAmt.toFixed(2);
};

display = () => {
    if (document.getElementById('tname').value) {
        window.print();
    } else {
        alert("Name field must not be empty");
    }
}