const cards = document.querySelectorAll('[data-tilt-card]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setCardVars(card, clientX, clientY) {
  const rect = card.getBoundingClientRect();
  const px = (clientX - rect.left) / rect.width;
  const py = (clientY - rect.top) / rect.height;
  const rx = (0.5 - py) * 9;
  const ry = (px - 0.5) * 11;
  card.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
  card.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
  card.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
  card.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
}

if (!reduceMotion) {
  for (const card of cards) {
    card.addEventListener('pointermove', (event) => setCardVars(card, event.clientX, event.clientY));
    card.addEventListener('pointerenter', () => card.classList.add('is-active'));
    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-active');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '50%');
    });
  }
}

for (const video of document.querySelectorAll('video')) {
  if (!video.autoplay) continue;

  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  const startVideo = () => video.play().catch(() => {});

  video.addEventListener('canplay', startVideo, { once: true });
  video.addEventListener('error', () => {
    video.setAttribute('aria-label', `${video.getAttribute('aria-label') || '영상'} 파일을 불러오지 못했습니다`);
  });
  startVideo();
}
