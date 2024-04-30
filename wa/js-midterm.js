document.getElementById('volumeSlider').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('volumeValue').textContent = value + '%';
  });
  