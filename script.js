// Listen to the form being submitted
document
    .querySelector("#newDestinationForm")
    .addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault(); // stop the form from refreshing the page

    var name = event.target.elements["destination"].value;
    var location = event.target.elements["location"].value;
    var url = event.target.elements["photo"].value;
    var description = event.target.elements["description"].value;

    // Use the form elements to create a bootstrap card with destination details
    document
        .querySelector("#wishlist_container")
    document
        .createElement("div")
        .setAttribute("class", "card destinationCard");

    document
        .createElement("img")
        .setAttribute("class", "card-img-top")
        .setAttribute("alt", name)
        .setAttribute("src", url);

    document
        .createElement("div")
        .setAttribute("class", "card-body");

    document
        .createElement("h5")
        .setAttribute("class", "card-title")
        .innerText = name;

    document
        .createElement("h6")
        .setAttribute("class", "card-subtitle mb-2 text-muted")
        .innerText = location;

    // Reset the form elements values for a new entry
    reset(event.target);
}

function reset(form) {
    // Go through all the form values and reset their values
    for (var i = 0; i < form.length; i++) {
        form.elements[i].value = "";
    }
}