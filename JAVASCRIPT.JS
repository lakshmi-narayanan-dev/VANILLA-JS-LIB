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
JS - npm , yarn , VCS , NodeBundle Webpack , Testing Jest , React Library , Angular Framework  , linux environment & Terminal , Primitives [Boolean , String , Number , Undefined, Symbol], Operators [+ - / * %] , Let var const [var , let & const are used to declare variables in js] , Hoisting , Implicit Explicit Conversion , Data structure [Array , Json, Map] , Prototypes [Async , Promises , Closures] , Native Methods [math , sqrt , foreach, ceil] , Paradigms [Functional , Relative , Object] , NodeJs & ExpressJs [Server side J5 , Derby , Meteor , Isometric Applications]
Caching - CDN, Server side, Client Side

-------------------
Package Manager
-------------------
Yarn 
Npm

---------------------
Linting & Formatting
---------------------
Formatting - Make it understandable & Vivid Structure. 

https://eslint.org/docs/latest/use/formatters/ 
ESlint, SonarLint
https://www.bitegarden.com/differences-sonarqube-sonarlint#:~:text=1%20%2D%20SonarQube%20is%20a%20server,(as%20a%20spell%20checker).
https://www.perforce.com/blog/qac/what-lint-code-and-what-linting-and-why-linting-important#:~:text=Linting%20is%20the%20automated%20checking,a%20Unix%20utility%20for%20C.
https://eslint.org/docs/latest/use/formatters/

------------------
WebPack
------------------
https://webpack.js.org/concepts/modules/
Webpack - Js code bundler to make single file

------------------
Authentication
------------------
JWT - JSON Web Token
OAuth - https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow
SSO 


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

-------------------------------
Js Events
-------------------------------
Events in html -> many times in containers or forms
user single click [onclick = “” ] 
User double click [ondblclick = “”]
Hover an element [onmousedown = “”]
Element loses focus [onblur = “”]
Element gets focus [onfocus = “”]
Mouse over an element [onmouseout = “”]
Mouse out of an element [onmouseout = “”]
There is a change [onchange = “”]
On Submitting a form [onsubmit = “”]
Resetting a form [onreset = “”]
