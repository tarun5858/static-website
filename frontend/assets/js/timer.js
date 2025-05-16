// Function to generate dates for the next 7 days


function generateNext7Days() {
  const dropdownContent = document.getElementById('next7DaysDropdownContent');
  dropdownContent.innerHTML = ''; // Clear existing options
  const today = new Date();
  today.setDate(today.getDate() + 1); // Start from tomorrow

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    const formattedDate = formatDate(date);
    const option = document.createElement('div');
    option.classList.add('dropdown-option');
    option.textContent = formattedDate;
    option.addEventListener('click', function () {
      document.getElementById('next7DaysDropdown').querySelector('.dropdown-button-1').textContent = formattedDate;
      toggleDropdowndate();
    });
    dropdownContent.appendChild(option);
  }
}

// Function to format date as 02 January 2023
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: '2-digit' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

// Function to toggle dropdown visibility
function toggleDropdowndate() {
  const dropdownContent = document.getElementById('next7DaysDropdownContent');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

// Generate the next 7 days dropdown on load
generateNext7Days();





function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContents");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

function selectOption(option) {
  document.getElementById("customDropdown").querySelector('.dropdown-button-2').textContent = option;
  document.getElementById("dropdownContents").style.display = "none";
}


