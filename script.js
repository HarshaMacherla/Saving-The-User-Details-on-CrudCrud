document.addEventListener("DOMContentLoaded", fetchFromCrudCrud);
document.getElementById("submitButton").addEventListener("click", onClick);

function fetchFromCrudCrud() {
  axios
    .get("https://crudcrud.com/api/30e8e1f7f1e44b4fbd3be66fd64f60a5/BookingApp")
    .then((obj) => {
      let userData = obj.data;
      userData.forEach((data) => displayNewRegristrationData(data));
    });
}

function onClick() {
  let name = document.getElementById("userName").value;
  let email = document.getElementById("emailID").value;
  let mobile = document.getElementById("mobile").value;

  const userDetails = {
    name,
    email,
    mobile,
  };

  axios
    .post(
      "https://crudcrud.com/api/30e8e1f7f1e44b4fbd3be66fd64f60a5/BookingApp",
      userDetails
    )
    .then((obj) => displayNewRegristrationData(obj.data))
    .catch((err) => console.log(err));
}

function displayNewRegristrationData(obj) {
  let listItems = document.getElementById("list-items");

  let node = document.createElement("li");

  let text = document.createTextNode(
    `${obj["name"]} - ${obj["email"]} - ${obj["mobile"]}`
  );

  let btnEdit = document.createElement("input");
  btnEdit.value = "Edit";
  btnEdit.type = "button";

  let btnDelete = document.createElement("input");
  btnDelete.value = "Delete";
  btnDelete.type = "button";

  node.appendChild(text);
  node.appendChild(btnEdit);
  node.appendChild(btnDelete);

  listItems.appendChild(node);
}
