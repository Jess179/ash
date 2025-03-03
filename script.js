let isAnimationVisible = false;

function toggleAnimation() {
  const animationContainer = document.getElementById('animation-container');
  if (!isAnimationVisible) {
    // Show the animation
    animationContainer.classList.remove('hidden');
    isAnimationVisible = true;
  } else {
    // Hide the animation
    animationContainer.classList.add('hidden');
    isAnimationVisible = false;
  }
}

function showMessage() {
  const secretMessage = document.getElementById('secretMessage');
  secretMessage.classList.remove('hidden');
}
