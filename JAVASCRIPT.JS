----------------------------------------------------------
Js Roadmap / Topics
----------------------------------------------------------
Syntax 
DOM manipulation 
AJAX 
API
ES6
Hoisting
Closures
Promises
Data Types
Operators 
If statement, If Else, if else if, While loop, do while loop, for loop
Anonymous, call, Apply, Bind and Closures
Array - Create,Access,Loop over and remove
Numbers - Date,year,hours,seconds,local time

-------------------
Package Manager
-------------------
Yarn 
Npm

------------------------------------------------------------
RISE of PWA - Progressive Web Application - A JS revolution
-----------------------------------------------------------

Global Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol 


-------------------------------------------------------------------
<!-- Tab name - Script For Tab Focus & Blur -->
-------------------------------------------------------------------
<script>
    document.title = "GLF - Wishing Everyone a Happy Christmas!";
    window.addEventListener("blur", () => {
        document.title = "Please Have A Look!";
    });
    window.addEventListener("focus", () => {
        document.title = "GLF - Wishing Everyone a Happy Christmas!";
    });
</script>

----------------------------------------------------
Remove elements using click in JS
----------------------------------------------------

Html  -> <ul> <li> text 1 [set of 10 list] </li> </ul>

const lis = document.querySelectorAll(“.li”)
lis.forEach((list) => {
list.addEventListener(‘click’ , (e) => {
console.log(e.target) e.target.remove()
})
})
