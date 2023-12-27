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