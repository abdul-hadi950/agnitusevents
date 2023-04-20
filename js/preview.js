let previewContainer = document.querySelector('.event-preview');
let previewBoxes = document.querySelectorAll('.preview ');

document.querySelectorAll('.event-container .portfolio-overlay').forEach(event => {
  event.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = event.getAttribute('data-name');
    previewBoxes.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      } else {
        preview.classList.remove('active');
      }
    });
  };
});

previewBoxes.forEach(close => {
    close.querySelector('.fa-x').onclick = () => {
        close.classList.remove('active')
        previewContainer.style.display = 'none';
    }
})

previewBoxes.forEach(close => {
    close.querySelector('.buy').onclick = () => {
        close.classList.remove('active')
        previewContainer.style.display = 'none';
    }
})




