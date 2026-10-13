const imageInput = document.getElementById("imageInput");
const gallery = document.getElementById("galleryContainer");

function addImage(path = imageInput.value.trim()) {
    if (!path) return;

    const card = document.createElement("div");
    card.className = "gallery-card";

    const image = document.createElement("img");
    image.src = path;
    image.alt = path;

    image.addEventListener("error", () => {
        card.remove();
        alert(`Could not load "${path}". Check the filename and extension.`);
    }, { once: true });

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "btn-remove-card";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => card.remove());

    card.append(image, removeButton);
    gallery.appendChild(card);
    imageInput.value = "";
}

function fillSample(fileName) {
    addImage(fileName);
}

document.getElementById("addImageBtn").addEventListener("click", () => addImage());

imageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addImage();
});