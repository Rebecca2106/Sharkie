let soundOn = true;

function showScreen() {
    document.getElementById('canvas').style.display = "none";
    document.getElementById('level1').innerHTML = `<div class="intro">
                                                        <p>Sharkie is the friendliest shark ever!<br>But he lives in a hostile environment.
                                                        <br><br>All the other animals he encounters are deathly<br> dangerous for him. 
                                                        <br>Help Sharkie to fight again dangeorus jellyfishes <br>and defeat the endboss to survive!</p>  
                                                    </div>    
                                                    <div class="buttons">
                                                        <button type="button" class="btn btn-outline-primary" onclick="showInstructions()">Instructions</button>
                                                        <button type="button" class="btn btn-outline-primary"  onclick="startLevel()">Start game</button>
                                                    </div>`
}

function showInstructions() {
    document.getElementById('level1').innerHTML = ` <div class="align">
                                                        <div class="middle">
                                                            <div class= "align intro">
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
                                                                                <img class="bubble" src="Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/PoisonedBubble.png">
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

function restart(){
    window.location='index.html';
}

function toggleVolume() {
    soundOn = !soundOn;
    setVolumeIcon();

}

function showloseScreen() {
    document.getElementById('level1').innerHTML='';
    document.getElementById('level1').style.display = "block";
    document.getElementById('level1').style.backgroundImage = "url('Alternative Grafiken - Sharkie/3. Background/Light/losescreen.png')";
    document.getElementById('level1').innerHTML=`<div class="buttons">
                                                    <div class="position">
                                                        <button type="button" class="btn btn-outline-primary"  onclick="restart()">Try again!</button>
                                                    </div>
                                                </div>`

}

function showWinScreen(){
    document.getElementById('level1').innerHTML='';
    document.getElementById('level1').style.display = "block";
    document.getElementById('level1').style.backgroundImage = "url('Alternative Grafiken - Sharkie/3. Background/Light/win.png')";
    document.getElementById('level1').innerHTML=`<div class="buttons">
                                                    <div class="position">
                                                        <button type="button" class="btn btn-outline-primary"  onclick="restart()">Try again!</button>
                                                    </div>
                                                </div>`

}



function setVolumeIcon() {
    if (soundOn) {
        document.getElementById('volume').innerHTML = `<button type="button" class="btn btn-info">  <i class="fa-solid fa-volume-high" onclick="toggleVolume(-1)" style="display: block;"></i></button>`;

    } else {
        document.getElementById('volume').innerHTML = `<button type="button" class="btn btn-info"><i class="fa-solid fa-volume-xmark" onclick="toggleVolume(-1)" style="display: block;"></i></button>`;
    }
}

function showInfo() {
    var x = document.getElementById("infos");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }