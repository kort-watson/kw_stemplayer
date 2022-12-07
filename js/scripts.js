$("#play").on("click", function () {
    /* this entire section is what controls the play button and enables the Animations to be synced with the play  */
    var bgvocals = document.getElementById("bgvocals")
    bgvocals.play()
    var bassplaying = document.getElementById("basssound")
    bassplaying.play()
    var drums = document.getElementById("drumsound")
    drums.play()
    var dtvocal = document.getElementById("dtvocal")
    dtvocal.play()
    var guitars = document.getElementById("guitars")
    guitars.play()
    var leadvocal = document.getElementById("leadvocal")
    leadvocal.play()
    var orchestra = document.getElementById("orchestra")
    orchestra.play()
    var percussion = document.getElementById("percussion")
    percussion.play()
    var synths = document.getElementById("synths")
    synths.play()
    console.log(synths);

    var drumsvolume = document.getElementById("drumsound")
    drumsvolume.volume = 1.0;
    var bassvolume = document.getElementById("basssound")
    bassvolume.volume = 1.0;
    var bgvolume = document.getElementById("bgvocals")
    bgvolume.volume = 1.0;
    var leadvolume = document.getElementById("leadvocal")
    leadvolume.volume = 1.0;
    var stringsvolume = document.getElementById("orchestra")
    stringsvolume.volume = 1.0;
    var percvolume = document.getElementById("percussion")
    percvolume.volume = 1.0;
    var synthvolume = document.getElementById("synths")
    synthvolume.volume = 1.0;
    var detunedvolume = document.getElementById("dtvocal")
    detunedvolume.volume = 1.0;
    var guitarvolume = document.getElementById("guitars")
    guitarvolume.volume = 1.0;

    $(".bassbutton").addClass("con")
    $(".backgroundbutton").addClass("con2")
    $(".drumsbutton").addClass("con3")
    $(".guitarsbutton").addClass("con4")
    $(".leadvocalsbutton").addClass("con5")
    $(".orchestrabutton").addClass("con6")
    $(".percussionbutton").addClass("con7")
    $(".synthsbutton").addClass("con8")
    $(".detunedbutton").addClass("con9")


})

$("#pause").on("click", function () {
    /* This section controls the pause button that stops audio and triggers animations */
    var bgvocals = document.getElementById("bgvocals")
    bgvocals.pause()
    var bassplaying = document.getElementById("basssound")
    bassplaying.pause()
    var drums = document.getElementById("drumsound")
    drums.pause()
    var dtvocal = document.getElementById("dtvocal")
    dtvocal.pause()
    var guitars = document.getElementById("guitars")
    guitars.pause()
    var leadvocal = document.getElementById("leadvocal")
    leadvocal.pause()
    var orchestra = document.getElementById("orchestra")
    orchestra.pause()
    var percussion = document.getElementById("percussion")
    percussion.pause()
    var synths = document.getElementById("synths")
    synths.pause()
    $(".bassbutton").removeClass("con")
    $(".backgroundbutton").removeClass("con2")
    $(".drumsbutton").removeClass("con3")
    $(".guitarsbutton").removeClass("con4")
    $(".leadvocalsbutton").removeClass("con5")
    $(".orchestrabutton").removeClass("con6")
    $(".orchestrabutton").removeClass("con6")
    $(".percussionbutton").removeClass("con7")
    $(".synthsbutton").removeClass("con8")
    $(".detunedbutton").removeClass("con9")
})

$("#bass").on("click", function () {
    bass = !bass;
    if (bass) {
        var bassvolume = document.getElementById("basssound")
        bassvolume.volume = 0.0;
        $(".bassbutton").removeClass("con")

    } else {
        var bassvolume = document.getElementById("basssound")
        bassvolume.volume = 1.0;
        $(".bassbutton").addClass("con")


    }

})

$("#bg").on("click", function () {
    bg = !bg;
    if (bg) {
        var bgvolume = document.getElementById("bgvocals")
        bgvolume.volume = 0.0;
        $(".backgroundbutton").removeClass("con2")
    } else {
        var bgvolume = document.getElementById("bgvocals")
        bgvolume.volume = 1.0;
        $(".backgroundbutton").addClass("con2")
    }


})

$("#drums").on("click", function () {
    drums = !drums;
    if (drums) {
        var drumsvolume = document.getElementById("drumsound")
        drumsvolume.volume = 0.0;
        $(".drumsbutton").removeClass("con3")
    } else {
        var drumsvolume = document.getElementById("drumsound")
        drumsvolume.volume = 1.0;
        $(".drumsbutton").addClass("con3")
    }

})
/* All of these components are what controls the audio levels which lets me loop my audio and appear as if they are starting and stoping and remaining synced but are actually just changing volume levels  */
$("#guitar").on("click", function () {
    guitar = !guitar;
    if (guitar) {
        var guitarvolume = document.getElementById("guitars")
        guitarvolume.volume = 0.0;
        console.log(guitarvolume)
        $(".guitarsbutton").removeClass("con4")
    } else {
        var guitarvolume = document.getElementById("guitars")
        guitarvolume.volume = 1.0;
        console.log(guitarvolume);
        $(".guitarsbutton").addClass("con4")
    }

})
$("#lead").on("click", function () {
    lead = !lead;
    if (lead) {
        var leadvolume = document.getElementById("leadvocal")
        leadvolume.volume = 0.0;
        $(".leadvocalsbutton").removeClass("con5")
    } else {
        var leadvolume = document.getElementById("leadvocal")
        leadvolume.volume = 1.0;
        $(".leadvocalsbutton").addClass("con5")
    }

})
$("#strings").on("click", function () {
    strings = !strings;
    if (strings) {
        var stringsvolume = document.getElementById("orchestra")
        stringsvolume.volume = 0.0;
        console.log(stringsvolume);
        $(".orchestrabutton").removeClass("con6")
    } else {
        var stringsvolume = document.getElementById("orchestra")
        stringsvolume.volume = 1.0;
        console.log(stringsvolume);
        $(".orchestrabutton").addClass("con6")
    }

})

$("#perc").on("click", function () {
    perc = !perc;
    if (perc) {
        var percvolume = document.getElementById("percussion")
        percvolume.volume = 0.0;
        console.log(percvolume);
        $(".percussionbutton").removeClass("con7")
    } else {
        var percvolume = document.getElementById("percussion")
        percvolume.volume = 1.0;
        console.log(percvolume);
        $(".percussionbutton").addClass("con7")
    }

})

$("#synth").on("click", function () {
    synth = !synth;
    if (synth) {
        var synthvolume = document.getElementById("synths")
        synthvolume.volume = 0.0;
        $(".synthsbutton").removeClass("con8")

    } else {
        var synthvolume = document.getElementById("synths")
        synthvolume.volume = 1.0;
        $(".synthsbutton").addClass("con8")

    }

})

$("#detuned").on("click", function () {
    detuned = !detuned;
    if (detuned) {
        var detunedvolume = document.getElementById("dtvocal")
        detunedvolume.volume = 0.0;
        console.log(detunedvolume);
        $(".detunedbutton").removeClass("con9")
    } else {
        var detunedvolume = document.getElementById("dtvocal")
        detunedvolume.volume = 1.0;
        console.log(detunedvolume);
        $(".detunedbutton").addClass("con9")
    }

}) 
