
// ==========================================
// Task 1: Interactive Form Handling
// ==========================================

const form = document.getElementById("feedback-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("form-message");

    if (username !== "" && email !== "") {
        message.textContent =
            "Thank you for visiting, " + username +
            "! We will contact you at " + email + ".";
    } else {
        message.textContent = "Please fill in your username and email.";
    }
});


// ==========================================
// Task 2: Table Row Highlighting
// ==========================================

const rows = document.querySelectorAll("#menu-table tr");

rows.forEach(function(row) {

    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#fff0c2";
    });

    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });

});


// ==========================================
// Task 3: Light/Dark Mode
// ==========================================

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


// ==========================================
// Task 4: Order Total Calculator
// ==========================================

const checkboxes = document.querySelectorAll(".menu-checkbox");
const totalDisplay = document.getElementById("total");

function calculateTotal() {
    let total = 0;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            total = total + Number(checkbox.value);
        }
    });

    totalDisplay.textContent = "Total: $" + total;
}

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", calculateTotal);
});


// ==========================================
// Task 5: Age Verification and Discount
// ==========================================

const birthYearInput = document.getElementById("birth-year");
const checkAgeButton = document.getElementById("check-age");
const discountMessage = document.getElementById("discount-message");

checkAgeButton.addEventListener("click", function() {

    const birthYearText = birthYearInput.value.trim();
    const birthYear = parseInt(birthYearText, 10);
    const currentYear = 2026;

    if (birthYearText === "" ||
        !/^\d{4}$/.test(birthYearText) ||
        isNaN(birthYear) ||
        birthYear > currentYear ||
        birthYear < 1900) {

        discountMessage.textContent =
            "Please enter a valid four-digit birth year.";

        return;
    }

    const age = currentYear - birthYear;

    if (age >= 18 && age <= 25) {
        discountMessage.textContent =
            "You are " + age +
            " years old. You qualify for the student-age discount!";

    } else if (age >= 60) {
        discountMessage.textContent =
            "You are " + age +
            " years old. You qualify for the senior discount!";

    } else {
        discountMessage.textContent =
            "You are " + age +
            " years old. No age-based discount is available.";
    }
});


// ==========================================
// Task 6: Read More / Read Less
// ==========================================

const readMoreButton = document.getElementById("read-more");
const extraText = document.getElementById("extra-text");

readMoreButton.addEventListener("click", function() {

    extraText.classList.toggle("hidden");

    if (extraText.classList.contains("hidden")) {
        readMoreButton.textContent = "Read More";
    } else {
        readMoreButton.textContent = "Read Less";
    }
});


// ==========================================
// Task 7: Live Category Filter
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const menuRows = document.querySelectorAll("#menu-table tr");
const orderItems = document.querySelectorAll(".order-item");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.filter;

        // Filter menu table rows
        menuRows.forEach(function(row) {

            if (selectedCategory === "all" ||
                row.dataset.category === selectedCategory) {

                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });

        // Filter order list items
        orderItems.forEach(function(item) {

            if (selectedCategory === "all" ||
                item.dataset.category === selectedCategory) {

                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });

        // Highlight the selected filter button
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");
    });
});


// ==========================================
// Task 8: Dynamic Opening Status
// ==========================================

const openingStatus = document.getElementById("opening-status");

const currentHour = new Date().getHours();

if (currentHour >= 8 && currentHour < 20) {

    openingStatus.textContent = "We are Open!";
    openingStatus.style.color = "lightgreen";

} else {

    openingStatus.textContent = "Closed - Open at 8 AM";
    openingStatus.style.color = "#ff7777";
}


// ==========================================
// Task 9: Live Character Counter
// ==========================================

const specialNotes = document.getElementById("special-notes");
const characterCount = document.getElementById("char-count");

specialNotes.addEventListener("input", function() {

    const remaining = 100 - specialNotes.value.length;

    characterCount.textContent =
        remaining + " characters remaining";
});

