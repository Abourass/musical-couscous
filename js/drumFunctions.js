const removeTransition = function(e){
  if (e.propertyName !== 'transform') return; // skip if it's not a transform event
  this.classList.remove('playing')
};

const playSound = function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key =  document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio){return}
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playSound);
