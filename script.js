function showMemory(memoryType) {
  const memoryDisplay = document.getElementById('memory-display');
  const memoryImage = document.getElementById('memory-image');

  if (memoryType === 'day-we-met') {
    memoryImage.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'; // Replace with your image URL
    memoryDisplay.classList.remove('hidden');
  }
}

function showMessage() {
  const secretMessage = document.getElementById('secretMessage');
  secretMessage.classList.remove('hidden');
}
