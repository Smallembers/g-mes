function openGXMEHub() {
  document.getElementById('gxme-hub').style.display = 'block';
  // optionally hide other sections like kahoot or menu
  const kahootFrame = document.getElementById('kahoot-frame');
  if (kahootFrame) kahootFrame.style.display = 'none';
}
