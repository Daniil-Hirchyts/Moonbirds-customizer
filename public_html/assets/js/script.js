let traits = [];
let assets = [];
let selected_type = "moonbird";

// import {getArrayTrait} from './wolfgame.js'
// import {getArrayAssets} from './wolfgame.js'

function getArrayAssets(type) {
    if (type === "moonbird") {
        return [
            ["Brave - Black.png", "Brave - Blue.png", "Brave - Brown.png", "Brave - Gray.png", "Brave - Green.png", "Brave - Pink.png", "Brave - Purple.png", "Brave - Red.png", "Brave - White.png", "Cosmic - Legendary Brave.png", "Cosmic - Legendary Crescent.png", "Cosmic - Legendary Emperor.png", "Cosmic - Legendary Guardian.png", "Cosmic - Legendary Professor.png", "Cosmic - Legendary Sage.png", "Crescent - Black.png", "Crescent - Blue.png", "Crescent - Brown.png", "Crescent - Gray.png", "Crescent - Green.png", "Crescent - Pink.png", "Crescent - Purple.png", "Crescent - Red.png", "Crescent - White.png", "Emperor - Black.png", "Emperor - Blue.png", "Emperor - Brown.png", "Emperor - Gray.png", "Emperor - Green.png", "Emperor - Pink.png", "Emperor - Purple.png", "Emperor - Red.png", "Emperor - White.png", "Enlightened - Legendary Brave.png", "Enlightened - Legendary Crescent.png", "Enlightened - Legendary Emperor.png", "Enlightened - Legendary Guardian.png", "Enlightened - Legendary Professor.png", "Enlightened - Legendary Sage.png", "Glitch - Legendary Brave.png", "Glitch - Legendary Crescent.png", "Glitch - Legendary Emperor.png", "Glitch - Legendary Guardian.png", "Glitch - Legendary Professor.png", "Glitch - Legendary Sage.png", "Golden - Legendary Crescent.png", "Golden - Legendary Emperor.png", "Golden - Legendary Professor.png", "Golden - Legendary Sage.png", "Guardian - Black.png", "Guardian - Blue.png", "Guardian - Brown.png", "Guardian - Gray.png", "Guardian - Green.png", "Guardian - Pink.png", "Guardian - Purple.png", "Guardian - Red.png", "Guardian - White.png", "Jade - Legendary Brave.png", "Jade - Legendary Crescent.png", "Jade - Legendary Emperor.png", "Jade - Legendary Guardian.png", "Jade - Legendary Professor.png", "Jade - Legendary Sage.png", "Professor - Black.png", "Professor - Blue.png", "Professor - Brown.png", "Professor - Gray.png", "Professor - Green.png", "Professor - Pink.png", "Professor - Purple.png", "Professor - Red.png", "Professor - White.png", "Raincloud.png", "Robot - Metal.png", "Ruby Skeleton - Legendary Bone.png", "Sage - Black.png", "Sage - Blue.png", "Sage - Brown.png", "Sage - Gray.png", "Sage - Green.png", "Sage - Pink.png", "Sage - Purple.png", "Sage - Red.png", "Sage - White.png", "Skeleton - Bone.png", "Stark - Black.png", "Stark - Blue.png", "Stark - Brown.png", "Stark - Gray.png", "Stark - Green.png", "Stark - Pink.png", "Stark - Purple.png", "Stark - Red.png", "Stark - White.png", "Tabby - Black.png", "Tabby - Blue.png", "Tabby - Brown.png", "Tabby - Gray.png", "Tabby - Green.png", "Tabby - Pink.png", "Tabby - Purple.png", "Tabby - Red.png", "Tabby - White.png", "Tranquil - Black.png", "Tranquil - Blue.png", "Tranquil - Brown.png", "Tranquil - Gray.png", "Tranquil - Green.png", "Tranquil - Pink.png", "Tranquil - Purple.png", "Tranquil - Red.png", "Tranquil - White.png"],
            ["Adorable - Epic.png", "Adorable - Ruby.png", "Angry - Blue.png", "Angry - Golden.png", "Angry - Gray.png", "Angry - Green.png", "Angry - Purple.png", "Angry - Red.png", "Angry - Robot.png", "Angry - Ruby.png", "Angry - Skeleton.png", "Angry - White.png", "Angry - Yellow.png", "Closed (Enlightened).png", "Diamond - Epic.png", "Discerning - Blue.png", "Discerning - Golden.png", "Discerning - Gray.png", "Discerning - Green.png", "Discerning - Purple.png", "Discerning - Red.png", "Discerning - Skeleton.png", "Discerning - White.png", "Discerning - Yellow.png", "Fire - Epic.png", "Fire - Ruby.png", "Glitch 1.png", "Glitch 2.png", "Glitch 3.png", "Glitch 4.png", "Glitch 5.png", "Glitch 6.png", "Heart - Epic.png", "Moon - Epic.png", "Open (Cosmic).png", "Open (Enlightened).png", "Open (Jade).png", "Open - Adorable.png", "Open - Blue.png", "Open - Diamond.png", "Open - Enchanted.png", "Open - Fire.png", "Open - Golden.png", "Open - Gray.png", "Open - Green.png", "Open - Moon.png", "Open - Purple.png", "Open - Rainbow.png", "Open - Red.png", "Open - Robot.png", "Open - Ruby.png", "Open - Skeleton.png", "Open - White.png", "Open - Yellow.png", "Rainbow - Epic.png", "Relaxed (Enlightened).png", "Relaxed (Jade).png", "Relaxed - Blue.png", "Relaxed - Golden.png", "Relaxed - Gray.png", "Relaxed - Green.png", "Relaxed - Purple.png", "Relaxed - Red.png", "Relaxed - Ruby.png", "Relaxed - Skeleton.png", "Relaxed - White.png", "Relaxed - Yellow.png", "Side-eye - Blue.png", "Side-eye - Golden.png", "Side-eye - Gray.png", "Side-eye - Green.png", "Side-eye - Purple.png", "Side-eye - Red.png", "Side-eye - White.png", "Side-eye - Yellow.png"],
            ["Long - Golden.png", "Long - Gray.png", "Long - Orange.png", "Long - Robot.png", "Long - Ruby.png", "Long - Skeleton.png", "Short (Jade).png", "Short - Golden.png", "Short - Gray.png", "Short - Orange.png", "Short - Robot.png", "Short - Ruby.png", "Short - Skeleton.png", "Small (Cosmic).png", "Small (Enlightened).png", "Small (Jade).png", "Small - Golden.png", "Small - Gray.png", "Small - Orange.png", "Small - Robot.png", "Small - Ruby.png", "Small - Skeleton.png"],
            ["None.png", "Aviators.png", "Big Tech.png", "Black-rimmed Glasses.png", "Eyepatch.png", "Gazelles.png", "Half-moon Spectacles.png", "Jobs Glasses.png", "Monocle (Jade).png", "Monocle.png", "3D Glasses.png", "Rose-Colored Glasses.png", "Sunglasses.png", "Visor (Jade).png", "Visor.png"],
            ["None.png", "Backwards Hat.png", "Bandana.png", "Beanie.png", "Bow.png", "Bucket Hat.png", "Captain's Cap.png", "Chromie.png", "Cowboy Hat.png", "Crescent Talisman (Jade).png", "Crescent Talisman.png", "Dancing Flame (Enlightened Variant).png", "Dancing Flame (Jade).png", "Dancing Flame.png", "Diamond (Jade).png", "Diamond.png", "Durag.png", "Fire.png", "Flower.png", "Forest Ranger.png", "Grail.png", "Gremplin.png", "Halo (Enlightened Variant).png", "Halo (Jade).png", "Halo.png", "Headband.png", "Headphones.png", "Hero's Cap.png", "Karate Band.png", "Lincoln.png", "Mohawk (Green).png", "Mohawk (Jade).png", "Mohawk (Pink).png", "Moon Hat.png", "Aviator's Cap.png", "Parliament Mask (Jade).png", "Pirate's Hat.png", "Queen's Crown.png", "Raincloud.png", "Rubber Duck.png", "Skully (Jade).png", "Skully.png", "Space Helmet.png", "Tiara.png", "Tiny Crown (Enlightened).png", "Tiny Crown (Jade).png", "Tiny Crown.png", "Unicorn Horn (Jade).png", "Witch's Hat.png", "Wizard's Hat (Jade).png", "Wizard's Hat.png"],
            ["None.png", "Diamond Necklace.png", "Gold Chain.png", "Hero's Tunic.png", "Hoodie Down.png", "Hoodie.png", "Jean Jacket.png", "Bomber Jacket.png", "Punk Jacket.png"],
            ["Cosmic.png", "Enlightened.png", "Jade.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"]
        ];
    } else if (type === "wolf") {
        return [
            ["Black.png", "Brown.png", "Cyborg.png", "Demon.png", "Golden.png", "Gray.png", "Skeleton.png", "White.png", "Zombie.png"],
            ["Alpha.png", "Beta.png", "Delta.png", "Luna emerald.png", "Luna sapphire.png", "Omega.png"],
            ["3D Glasses.png", "Calm.png", "Challenged.png", "Chill.png", "Closed.png", "Crossed.png", "Curious.png", "Deep Blue.png", "Downward Gaze.png", "Dreaming.png", "Expressionless.png", "Flashy Sunnies.png", "Full Moon.png", "Heterochromia.png", "Hipster Glasses.png", "Leftward Gaze.png", "Lovable.png", "Mascara.png", "Narrow Dots.png", "Non.png", "Pouncing.png", "Restless.png", "Rightward Gaze.png", "Scar.png", "Simple.png", "Ski Goggles Plum.png", "Ski Goggles.png", "Standard Sunnies.png", "Sus.png", "The Intellectual.png", "Triangle.png", "Unibrow.png", "Wide Dots.png", "Zorro.png"],
            ["Brown Nose Smirk.png", "Deadpan.png", "Flared Nostrils.png", "Frown.png", "Good Boy.png", "Gray Nose Smirk.png", "Grin.png", "Howling.png", "Mischievous.png", "Narrow Smile.png", "Neutral.png", "P.png", "Red Nose Smirk.png", "Relaxed.png", "Smoking.png", "Tongue Out.png", "Tongue Up.png", "Wide Smile.png", "Yummy.png"],
            ["None.png", "Bone.png", "Bowtie.png", "Clock.png", "Diamond.png", "Dress Tie.png", "Earphones.png", "Flowers.png", "Gold Medal.png", "Gold.png", "Key.png", "Mask.png", "Bandana.png", "Pearls.png", "Plum.png", "Secret Society.png", "Sheep Heart.png", "Sheep Horn.png", "Silver.png", "Sunglasses.png", "Teeth.png", "Whistle.png"],
            ["None.png", "Fairytale.png", "Fire.png", "Foggy.png", "Forest.png", "Illusion.png", "Magic.png", "Meadow.png", "Silent.png", "Sunrise.png", "Underwater.png"]
        ];
    }
}

