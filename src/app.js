$(function() {
    $('[data-toggle="tooltip"]').tooltip()
    var arr = document.getElementById("description")
    arr = arr.innerText.substr(0, 10) + "..."
    $('.description').value = arr
        // document.getElementById("description").innerHTML = arr
});