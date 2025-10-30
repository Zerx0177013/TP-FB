window.addEventListener("load", function () {
  const form = document.getElementById("myForm");
  const loading = document.getElementById("loading");
  const errorDiv = document.getElementById("error");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorDiv.style.display = "none";
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
            window.location.href = "comment.php";
          } else if (response === "INVALID") {
            errorDiv.textContent = "❌ Nom, email ou mot de passe incorrect.";
            errorDiv.style.display = "block";
          } else if (response === "MISSING") {
            errorDiv.textContent = "⚠️ Veuillez remplir tous les champs.";
            errorDiv.style.display = "block";
          } else {
            errorDiv.textContent = "Erreur inconnue.";
            errorDiv.style.display = "block";
          }
        } else {
          errorDiv.textContent = "Erreur réseau: " + xhr.status;
          errorDiv.style.display = "block";
        }
      }
    };

    xhr.onerror = function () {
      loading.style.display = "none";
      errorDiv.textContent = "Oups! Une erreur est survenue.";
      errorDiv.style.display = "block";
    };

    xhr.send(formData);
  });
});
