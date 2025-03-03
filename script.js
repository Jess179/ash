let isAnimationVisible = false;

function toggleAnimation() {
  const animationContainer = document.getElementById('animation-container');
  const walkingGirl = document.getElementById('walking-girl');

  if (!isAnimationVisible) {
    // Show the animation
    animationContainer.classList.remove('hidden');
    walkingGirl.style.animation = 'walkIn 2s forwards';
    isAnimationVisible = true;
  } else {
    // Hide the animation
    walkingGirl.style.animation = 'walkOut 2s forwards';
    setTimeout(() => {
      animationContainer.classList.add('hidden');
    }, 2000); // Wait for the animation to finish
    isAnimationVisible = false;
  }
}

function showMessage() {
  const secretMessage = document.getElementById('secretMessage');
  secretMessage.classList.remove('hidden');
}
