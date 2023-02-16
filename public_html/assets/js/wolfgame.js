export function getArrayTrait(type) {
    if (type === "sheep") {
        return ["Fur", "Head", "Ears", "Eyes", "Nose", "Mouth", "Feet", "BG"];
    } else if (type === "wolf") {
        return ["Fur", "Head", "Eyes", "Mouth", "Neck", "BG"];
    }
}

export function getArrayAssets(type) {
    if (type === "sheep") {
        return [
            ["Black.png", "Brown.png", "Gray.png", "Survivor.png", "White.png"],
            ["None.png", "Blue Hat.png", "Blue Horns.png", "Brain.png", "Bucket Hat.png", "Capone.png", "Cowboy Hat.png", "Crown.png", "Curved Brown Horns.png", "Curved Golden Horns.png", "Fedora.png", "Mailman.png", "Mushroom.png", "Beanie.png", "Partially Shaved.png", "Pointy Brown Horns.png", "Pointy Golden Horns.png", "Pointy Red Horns.png", "Rainbow Fro.png", "Red Cap.png", "Reggae Poncho.png", "Santa.png", "Silky.png", "Seed Hat.png", "Sun Hat.png", "Visor.png", "White Cap.png"],
            ["None.png", "Cross.png", "DNA.png", "Diamond Bling.png", "Diamond Stud.png", "Gold Bling.png", "Gold Hoop.png", "Golden Chains.png", "Hearts blacked.png", "Hearts.png", "Lock.png", "Long Eared.png", "Cola.png", "Pears.png", "Plums.png", "Two Gold Piercings.png"],
            ["Angry.png", "Basic Sun Protection.png", "Big Blue.png", "Black Glasses.png", "Bloodshot.png", "Bored.png", "Confused.png", "Cross Eyed.png", "Crying.png", "Cyclops.png", "Dork.png", "Drunk.png", "Eyepatch Black.png", "Eyepatch Red.png", "Face Painted.png", "Fake Glasses.png", "Fearful.png", "Fearless.png", "Happy.png", "Hypno.png", "Leafy Green.png", "Livid.png", "Night Vision Visor.png", "OMG.png", "Rainbow Sunnies.png", "Red Glasses.png", "Rolling.png", "Sleepy.png", "Seed Glasses.png", "Small Blue.png", "Spacey.png", "Squint Left.png", "Squint Right.png", "Staring Contest.png", "Three Eyed.png", "X Ray.png", "xX.png"],
            ["Acne.png", "Cotton Wool.png", "Dot.png", "Dots.png", "Gold.png", "Human.png", "Normal.png", "Piggo.png", "Punched.png", "Red.png", "Snotty.png", "Triangle.png", "U.png", "Wide Nostrills Brown.png", "Wide Nostrills.png", "Wide.png", "X.png"],
            ["Beard.png", "Big Smile.png", "Bristle.png", "Cheese.png", "Chill Smile.png", "Chin Guard.png", "Chinstrap.png", "Cigarette.png", "Dotted.png", "Eating Carrot left.png", "Eating Carrot.png", "Eating Grass.png", "Grillz.png", "Missing Tooth.png", "Mustache.png", "Narrow Open Mouth.png", "Neutral.png", "Pipe.png", "Pouting.png", "Shaolin.png", "Seed Beard.png", "Smirk.png", "Teasing.png", "Tongue Pill Red.png", "Vampire.png", "Wide Open Mouth.png", "Wide tongue pill green.png", "WoW.png"],
            ["None.png", "Clogs.png", "Dress Shoes.png", "Elephant.png", "Elf.png", "Frozen.png", "Golden Rings.png", "Gray Shoes.png", "Green Sneakers.png", "High.png", "Ice Skates.png", "Blue Sneakers.png", "Purple Sneakers.png", "Rainbow High.png", "Red Sneakers.png", "Roller Blades.png", "Shackles.png", "Slippers.png", "Snowboard.png", "Striped Socks.png", "Suction Cups.png", "White Boots.png", "White and Gray Sneakers.png", "Yellow Sneakers.png"],
            ["None.png", "Fairytale.png", "Fire.png", "Foggy.png", "Forest.png", "Illusion.png", "Magic.png", "Meadow.png", "Silent.png", "Sunrise.png", "Underwater.png"]
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