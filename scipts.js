const canvas = document.getElementById('signature-canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  const signature = canvas.toDataURL();
  document.getElementById('signature').value = signature;
  updateSignaturePreview(signature);
});

function updateSignaturePreview(signature) {
  const signaturePreview = document.getElementById('signature-preview');
  signaturePreview.src = signature;
  signaturePreview.style.display = 'block';
}
function clearSignature() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
}
