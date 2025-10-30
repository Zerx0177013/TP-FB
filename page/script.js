window.addEventListener("load", function () {
  const form = document.getElementById("myForm");
  const loading = document.getElementById("loading");

  function submitForm() {
    loading.style.display = "block";

    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);

    xhr.open("POST", "formulaire.php", true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        loading.style.display = "none";

        if (xhr.status === 200) {
          const response = xhr.responseText.trim();

          if (response === "SUCCESS") {
            // Redirect after successful login
            window.location.href = "session.php";
          } else if (response === "INVALID") {
            alert("Nom, email ou mot de passe incorrect ❌");
            window.location.href = "index.html";

          } else {
            alert("Champs manquants ou erreur.");
            window.location.href = "index.html";

          }
        } else {
          alert("Erreur réseau: code " + xhr.status);
        }
      }
    };

    xhr.onerror = function () {
      loading.style.display = "none";
      alert("Oups! Une erreur est survenue.");
    };

    xhr.send(formData);
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    submitForm();
  });
});
