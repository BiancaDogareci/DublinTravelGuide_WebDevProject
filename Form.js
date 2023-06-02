
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector("button[type='submit']");
    const container = document.getElementById("container");
    const counter = document.getElementById("counter");

    submitButton.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();

        const fullNameInput = document.getElementById("fname");
        const emailInput = document.getElementById("email");
        const gradeInput = document.getElementById("quantity");

        const fullName = fullNameInput.value;
        const email = emailInput.value;
        const grade = gradeInput.value;

        // Check if all fields meet the required patterns
        const fullNamePattern = /^[a-zA-Z\s]{3,30}$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const gradePattern = /^(10|[1-9])$/;

        // Check if inputs are valid
        const isFullNameValid = fullNamePattern.test(fullName);
        const isEmailValid = emailPattern.test(email);
        const isGradeValid = gradePattern.test(grade);

        // Apply faded red color to invalid inputs
        if (!isFullNameValid) {
            fullNameInput.style.borderColor = "rgba(255, 0, 0, 0.638)";
        } else {
            fullNameInput.style.borderColor = "white";
        }

        if (!isEmailValid) {
            emailInput.style.borderColor = "rgba(255, 0, 0, 0.638)";
        } else {
            emailInput.style.borderColor = "white";
        }

        if (!isGradeValid) {
            gradeInput.style.borderColor = "rgba(255, 0, 0, 0.638)";
        } else {
            gradeInput.style.borderColor = "white";
        }

        // Check if all inputs are valid
        if (isFullNameValid && isEmailValid && isGradeValid) {
            // Retrieve existing submissions from local storage
            let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

            // Create a new submission object
            const newSubmission = {
                fullName: fullName,
                email: email,
                grade: grade
            };

            // Add the new submission to the array
            submissions.push(newSubmission);

            // Save the updated submissions array in local storage
            localStorage.setItem("submissions", JSON.stringify(submissions));

            // Increment the counter
            let count = localStorage.getItem("counter") || 0;
            count++;
            localStorage.setItem("counter", count);

            // Display the counter
            counter.innerHTML = `TOTAL SUBMISSIONS:<br><span>${count}</span>`;

            const feedback = document.createElement("p");
            feedback.textContent = `Full Name: ${fullName}, Grade: ${grade}`;
            feedback.classList.add("submissions");
            container.appendChild(feedback);

            fullNameInput.value = "";
            emailInput.value = "";
            gradeInput.value = "";

            // Clear feedback field
            document.getElementById("idname").value = "";
        }
    });

    // Retrieve and display the submissions from local storage on page load
    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.forEach(function (submission) {
        const feedback = document.createElement("p");
        feedback.textContent = `Full Name: ${submission.fullName}, Grade: ${submission.grade}`;
        feedback.classList.add("submissions");
        container.appendChild(feedback);
    });

    // Retrieve and display the counter on page load
    let count = localStorage.getItem("counter") || 0;
    counter.innerHTML = `TOTAL SUBMISSIONS:<br><span>${count}</span>`;
    counter.style.color = "rgba(147, 202, 155)";
    counter.style.fontSize = "1em";
    counter.style.textAlign = "center";
});




document.addEventListener("DOMContentLoaded", function() {
    const advertisement = document.getElementById("advertisement");
    const replacementText = "Body & Soul Festival 2023<br>Ballinlough Castle, Clonmellon, Ireland<br> ARTISTS:<br>Moderat, The Blaze, Fever Ray, Alison Goldfrapp, The Blessed Madonna, Kojaque, Denise Chaila, Kneecap, Gemma Dunleavy, The Murderer Capital<br> and so many others!";

    document.addEventListener("keydown", function(event) {
      if (event.key === "x") {
        advertisement.innerHTML = replacementText;
        advertisement.style.display = "block";
      }
    });
  });


  




  const nav = document.querySelector('nav');

  nav.addEventListener('click', function(event) {
    const clover = document.createElement('img');
    clover.src = 'Photos/clover.png';
    clover.classList.add('clover');
    const navRect = nav.getBoundingClientRect();
    const navWidth = navRect.width;
    const navHeight = navRect.height;
    const cloverSize = Math.random() * 50 + 30; // Random size between 30px and 80px
    const cloverX = Math.random() * (navWidth - cloverSize);
    const cloverY = Math.random() * (navHeight - cloverSize) + navRect.top + window.scrollY;
    clover.style.width = cloverSize + 'px';
    clover.style.left = cloverX + 'px';
    clover.style.top = cloverY + 'px';
    clover.style.pointerEvents = 'none'; // Prevent the clover from capturing click events

    nav.appendChild(clover);

    setTimeout(function() {
        clover.style.opacity = '0'; // Fade out the clover
      }, 10); // Delay the fade-out effect by 10 milliseconds

    setTimeout(function() {
        clover.remove(); // Remove the clover after 2 seconds
      }, 5000);
  });



  /* Adding the same color to another ekement */
  document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById("counter");
    const colorElements = document.querySelectorAll(".color");
  
    // Get the computed color style of the counter element
    const computedColor = getComputedStyle(counter).color;
  
    // Apply the computed color style to elements with the "color" class
    colorElements.forEach(function(element) {
      element.style.color = computedColor;
    });
  
    document.addEventListener("click", function() {
      // Code for the click event
    });
  });
  