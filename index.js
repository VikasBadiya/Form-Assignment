function submitForm() {
          // Gather form data
          const firstName = document.getElementById("firstName").value;
          const lastName = document.getElementById("lastName").value;
          const dob = document.getElementById("dob").value;
          const country = document.getElementById("country").value;
          const gender = document.querySelectorAll('input[name="gender"]:checked');
          const profession = document.getElementById("profession").value;
          const email = document.getElementById("email").value;
          const mobile = document.getElementById("mobile").value;
      
          // Validate the form
          if (!firstName || !lastName || !dob || !country || gender.length === 0 || !profession || !email || !mobile) {
              alert("Please fill in all required fields.");
              return;
          }
      
          // Display data in the popup
          const popupContent = document.getElementById("popup-content");
          popupContent.innerHTML = `
                      <p><b>First Name:</b> ${firstName}</p>
                      <p><b>Last Name:</b> ${lastName}</p>
                      <p><b>Date of Birth:</b> ${dob}</p>
                      <p><b>Country:</b> ${country}</p>
                      <p><b>Gender:</b> ${[...gender].map(g => g.value).join(", ")}</p>
                      <p><b>Profession:</b> ${profession}</p>
                      <p><b>Email:</b> ${email}</p>
                      <p><b>Mobile Number:</b> ${mobile}</p>
                  `;
      
          // Show the popup
          document.getElementById("popup").style.display = "block";
      }
      
      function resetForm() {
          document.getElementById("surveyForm").reset();
      }
      
      function closePopup() {
          document.getElementById("popup").style.display = "none";
          resetForm();
      }