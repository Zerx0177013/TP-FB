window.addEventListener("load", function () {
    
    function submitForm() {
        var xhr = new XMLHttpRequest(); 

        var post = document.getElementById("pub").value;
        var usr = document.getElementById("usr").value;
        xhr.onreadystatechange  = function() {
            if(xhr.readyState  == 4){
                if(xhr.status  == 200) {
                    var retour = JSON.parse(xhr.responseText);
            
                    let posts = document.getElementById("publications");
                    let text = document.createElement("p");
                    text.textContent = usr + ": " + post;
                    posts.appendChild(text)
                } else {
                    document.dyn="Error code " + xhr.status;
                }
            }
        };
        xhr.open("GET", "jsonPost.php?post=" + post + "&username=" + usr,  true);
        
        xhr.send(null);
    }

    var form = document.getElementById("post");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        submitForm();
    });
});