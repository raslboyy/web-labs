var header1 = document.getElementById('HEADER');

window.onscroll = function () {
  console.log(this.oldScroll > this.scrollY);
  if (this.oldScroll > this.scrollY) {
    header1.style.position = "sticky";
  }
  else {
    header1.style.position = "static";
  }
  this.oldScroll = this.scrollY;
};


