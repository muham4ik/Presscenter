$(document).ready(function () {
  'use strict';
  $('#hidder_search').click(function () {
    var $input = $(this).siblings('input[type="text"]');
    if ($input.width() === 0) {
      $input.animate({ width: '250px' });
      $input.focus();
      $input.focusout(function () {
        if ($input.val() == "") {
          $input.animate({ width: '0' });
        }
      });
    } else {
      if ($input.val() == "") {
        $input.animate({ width: '0' });
      }
    }
  });



  /* Gather all tab elements */
  let allTabs2 = [...document.querySelectorAll('.tab2')];
  let allTabContent2 = [...document.querySelectorAll('.tab-content2')];

  const handleTab2 = (evt) => {
    allTabContent2.forEach(tc => tc.style.display = 'none');
    document.querySelector(`#${evt.target.dataset.linkid}`).style.display = 'block';
    allTabs2.forEach(t => t === evt.target ? t.classList.add('active-tab2') : t.classList.remove('active-tab2'));
  }
  allTabs2.forEach(t => t.addEventListener('click', handleTab2));

  /* Gather all tab elements */
  let allTabs4 = [...document.querySelectorAll('.tab4')];
  let allTabContent4 = [...document.querySelectorAll('.tab-content4')];

  const handleTab4 = (evt) => {
    allTabContent4.forEach(tc => tc.style.display = 'none');
    document.querySelector(`#${evt.target.dataset.linkid}`).style.display = 'block';
    allTabs4.forEach(t => t === evt.target ? t.classList.add('active-tab4') : t.classList.remove('active-tab4'));
  }
  allTabs4.forEach(t => t.addEventListener('click', handleTab4));



  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  /* Gather all tab elements */
  let allTabs = [...document.querySelectorAll('.tab')];
  let allTabContent = [...document.querySelectorAll('.tab-content')];

  const handleTab = (evt) => {
    allTabContent.forEach(tc => tc.style.display = 'block');
    document.querySelector(`#${evt.target.dataset.linkid}`).style.display = 'block';
    allTabs.forEach(t => t === evt.target ? t.classList.add('active-tab') : t.classList.remove('active-tab'));
  }
  allTabs.forEach(t => t.addEventListener('click', handleTab));



  function search_on_servises() {
    let isMobile = window.innerWidth <= 768; // Ekran kengligi mobil uchun 768px yoki undan kichik bo'lsa
    let searchBlocks = document.querySelectorAll(isMobile ? '.searchBlocks.mobile' : '.searchBlocks.desktop');


    if ($("#searchInput").val() !== "") {
      console.log('!');
      $("#desktopBlock1").css("display", "none");
      $("#results_search").css("display", "none");
      $("#spinner").css("display", "block");
      setTimeout(function () {
        $("#spinner").css("display", "none");
        $("#results_search").html('<div class="results-container"><div class="result">Результат 1</div><div class="result">Результат 2</div></div>').css("display", "block");
      }, 2000);
    }
  }


  $("#searchInput_btn").click(function () { search_on_servises(); });

  $("#searchInput").focusout(function () {
    if ($("#searchInput").val() == "") {
      $("#spinner").css("display", "none");
      $("#desktopBlock1").css("display", "block");
      $("#results_search").css("display", "none");
    }
  });


  document.getElementById('searchInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      search_on_servises();
    }
  });

});











// input validation
const inputs = document.querySelectorAll('input[name]');
const patterns = {
  iName: /^[A-Za-zА-Яа-яЁё]+$/,
  iNumber: /^(\+7|8)?\d{10}$/,
  iEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
};
const minLengths = {
  iName: 5
};
const messages = {
  iName: 'Неверный формат имени',
  iNumber: 'Неверный формат телефона',
  iEmail: 'Неверный формат e-mail'
};

function validateInput(input) {
  const name = input.name;
  const value = input.value.trim();
  const pattern = patterns[name];
  const minLength = minLengths[name] || 0;
  const output = input.nextElementSibling;

  if (value === "") {
    output.style.display = 'none';
    input.classList.remove('error_inp');
  } else if (value.length <= minLength && name === 'iName') {
    output.innerHTML = messages[name];
    output.style.display = 'block';
    input.classList.add('error_inp');
  } else if (!pattern.test(value)) {
    output.innerHTML = messages[name];
    output.style.display = 'block';
    input.classList.add('error_inp');
  } else {
    output.style.display = 'none';
    input.classList.remove('error_inp');
  }
}

inputs.forEach(input => {
  input.addEventListener('input', () => validateInput(input));
});


