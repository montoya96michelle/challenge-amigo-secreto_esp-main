let friends = [];
let drawnFriend = "";
let minFriendsRequired = 2;

// Button: Add friend to the list
function addFriend() {
    let name = document.getElementById('friend').value;
    if (name === "" || Number(name)) {
        alert("Please enter a valid name.");
        clearInput();
        return;
    }
    friends.push(name);
    clearInput();
    focusInput();
    renderFriendList();
}

// Focus the input field after each entry
function focusInput() {
    document.getElementById('friend').focus();
}

// Clear the input field text
function clearInput() {
    document.getElementById('friend').value = "";
}

// Render the updated list of friends
function renderFriendList() {
    let list = document.getElementById('friendsList');
    list.innerHTML = ""; // Empty the content

    for (let i = 0; i < friends.length; i++) {
        list.innerHTML += `<li>${friends[i]}</li>`;
    }
}

// Draw a random friend
function drawFriend() {
    if (friends.length < minFriendsRequired) {
        alert("Please add at least two friends to proceed.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * friends.length);
    drawnFriend = friends[randomIndex];

    let resultDisplay = document.getElementById('result');
    resultDisplay.innerHTML = `The drawn secret friend is: ${drawnFriend}`;
    
    document.getElementById('drawButton').setAttribute("disabled", "true");
}
