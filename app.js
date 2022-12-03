/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

let errorId = document.getElementById("error");
let listId = document.getElementById("list");

getList()
  .then((result) => {
    result.forEach((element) => {
      let li = document.createElement("li");
      li.textContent = element;
      listId.appendChild(li);
    });
  })
  .catch((result) => {
    errorId.textContent = result.message;
  });