function getArrayTrait(type) {
    if (type === "moonbird") {
        return ["Body", "Eyes", "Beak", "Eyewear", "Headwear", "Outerwear", "BG"];
    } else if (type === "wolf") {
        return ["Fur", "Head", "Eyes", "Mouth", "Neck", "BG"];
    }
}

function selectType(value) {
    if (typeSelector.value === "moonbird") {
        traits = getArrayTrait("moonbird");
        assets = getArrayAssets("moonbird");
    } else {
        traits = getArrayTrait("wolf");
        assets = getArrayAssets("wolf");
    }
}

let currentTrait = 0;
let asset_name;
let trait_name;
let selected_asset = [];
let currentTrait_Menu = 0;

let render_layers = [];
let canvas = document.getElementById("render-canvas");
let ctx = canvas.getContext("2d");

let preview = document.getElementById("render-canvas");
let previewSize = preview.height;

window.onload = function () {
    selectCharacter();
    selectType();
    customizerHTMLsetup();
    defaultImageF();
    randomize();
};

let typeSelector = document.getElementById("typeSelector");
typeSelector.addEventListener("change", function () {
    selectCharacter(typeSelector.value);
});

let sheepButton = document.getElementById("sheep-button");
sheepButton.addEventListener("click", function () {
    selectCharacter("sheep");
});

