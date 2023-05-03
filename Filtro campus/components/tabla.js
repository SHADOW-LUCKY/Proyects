import { navbar,footer } from "./inicio.js"
const tabla = document.querySelector('body')
let sectionTabla =`<section id="tab">
<div id="tabprin">prin</div>
<div id="tabla">
    <div class="img"></div>
    <div class="forty">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis placeat natus. Rerum ratione numquam possimus tempore, molestiae sed architecto enim, voluptatum est sit iusto!
        </p>
        <button id="open">Ver mas</button>
    </div>
</div>
<div id="tabla">
    <div class="img"></div>
    <div class="forty">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis placeat natus. Rerum ratione numquam possimus tempore, molestiae sed architecto enim, voluptatum est sit iusto!
        </p>
        <button id="open1">Ver mas</button>
    </div>
</div>
<div id="tabla">
    <div class="img"></div>
    <div class="forty">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis placeat natus. Rerum ratione numquam possimus tempore, molestiae sed architecto enim, voluptatum est sit iusto!
        </p>
        <button id="open2">Ver mas</button>
    </div>
</div>
<div id="tabla">
    <div class="img"></div>
    <div class="forty">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis placeat natus. Rerum ratione numquam possimus tempore, molestiae sed architecto enim, voluptatum est sit iusto!
        </p>
        <button id="open3">Ver mas</button>
    </div>
</div>
<div id="tabla">
    <div class="img"></div>
    <div class="forty">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis placeat natus. Rerum ratione numquam possimus tempore, molestiae sed architecto enim, voluptatum est sit iusto!
        </p>
        <button id="open4">Ver mas</button>
    </div>
</div>
<div id="tabla">
    <div class="img"></div>
    <div class="forty">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis placeat natus. Rerum ratione numquam possimus tempore, molestiae sed architecto enim, voluptatum est sit iusto!
        </p>
        <button id="open5">Ver mas</button>
    </div>
</div>
</section>`
tabla.innerHTML = navbar
tabla.innerHTML += sectionTabla
tabla.innerHTML += footer