var swiper = new Swiper(".mySwiper6", {
  slidesPerView: 3.5,
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  loopedSlides: 7,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 55,
      slideToClickedSlide: true,
      centeredSlides: false,
    },
    // when window width is >= 480px
    400: {
      slidesPerView: 1,
      spaceBetween: 40,
      slideToClickedSlide: true,
      centeredSlides: false,
    },
    490: {
      slidesPerView: 1.5,
      spaceBetween: 40,
      slideToClickedSlide: true,
      centeredSlides: false,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 2.5,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
    1260: {
      slidesPerView: 3.8,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
  }
});




try {
  $(document).ready(function () {
    $(function () {
      'use strict';
      $('i').click(function () {
        $(this).next().animate({
          // width: '250px'
        });
      });
    });
  });
} catch (error) {
  console.error(error);
}




let fileList = [];

function handleFiles(files) {
  const fileInput = document.getElementById('fileInput');
  const fileListContainer = document.getElementById('fileList');

  for (let i = 0; i < files.length; i++) {
    if (fileList.length >= 5) {
      alert('Можно добавить до 5 файлов');
      break;
    }

    const file = files[i];
    const fileSize = (file.size / 1024).toFixed(2); // Размер в килобайтах
    const fileName = file.name;

    const fileItem = document.createElement('div');
    fileItem.className = 'file-list-item';
    fileItem.innerHTML = `
            <span>${fileName} (${fileSize} Кбайт)</span>
            <button onclick="removeFile(${fileList.length})">X</button>
        `;

    fileList.push(file);
    fileListContainer.appendChild(fileItem);
  }

  // Clear the file input
  fileInput.value = '';
}

function removeFile(index) {
  fileList.splice(index, 1);
  updateFileList();
}

function updateFileList() {
  const fileListContainer = document.getElementById('fileList');
  fileListContainer.innerHTML = '';

  fileList.forEach((file, index) => {
    const fileSize = (file.size / 1024).toFixed(2); // Размер в килобайтах
    const fileName = file.name;

    const fileItem = document.createElement('div');
    fileItem.className = 'file-list-item';
    fileItem.innerHTML = `
            <span>${fileName} (${fileSize} Кбайт)</span>
            <button onclick="removeFile(${index})">X</button>
        `;

    fileListContainer.appendChild(fileItem);
  });
}




var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 5.1,
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  loopedSlides: 7,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    440: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    660: {
      slidesPerView: 3,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    1000: {
      slidesPerView: 3.5,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
    1260: {
      slidesPerView: 5.1,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3,
      spaceBetween: 16,
      slideToClickedSlide: true,
      centeredSlides: true,
    },
    395: {
      slidesPerView: 1.45,
      spaceBetween: 16,
      slideToClickedSlide: true,
      centeredSlides: true,
    },
    440: {
      slidesPerView: 1.6,
      spaceBetween: 16,
      slideToClickedSlide: true,
      centeredSlides: true,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 16,
      slideToClickedSlide: true,
      centeredSlides: true,
    },
    676: {
      slidesPerView: 2.5,
      spaceBetween: 16,
      slideToClickedSlide: true,
      centeredSlides: true,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 16,
      slideToClickedSlide: true,
      centeredSlides: true,
    },
    991: {
      slidesPerView: 2.2,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
    1100: {
      slidesPerView: 2.5,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
    1300: {
      slidesPerView: 2.8,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },

  }
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  loopedSlides: 7,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 0.8,
      spaceBetween: 20,
      slideToClickedSlide: true,
      centeredSlides: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    650: {
      slidesPerView: 1,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    1000: {
      slidesPerView: 2.3,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
    1260: {
      slidesPerView: 3,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
  },

});

var swiper = new Swiper(".mySwiper4", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 3.5,
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  loopedSlides: 7,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    650: {
      slidesPerView: 1,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    1000: {
      slidesPerView: 2.5,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
    1260: {
      slidesPerView: 3.1,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
  },
});

var swiper = new Swiper(".mySwiper8", {
  slidesPerView: 6,
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  loopedSlides: 7,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".mySwiper8_arrow .swiper-button-next",
    prevEl: ".mySwiper8_arrow .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    440: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    660: {
      slidesPerView: 3,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
    1260: {
      slidesPerView: 6,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
  },
});

var swiper = new Swiper(".mySwiper9", {
  slidesPerView: 6,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 5,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
  }
});



// Fany modal
document.querySelectorAll('.fanyImgTab').forEach(function (tab) {
  tab.addEventListener('click', function () {
    const imgSrc = tab.src; // Get the src attribute directly from the clicked tab
    if (imgSrc) {
      document.querySelector('.fany-img').src = imgSrc;
      document.querySelector('.fany-modal').classList.add('active');
    } else {
      console.error('Image source is missing!');
    }
  });
});

document.querySelector('.fany-close').addEventListener('click', function () {
  document.querySelector('.fany-modal').classList.remove('active');
});

document.querySelector('.fany_wrap').addEventListener('click', function (event) {
  event.stopPropagation();
});

document.querySelector('.fany-modal').addEventListener('click', function () {
  document.querySelector('.fany-modal').classList.remove('active');
});





document.addEventListener('DOMContentLoaded', () => {
  // Bars
  const menuBtn = document.querySelector('.menu__btn');
  const menuBox = document.querySelector('.menu__box');
  const body = document.body;

  menuBtn.addEventListener('click', () => {
    menuBox.classList.toggle('active');
    if (menuBox.classList.contains('active')) {
      body.classList.add('noscroll');
    } else {
      body.classList.remove('noscroll');
    }
  });


  // Item text more
  const textMoreButtons = document.querySelectorAll('.text_more');

  textMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const itemWrap = button.closest('.item_wrap');
      button.classList.add('active');
      itemWrap.classList.add('active');
    });
  });

});


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



