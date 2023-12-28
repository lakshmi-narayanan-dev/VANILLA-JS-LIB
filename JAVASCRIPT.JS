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

--------------------------
Slider vs Carousel
--------------------------
https://sendpulse.com/blog/website-carousel-design#:~:text=a%20single%20platform.-,What%20is%20the%20difference%20between%20carousels%20and%20sliders%3F,see%20multiple%20slides%20at%20once


-------------------
Package Manager
-------------------
Yarn 
Npm

--------------
JS Challenge
--------------
https://www.odoo.com/jobs/challenge

-----------------
Introduction
-----------------
Js is an interpreter that only translates what we say , 
not a compiler like java executes the entire code > only if it is good > it runs the code.

JIT? = https://www.zoho.com/inventory/guides/what-is-just-in-time.html#:~:text=Just%2Din%2Dtime%2C%20or,only%20as%20they%20are%20needed.
https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/

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

------------------------
Var Let Const
------------------------
let , var & const = used to declare variables in js.
Variables = Containers for storing data.

var + let = create variable that can reassign another variable
const = create constant variables that cannot reassign another variable

Developer use = reassign variable [let] & Fixed variable [const]
Don't use var in js , they do not support block level scope

Scope in JS = Block - Function - Local - Global

------------------------
JS OPTIMIZATION
------------------------
https://www.mycplus.com/featured-articles/how-to-optimize-javascript-for-your-site-performance/#:~:text=For%20that%20reason%2C%20developers%20often,as%20the%20JS%20code%20loads
https://www.educba.com/clear-cache-javascript/ 

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

-------------------
Search using JS
-------------------
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_filter 
https://blog.openreplay.com/implementing-live-search-functionality-in-javascript/ 



