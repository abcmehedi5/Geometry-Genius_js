// geometry get input value--------------------
function geometrysymbole(id) {
  const symboleId = document.getElementById(id);
  const symboleString = symboleId.value;
  const symboleValue = parseFloat(symboleString);
  return symboleValue;
}

// // area calculation----------------------
function areaCalculation(areaValue, geometryName) {
  // input field validation check
  if (isNaN(areaValue)) {
    Swal.fire("Something wrong", "Please give correct values", "error");
  } else {
    const tableRow = document.getElementById("tableRow");
    // create table row
    const tr = document.createElement("tr");
    tr.className = "rowId";
    // table row serial number
    const tdSL = document.createElement("td");
    let rowAutoNumber = document.getElementsByClassName("rowId");
    tdSL.textContent = `${rowAutoNumber.length + 1}.`;
    tr.append(tdSL);

    // gemonetry name
    const tdName = document.createElement("td");
    tdName.textContent = geometryName;
    tr.append(tdName);
    // gemonetry value
    const tdValue = document.createElement("td");
    tdValue.textContent = `${areaValue.toFixed(2)} cm2`;
    tr.append(tdValue);
    // append  row with table
    tableRow.appendChild(tr);
    // Convert to button
    const tdButton = document.createElement("button");
    tdButton.textContent = "Convert to m2";
    tdButton.classList.add("convertBtn");
    tr.append(tdButton);
    // // all table row append table
    // tableRow.append(tr);
  }
}
