const bar = document.getElementById('bar');
const nav = document.querySelector('.navbar');
const close = document.getElementById('close');

bar.addEventListener("click", (event) => {
  nav.style.display = 'block';
  event.stopPropagation(); 
});

close.addEventListener("click", (event) => {
  nav.style.display = 'none';
  event.stopPropagation();// Prevent this click from bubbling to document
});

document.addEventListener("click", (event) => {
  if (
    nav.style.display === 'block' &&
    !nav.contains(event.target) &&
    event.target !== bar
  ) {
    nav.style.display = 'none';
  }
});

// Small image gallery logic
const mainImage = document.getElementById("main-image");
const smallImages = document.querySelectorAll(".small-img");

smallImages.forEach(img => {
  img.addEventListener("click", () => {
    mainImage.src = img.src;
  });
});

const readMore = document.querySelectorAll(".read-more");
const moreInfo = document.getElementById("more-info");

// Add event listeners to all .read-more buttons
readMore.forEach(btn => {
  btn.addEventListener("click", (event) => {
    moreInfo.style.display = 'block';
    event.stopPropagation();
  });
});

// Hide more-info when clicking outside of it and not on any .read-more button
document.addEventListener("click", (event) => {
  const isReadMore = Array.from(readMore).some(btn => btn.contains(event.target));
  if (
    moreInfo.style.display === 'block' &&
    !moreInfo.contains(event.target) &&
    !isReadMore
  ) {
    moreInfo.style.display = 'none';
  }
});