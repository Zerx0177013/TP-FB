window.addEventListener("load", function () {
  function submitForm(idPost) {
    var xhr = new XMLHttpRequest();

    let postActuel = document.getElementById("post" + idPost);
    let comments = postActuel.getElementsByClassName("comments")[0];

    var usr = document.getElementById("usr").value;
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var retour = JSON.parse(xhr.responseText);

          let comContent = postActuel.getElementsById("comment" + idPost).value;
          let com = document.createElement("p");
          com.textContent = usr + ": " + comContent;
          comments.appendChild(com);
        } else {
          document.dyn = "Error code " + xhr.status;
        }
      }
    };
    xhr.open("GET", "jsonCom.php?com=" + commentaire + "&username=" + usr, true);

    xhr.send(null);
  }

  var totalPost = parseInt(document.getElementById("num").textContent);

  for (let i = 1; i <= totalPost; i++) {
    var form = document.getElementById("post" + i);

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      submitForm(i);
    });
    }
});
