let userName = document.querySelector("#Username");
let email = document.querySelector("#Email");
let job = document.querySelector("#Job");
let btn = document.querySelector("#submit");
let tBody = document.querySelector("#tbody");
let data = [];

btn.addEventListener("click", () => {
  MyPromise()
    .then((response) => {
      //console.log(response)

      showUI(response);

      // console.log(response)
    })
    .catch((err) => {
      console.log(err);
    });
});

function MyPromise() {
  let yourName = userName.value.trim();
  let yourEmail = email.value.trim();
  let yourJob = job.value.trim();
  if (!yourJob || !yourEmail || !yourJob) {
    alert("Zehmet olmasa xanalari doldurun");
    return;
  }
  let person = {
    yourName,
    yourEmail,
    yourJob,
  };
  data.push(person);

  //console.log(data);
  return new Promise(function (resolve, reject) {
    if (data) {
      resolve(data);

    } else {
        reject("Luften Verilen xanalari doldurun .");

    }
  });
}

function showUI(value) {
  tBody.innerHTML = value
    ?.map(function (el) {
      return `<tr>
    <td>${el.yourName}</td>
    <td>${el.yourEmail}</td>
    <td>${el.yourJob}</td>
  </tr>`;
    })
    .join("");

  userName.value = "";
  email.value = "";
  job.value = "";
  //  console.log(response.yourEmail);
}

//console.log(tBody);
