// Cake Carousel - Update Hero Model on Click
document.addEventListener('DOMContentLoaded', function() {
  const heroModelViewer = document.getElementById('heroModelViewer');
  const cakeSlides = document.querySelectorAll('.cake-slide');
  
  // Add click event to each cake slide
  cakeSlides.forEach(slide => {
    slide.addEventListener('click', function() {
      const cakeSrc = this.getAttribute('data-cake-src');
      const cakeName = this.getAttribute('data-cake-name');
      
      // Update hero model viewer
      if (heroModelViewer && cakeSrc) {
        heroModelViewer.src = cakeSrc;
        heroModelViewer.alt = cakeName + ' 3D Model';
        
        // Add a visual feedback by briefly highlighting the clicked slide
        this.style.transform = 'translateY(-10px) scale(1.05)';
        setTimeout(() => {
          this.style.transform = '';
        }, 300);
      }
      
      // Scroll to hero section smoothly
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Cake Image Slider - Change main image when thumbnail is clicked
document.addEventListener('DOMContentLoaded', function() {
  const mainCakeViewer = document.getElementById('mainCakeViewer');
  const thumbnailItems = document.querySelectorAll('.thumbnail-item');
  
  if (mainCakeViewer && thumbnailItems.length > 0) {
    thumbnailItems.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const thumbnailSrc = this.getAttribute('data-src');
        const thumbnailAlt = this.getAttribute('data-alt');
        const mainSrc = mainCakeViewer.getAttribute('src');
        
        // Only change if it's a different image
        if (thumbnailSrc && thumbnailSrc !== mainSrc) {
          // Update main viewer with thumbnail image
          mainCakeViewer.src = thumbnailSrc;
          mainCakeViewer.alt = thumbnailAlt;
          
          // Update active state
          thumbnailItems.forEach(item => item.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });
  }
});

// Year update
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

