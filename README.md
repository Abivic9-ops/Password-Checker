# Password Checker 
# Overview of this project
The Password Checker is a simple web application that evaluates the strength of a password entered by the user. The goal of this project is to help users create strong and secure passwords by providing real time feedback while they type.
The application analyzes the password based on several criteria such as:
Presence of uppercase and lowercase letters
Inclusion of numbers
Inclusion of special characters
Minimum password length
Based on these checks, the system classifies the password as:
*Weak
* Medium Strength
* Strong
Password strength checking is important because strong passwords help protect online accounts from unauthorized access and cyber attacks. Security guidelines generally recommend long and complex passwords to reduce the risk of hacking.

# Project Objective
The main objective of this project is to:
Help users understand what makes a password secure
Provide instant visual feedback on password strength
Demonstrate the use of JavaScript for form validation
Practice front end development using HTML, CSS and JavaScript

This project was created as part of my JavaScript learning journey.

# Features
 Real time password strength detection
 Password visibility toggle (show/hide password)
 Visual strength progress bar
Password requirement indicators
 User friendly interface

The system dynamically updates the interface as the user types their password.

# Technologies Used
The project was built using the following technologies:
*HTML – for the structure of the web page
*CSS – for styling and visual appearance
*JavaScript – for password validation and dynamic interaction

How the Password Checker Works
The application checks the password against four main rules:
1. Uppercase and Lowercase Letters
The password should contain both uppercase and lowercase characters.
Example:
Password

2. Numbers
A secure password should contain at least one number
Example:
Password1

3. Special Characters
Special symbols make passwords harder to guess.
Example:
Password1!

4. Minimum Length
The password must contain at least 8 characters.
Example:
Pass123!
Password Strength Levels

The system assigns a score depending on how many requirements are satisfied.

# Score	Strength
0–1	Weak Password
2	Medium Strength
3–4	Strong Password

The progress bar changes color to visually indicate password strength.

# Project Structure
Password-Checker
index.html
style.css
script.js
 images
 eye.png
 eye-slash.png
 check-circle.png
 x-circle.png
 README.md
 
# How to Run the Project
1. Clone the repository
git clone https://github.com/Abivic9-ops/Password-Checker.git
2. Navigate into the folder
cd Password-Checker
3. Open the project

Open index.html in your browser.

No additional installation or dependencies are required.

Challenges Encountered
During the development of this project several challenges were encountered:
1. Understanding JavaScript Event Listeners

Handling real time input required learning how event listeners work.

2. Debugging JavaScript Errors

Some errors occurred due to:
incorrect selectors
misplaced brackets
logic errors in the password strength function

These were solved through debugging and testing.

3. Designing User Friendly Feedback
Making the feedback clear to the user required adding:
icons
colors
a progress bar

# Lessons Learned
Through this project the following skills were developed:
DOM manipulation using JavaScript
Writing conditional logic
Working with regular expressions
Creating responsive user interfaces
Debugging front end code

# Future Improvements
Possible improvements for the project include:
Adding password suggestions
Integrating a password generator
Adding animations to the progress bar
Improving accessibility
Deploying the application online

Author
Victor Mwendwa | | Student developer passionate about learning full stack web development and building practical projects.

License
This project is open source and available for learning and educational purposes.
