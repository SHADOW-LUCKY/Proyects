const inicio = doc  ument.querySelector('body')
let section = `<section id="init">
<div id="prin">1</div>
<div id="by1">2</div>
<div id="by2">3</div>
</section>`
export const navbar = `<header>
<nav>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
    </label>
    <label class="logo">LUCKY</label>
    <ul>
        <li><a href="index.html">inicio</a></li>
        <li><a href="tablalert.html">tab</a></li>
        <li><a href="alert.html">hallo</a></li>
    </ul>
</nav>
</header>`
export const footer =` <footer id="footer">
<div id="foot1">1</div>
<div id="foot2">2</div>
<div id="foot3">3</div>
</footer>`
inicio.innerHTML = navbar
inicio.innerHTML += section
inicio.innerHTML += footer