document.addEventListener('DOMContentLoaded', function () {
  var contentBlocks = document.querySelectorAll('.content-block');

  contentBlocks.forEach(function (block) {
    var showMoreBtn = block.querySelector('.show-more-btn');
    var hiddenContent = block.querySelector('.hidden-content');
    var text = block.querySelector('.text');
    var originalText = text.textContent;

    showMoreBtn.addEventListener('click', function () {
      hiddenContent.style.display = 'block';
      showMoreBtn.style.display = 'none';
      text.textContent = originalText.slice(0, -3); 
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  var contentBlocks = document.querySelectorAll('.content-block');

  contentBlocks.forEach(function (block) {
    var showMoreBtn = block.querySelector('.show-more-btn');
    var hiddenContent = block.querySelector('.hidden-content');
    var text = block.querySelector('.text');
    var originalText = text.textContent; // Matnni saqlab qo'yamiz

    showMoreBtn.addEventListener('click', function () {
      hiddenContent.style.display = 'block';
      showMoreBtn.style.display = 'none';
      text.textContent = originalText.slice(0, -3); // Uchta nuqtani olib tashlaymiz
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const setupTabs = (buttonsSelector, blocksSelector) => {
    const buttons = document.querySelectorAll(buttonsSelector);
    const blocks = document.querySelectorAll(blocksSelector);
    let isBelow999px = window.matchMedia('(max-width: 999px)').matches;

    const removeActiveClasses = () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      blocks.forEach(block => block.classList.remove('active'));
    };

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const index = Array.from(buttons).indexOf(button) + 1;
        const activeBlock = document.querySelector(`#blockRight${index}`);

        removeActiveClasses();

        if (!button.classList.contains('active')) {
          button.classList.add('active');
          if (activeBlock) activeBlock.classList.add('active');
        }
      });
    });

    const mediaQuery = window.matchMedia('(max-width: 999px)');
    const handleMediaChange = (e) => {
      isBelow999px = e.matches;
      if (!isBelow999px) {
        removeActiveClasses();
      }
    };

    mediaQuery.addListener(handleMediaChange);
    handleMediaChange(mediaQuery);
  };

  setupTabs('.block_feat_dec button', '.text_block_right');
  setupTabs('.block_tab-mob button', '.text_block_right');
});





document.addEventListener('DOMContentLoaded', () => {
  const blockBtnValue = document.querySelector('.accordion-button.block_btn-value');
  const buttons = document.querySelectorAll('.block_tab-mob button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      blockBtnValue.textContent = button.textContent;
    });
  });
});




const imgInputHelper = document.getElementById("add-single-img");
const imgInputHelperLabel = document.getElementById("add-img-label");
const imgContainer = document.querySelector(".custom__image-container");
const imgFiles = [];

const addImgHandler = () => {
  const file = imgInputHelper.files[0];
  if (!file) return;
  // Generate img preview
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const newImg = document.createElement("img");
    newImg.src = reader.result;
    imgContainer.insertBefore(newImg, imgInputHelperLabel);
  };
  // Store img file
  imgFiles.push(file);
  // Reset image input
  imgInputHelper.value = "";
  return;
};
imgInputHelper.addEventListener("change", addImgHandler);

const getImgFileList = (imgFiles) => {
  const imgFilesHelper = new DataTransfer();
  imgFiles.forEach((imgFile) => imgFilesHelper.items.add(imgFile));
  return imgFilesHelper.files;
};

const customFormSubmitHandler = (ev) => {
  ev.preventDefault();
  const firstImgInput = document.getElementById("image-input");
  firstImgInput.files = getImgFileList(imgFiles);
  // submit form to server, etc
};
document
  .querySelector(".custom__form")
  .addEventListener("submit", customFormSubmitHandler);






function copyToClipboard() {
  let val = 'text to copy';
  const selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = val;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
  document.body.removeChild(selBox);
  alert('text copied to clipboard');
}