let wolfButton = document.getElementById("wolf-button");
wolfButton.addEventListener("click", function () {
    selectCharacter("wolf");
});

function selectCharacter(value = selected_type) {
    typeSelector.value = value;
    selected_type = typeSelector.value;
    selectType(typeSelector.value);
    randomize();

    document.querySelector("#sub-title-2").innerHTML = '<h3 class="sub-title-2">Customize your ' + selected_type + '</h3>';
    if (typeSelector.value === "sheep") document.getElementById("sheep-button").style.display = "none";
    else if (typeSelector.value === "wolf") document.getElementById("sheep-button").style.display = "flex";
    if (typeSelector.value === "wolf") document.getElementById("wolf-button").style.display = "none";
    else if (typeSelector.value === "sheep") document.getElementById("wolf-button").style.display = "flex";
}

let randomButton = document.getElementById("random-button");
randomButton.addEventListener("click", function () {
    randomize();
});

function randomize() {
    for (let i = 0; i < traits.length; i++) {
        selected_asset[i] = true;
    }
    for (let i = 0; i < traits.length; i++) {
        let randomAsset = Math.floor(Math.random() * assets[i].length);
        selectAsset(i, randomAsset);
    }
    reloadImages(0);
}

function reloadImages(value) {
    if (value < currentTrait && selected_asset[value] === true) {
        currentTrait = value;
        customizerHTMLsetup();
        return;
    }
    if ((selected_asset[currentTrait] === false)
        || (value - currentTrait > 1 && selected_asset[currentTrait] === false && selected_asset[currentTrait + 1] === false)
        || (value - currentTrait > 1 && selected_asset[currentTrait] === true && selected_asset[currentTrait + 1] === false)) {
        document.getElementById("info-window").classList.remove("hidden");
    } else {
        currentTrait = value;
        customizerHTMLsetup();
    }
}

