document.getElementById("preferenceform").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var classSelected = document.querySelector('input[name="class"]:checked');
    var yearSelected = document.querySelector('input[name="year"]:checked');
    var messSelected = document.getElementById("mess").value;

    // Form validation
    if (name.trim() === "") {
        showAlert("Please enter your name.");
    } else if (classSelected === null) {
        showAlert("Please select your class.");
    } else if (yearSelected === null) {
        showAlert("Please select your year.");
    } else if (messSelected === "") {
        showAlert("Please select your mess preference.");
    } else {
        showConfirm("Are you sure you want to submit this form?", function(result) {
            if (result) {
                var response = "Form submitted successfully!";
                showResponse(response);
            }
        });
    }
});

function showAlert(message) {
    alert(message);
}

function showConfirm(message, callback) {
    var result = confirm(message);
    callback(result);
}

function showResponse(response) {
    alert("Server Response: " + response);
}
