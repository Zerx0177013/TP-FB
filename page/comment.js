window.addEventListener("load", function () {
  function submitForm() {
    var xhr = new XMLHttpRequest();

    let index = parseInt(document.getElementById("num").textContent);
    let actualPost = document.getElementById("post" + index);
    let commentaire = actualPost.getElementById("comment").value;
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var retour = JSON.parse(xhr.responseText);

        } else {
          document.dyn = "Error code " + xhr.status;
        }
      }
    };
    xhr.open("GET", "jsonCom.php?com=" + commentaire + "&username=" + usr, true);

    xhr.send(null);
  }

  var form = document.getElementById("post");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    submitForm();
  });
});
