document.addEventListener("DOMContentLoaded", fetchFromCrudCrud);
document.getElementById("submitButton").addEventListener("click", onClick);

function fetchFromCrudCrud() {
  axios
    .get("https://crudcrud.com/api/74827baff72b440eb2cb24d23b4edba0/BookingApp")
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
      "https://crudcrud.com/api/74827baff72b440eb2cb24d23b4edba0/BookingApp/",
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
  btnEdit.onclick = () => {
    document.getElementById("userName").value = obj["name"];
    document.getElementById("emailID").value = obj["email"];
    document.getElementById("mobile").value = obj["mobile"];
    listItems.removeChild(node);
    axios
      .delete(
        `https://crudcrud.com/api/74827baff72b440eb2cb24d23b4edba0/BookingApp/${obj["_id"]}`
      )
      .catch((err) => console.log(err));
    document.getElementById("submitButton").addEventListener("click", onClick);
  };

  let btnDelete = document.createElement("input");
  btnDelete.value = "Delete";
  btnDelete.type = "button";
  btnDelete.onclick = () => {
    axios
      .delete(
        `https://crudcrud.com/api/74827baff72b440eb2cb24d23b4edba0/BookingApp/${obj["_id"]}`
      )
      .catch((err) => console.log(err));
    listItems.removeChild(node);
  };

  node.appendChild(text);
  node.appendChild(btnEdit);
  node.appendChild(btnDelete);

  listItems.appendChild(node);
}
