let newDestination = document.getElementById("newDestinationForm");

newDestination.onsubmit = (event) => {
    event.preventDefault(); // stop the form from refreshing the page

    let name = event.target.destination.value;
    let loc = event.target.location.value;
    let url = event.target.photo.value;
    let description = event.target.description.value;

    wishlist_container.innerHTML +=
        `<li class = "card destinationCard">
            <img src = "${url}"></img>
            <h1>${name}</h1>
            <h2>${loc}</h2>
            <button id="delete_btn">Delete</button>
            <button id="edit_btn">Edit</button>
        </li>`;

    // Reset the form elements values for a new entry
    newDestination.reset();
}

onclick = (event) => {
    if (event.target.matches("button#delete_btn")) {
        event.target.parentNode.remove();
    } else if (event.target.matches("button#edit_btn")) {
        let editDest = prompt("Enter new destination name: ");
        let editLoc = prompt("Enter the new location: ");
        let editURL = prompt("Enter new photo url: ");

        event.target.parentNode.innerHTML =
            `<li class = "card destinationCard">
            <img src = "${editURL}"></img>
            <h1>${editDest}</h1>
            <h2>${editLoc}</h2>
            <button id="delete_btn">Delete</button>
            <button id="edit_btn">Edit</button>
        </li>`;
    }
}