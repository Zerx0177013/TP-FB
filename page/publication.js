window.addEventListener("load", function () {
  function submitForm() {
    var xhr = new XMLHttpRequest();

    var post = document.getElementById("pub").value;
    var usr = document.getElementById("usr").value;
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var retour = JSON.parse(xhr.responseText);

          let i = parseInt(document.getElementById("num").textContent);
          //   incrementNum(i);
          i = i + 1;
          document.getElementById("num").textContent = i;
          let posts = document.getElementById("publications");

          let div = document.createElement("div");
          div.className = "post";
          div.id = "post" + i;
          let text = document.createElement("p");

          let comment = document.createElement("input");
          comment.type = "text";
          comment.placeholder = "Ajouter un commentaire";
          comment.id = "comment" + i;
          let commButton = document.createElement("button");
          commButton.textContent = "Commenter";
          commButton.className = "com";
          commButton.type = "submit";
          let commentSection = document.createElement("div");
          commentSection.className = "comments";

          text.textContent = usr + ": " + post;
          div.appendChild(text);
          div.appendChild(comment);
          div.appendChild(commButton);
          div.appendChild(commentSection);
          posts.appendChild(div);
        } else {
          document.dyn = "Error code " + xhr.status;
        }
      }
    };
    xhr.open("GET", "jsonPost.php?post=" + post + "&username=" + usr, true);

    xhr.send(null);
  }

  var form = document.getElementById("post");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    submitForm();
  });
});