function customizerHTMLsetup() {
    let html = "";
    let trait = traits[currentTrait];
    let assetList = assets[currentTrait];
    html += '  <h3 class="chtr">CHOOSE TRAITS : ';
    for (let i = 0; i < traits.length; i++) {
        let trait = traits[i];
        if (i === currentTrait) html += '<span class="qw cur">' + trait + '</span>';
        else html += '<span class="qw" onclick="reloadImages(' + i + ')">' + trait + '</span>';
        html += '  <span class="cube"></span>';
    }
    html = html.slice(0, -27);
    html += '</h3>';
    html += '  <div class="asset-list">';
    for (let j = 0; j < assetList.length; j++) {
        let asset = assetList[j];
        let assetSrc = 'assets/images/' + selected_type + '/' + trait + '/' + asset;
        html += '    <img title="' + asset.slice(0, -4) + '" class="asset" src="' + assetSrc + '" onclick="selectAsset(' + currentTrait + ', ' + j + ', true)" style="background-image:url(assets/images/' + selected_type + '/default.png)\n" alt="">';
    }
    html += '</div>';
    document.querySelector("#customizer").innerHTML = html;
    document.querySelector("#back-button").disabled = currentTrait === 0;
    document.querySelector("#next-button").disabled = (currentTrait === traits.length - 1);
    currentTrait_Menu = currentTrait;
}

function selectAsset(trait_id = 0, asset_id = 0, need_render = true) {
    trait_name = traits[trait_id];
    asset_name = assets[trait_id][asset_id];
    asset_id = trait_id;
    render_layers[asset_id] = `assets/images/${selected_type}/${trait_name}/${asset_name}`;
    if (need_render) renderImage();
    let trait = trait_name;
    let asset = asset_name.slice(0, -4);
    let html = "";
    html += '  <div class="trait">';
    html += '<h4>' + trait + ' : <span class="asset">' + asset + '</span>' + '</h4>';
    html += '</div>';
    if (document.querySelector("#confirmed-traits").innerHTML.includes(trait)) {
        let traitHTML = document.querySelector("#confirmed-traits").innerHTML;
        let traitHTMLArray = traitHTML.split("</div>");
        let traitHTMLArray2 = [];
        for (let i = 0; i < traitHTMLArray.length; i++) {
            if (traitHTMLArray[i].includes(trait)) traitHTMLArray2.push(html);
            else traitHTMLArray2.push(traitHTMLArray[i] + "</div>");
        }
        document.querySelector("#confirmed-traits").innerHTML = traitHTMLArray2.join("");
    } else document.querySelector("#confirmed-traits").innerHTML += html;
    selected_asset[trait_id] = true;
}

