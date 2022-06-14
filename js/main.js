function showScreen() {
    document.getElementById('canvas').style.display = "none";
    document.getElementById('level1').innerHTML = `<p>Sharkie is the friendliest shark ever!<br>But he lives in a hostile environment.
    <br><br>All the other
    animals he encounters are deathly<br> dangerous for him. <br>
    Help Sharkie to fight again dangeorus jellyfishes <br>and defeat the endboss to survive!
</p>      
<div class="buttons">
<button type="button" class="btn btn-outline-primary" onclick="showInstructions()">Instructions</button>
<button type="button" class="btn btn-outline-primary"  onclick="startLevel()">Start game</button>
</div>`
}

function showInstructions() {
    document.getElementById('level1').innerHTML = ` 
    <div class="align">
    <div class="middle">
        <div class= "align">
            <div class="button-up">
                <button type="button" class="btn btn-secondary">&#5123;</button>
            </div>  
            <div class="inline btn-group mr-2" role="group" aria-label="Second group">
                <button type="button" class="btn btn-secondary">&#5130;</button>
                <button type="button" class="btn btn-secondary">&#5121;</button>
                <button type="button" class="btn btn-secondary">&#5125;</button>
            </div>
            <span class="big">move Sharkie</span>
        </div>
            <div class="flex-center">
                <div class="btn-group" role="group" aria-label="Default button group">
                <button type="button" class="btn btn-secondary">Space</button>
            </div>
             <span class="big">fin slap</span>
             <img class="icon" src="Alternative Grafiken - Sharkie/1.Sharkie/slap_edit.png">
        </div>
    </div>
<div class= "middle">
<div class="flex-center flex-center2">
<button type="button" class="btn btn-secondary">d</button>
    <div class="relativ">
        <img class="bubble1" src="Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/Bubble.png">
        <p class="textbubble"> blow <br>bubbles</p>
    </div>
</div>
<div class="flex-center flex-center2">
<button type="button" class="btn btn-secondary">b</button>
    <div class="relativ">
        <img class="bubble" src="Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png">
        <p class="textbubble"> blow <br>poisoned <br>bubbles</p>
    </div>
</div>
</div>
</div>
</div>
<div class="buttons">
<button type="button" class="btn btn-outline-primary"  onclick="startLevel()">Start game</button>
</div>`

}

function startLevel() {
    document.getElementById('level1').style.display = "none";
    document.getElementById('canvas').style.display = "block";
    init();

}
