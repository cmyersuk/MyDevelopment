// file-viewer.js
// Handles file selection and display for .txt files

document.addEventListener('DOMContentLoaded', () => {
    const browseButton = document.querySelector('.browse-button');
    const fileInput = document.getElementById('txt-file-input');
    const filePanel = document.getElementById('file-panel');
    const fileName = document.getElementById('file-name');
    const fileContent = document.getElementById('file-content');

    // Trigger file input when button is clicked
    browseButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Verify file extension
        if (!file.name.endsWith('.txt')) {
            fileContent.textContent = 'Error: Please select a .txt file.';
            return;
        }

        // Read file contents
        const reader = new FileReader();
        reader.onload = (event) => {
            fileName.textContent = file.name;
            fileContent.textContent = event.target.result;
            filePanel.style.display = 'block';
        };
        reader.onerror = () => {
            fileContent.textContent = 'Error: Could not read file.';
        };
        reader.readAsText(file);
    });
});
