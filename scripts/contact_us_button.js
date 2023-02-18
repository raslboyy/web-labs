var contact_us_button = document.getElementById("contact-us-button");
var contact_us_background = document.getElementsByClassName("contact-us-background")[0];
var lds_ring = document.getElementsByClassName("lds-ring")[0];
var contact_us_form_submite = document.getElementById("contact-us-form-submite");
var contact_us_close = document.getElementById("contact-us-close");
var contact_us_reload = document.getElementById("contact-us-reload");
var contact_us_form = document.getElementById("contact-us-form");

function refresh_form() {
  contact_us_form.style.display = "none";
  lds_ring.style.display = "inline-block";
  getRandomPost().then((data) => {
    contact_us_form.elements["title"].value = data["title"];
    contact_us_form.elements["message"].value = data["body"];
    lds_ring.style.display = "none";
    contact_us_form.style.display = "block";
  },
    error => { contact_us_form.elements["message"].value = "⚠ Что-то пошло не так"; }
  );
}

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    contact_us_button.style.display = "block";
  } else {
    contact_us_button.style.display = "none";
  }
};

contact_us_button.addEventListener("click", () => {
  refresh_form();
  contact_us_background.style.display = "block";
  console.log("contact_us_button click");
});

contact_us_reload.addEventListener("click", () => {
  refresh_form();
});

function close_() {
  contact_us_background.style.display = "none";
}

contact_us_form_submite.addEventListener('click', close_);
contact_us_close.addEventListener('click', close_);
