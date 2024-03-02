const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
let isSwapped = false;

const responseDiv = document.getElementById('response');
const newContentDiv = document.getElementById('newContent');

yesBtn.addEventListener('click', () => {
  // Show the response
  responseDiv.classList.remove('hidden');
  
  // Hide the question
  document.querySelector('.question').classList.add('hidden');
  
  // Show the new content
  newContentDiv.classList.remove('hidden');
  
  // Replace the old GIF with the new one
  const responseImg = document.getElementById('responseImg');
  responseImg.src = 'new_gif.gif';
  
  // Replace the old text with the new one
  const responseText = document.getElementById('responseText');
  responseText.textContent = 'New text content';
});

  
noBtn.addEventListener('mouseover', () => {
  // Toggle the positions of the buttons
  const parent = noBtn.parentElement;
  if (isSwapped) {
    parent.insertBefore(noBtn, yesBtn);
    isSwapped = false;
  } else {
    parent.insertBefore(yesBtn, noBtn);
    isSwapped = true;
  }
  
  
  
});




