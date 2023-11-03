//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    // This function will be executed when the DOM is fully loaded.
    const body = document.body;

    // Create a text node with the message and append it to the body.
    const textNode = document.createTextNode("DOM load success");
    body.appendChild(textNode);
});
