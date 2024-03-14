// humburger menu
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// animasi angka data
function startCounting(targetId, end, duration) {
  let start = 0;
  let span = document.getElementById(targetId);
  let interval = setInterval(() => {
    let step = Math.ceil((end - start) / ((duration * 1000) / 60));
    start += step;
    span.innerText = start;
    if (start >= end) {
      clearInterval(interval);
      span.innerText = end;
    }
  }, 1000 / 60);
}

startCounting("acara", 253, 3);
startCounting("anggota", 2630, 3);
startCounting("provinsi", 27, 3);

let slideIndex = 0;

function moveSlider(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  let slides = document.querySelectorAll(".slider img");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  let slider = document.querySelector(".slider");
  let slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

  // Update preview
  let title = slides[slideIndex].getAttribute("alt");

  // Update preview
  let preview = document.getElementById("preview");
  preview.innerHTML = `${title}`;
}

// Tampilkan slide pertama saat halaman dimuat
showSlides();

// Tambahkan event listener untuk mencegah default action saat ikon panah diklik
document.querySelector(".prev").addEventListener("click", function (event) {
  event.preventDefault();
  moveSlider(-1);
});

document.querySelector(".next").addEventListener("click", function (event) {
  event.preventDefault();
  moveSlider(1);
});

// Section Event
function openEvent(evt, eventName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("show");
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(eventName).classList.add("show");
  evt.currentTarget.classList.add("active");
}

document.querySelector(".tab button").click();

// Section Hubungi

function handleGetFormData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let city = document.getElementById("city").value;
  let zipCode = document.getElementById("zip-code").value;
  let message = document.getElementById("message").value;
  let status = document.getElementById("status").checked;

  return {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    message: message,
    status: status,
  };
}

function isNumber(string) {
  if (isNaN(string)) {
    return false;
  } else {
    return true;
  }
}

function checkboxIsChecked() {
  let status = document.getElementById("status");
  if (status.checked == true) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(handleGetFormData) {
  if (
    handleGetFormData !== null &&
    isNumber(handleGetFormData.zipCode) &&
    checkboxIsChecked()
  ) {
    return true;
  } else {
    return false;
  }
}

function submit() {
  let divWarning = document.getElementById("warning");
  if (validateFormData(handleGetFormData()) == false) {
    divWarning.textContent = "Periksa form anda sekali lagi";
    divWarning.style.display = "block";
  } else {
    divWarning.textContent = "";
  }

  return divWarning;
}

const btnSubmit = document.getElementById("submit-form");
btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});