function renderImage() {
    if (render_layers.length === 0) defaultImageF();
    else {

        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let loaded = 0;
        for (let i = 0; i < render_layers.length; i++) {
            let img = new Image();
            img.src = render_layers[i];
            img.onload = function () {
                loaded++;
                if (loaded === render_layers.length) {
                    for (let j = 0; j < render_layers.length; j++) {
                        let img = new Image();
                        img.src = render_layers[j];
                        if (!render_layers[j].includes("BG")) ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        else {
                            let canvas2 = document.createElement("canvas");
                            canvas2.width = canvas.width;
                            canvas2.height = canvas.height;
                            let ctx2 = canvas2.getContext("2d");
                            ctx2.imageSmoothingEnabled = false;
                            ctx2.drawImage(img, 0, 0, canvas.width, canvas.height);
                            ctx2.drawImage(canvas, 0, 0, canvas2.width, canvas2.height);
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.drawImage(canvas2, 0, 0, canvas.width, canvas.height);
                        }
                    }
                }
            }
            ;
        }
        canvas.style.backgroundImage = "none";
        canvas.src = canvas.toDataURL();
    }
}

document.getElementById("save-button").addEventListener("click", saveImage);

function saveImage() {
    let canvas2 = document.createElement("canvas");
    canvas2.width = 2048;
    canvas2.height = 2048;
    let ctx2 = canvas2.getContext("2d");
    ctx2.imageSmoothingEnabled = false;
    ctx2.drawImage(canvas, 0, 0, canvas2.width, canvas2.height);
    let dataURL = canvas2.toDataURL();
    let link = document.createElement("a");
    link.download = selected_type + ".png";
    link.href = dataURL;
    link.click();
}

let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function () {
    document.getElementById("warning-window").classList.remove("hidden");
});

let yesButton = document.getElementById("yes-button");
yesButton.addEventListener("click", function () {
    resetImage();
    document.getElementById("warning-window").classList.add("hidden");
});

function resetImage() {
    defaultImageF();
    render_layers = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.querySelector("#confirmed-traits").innerHTML = "";
    reloadImages(0);
    for (let i = 0; i < traits.length; i++) {
        selected_asset[i] = false;
    }
}

let noButton = document.getElementById("no-button");
noButton.addEventListener("click", function () {
    document.getElementById("warning-window").classList.add("hidden");
});

let backButton = document.getElementById("back-button");
backButton.addEventListener("click", function () {
    if (currentTrait > 0) {
        currentTrait--;
        if (currentTrait < 0) currentTrait = traits.length - 1;
        customizerHTMLsetup();
    }
});

let nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", function () {
    if (document.querySelector("#confirmed-traits").innerHTML.includes(traits[currentTrait])) {
        if (currentTrait < traits.length - 1) {
            currentTrait++;
            if (currentTrait > traits.length - 1) currentTrait = 0;
            customizerHTMLsetup();
        }
    } else {
        document.getElementById("info-window").classList.remove("hidden");
    }
});

let html = '<h3 class="sub-title-2">Customize your ' + selected_type + '</h3>';
document.querySelector("#sub-title-2").innerHTML = html;

let okButton = document.getElementById("ok-button");
okButton.addEventListener("click", function () {
    document.getElementById("info-window").classList.add("hidden");
});

function defaultImageF() {
    document.getElementById("render-canvas").style.backgroundImage = "url(assets/images/" + selected_type + "/default.png)";
    document.getElementById("render-canvas").src = canvas.toDataURL();
}