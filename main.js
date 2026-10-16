/* LOCAL STORAGE */
if (localStorage.getItem('sepiaMode') === 'true') {
    $('#sepiamode').addClass('toggled');
    $('body').addClass('sepiamode');
}
if (localStorage.getItem('contrastMode') === 'true') {
    $('#contrastmode').addClass('toggled');
    $('.hyp').addClass('contrastmode');
}
if (localStorage.getItem('darkMode') === 'true') {
    $('#darkmode').addClass('toggled');
    $('body').addClass('darkmode');
}

$(function() {
      var switcherState = document.getElementById("hyp-mode");
      var switcherVal = document.getElementById("hyp-mode").value;  
  
      const savedValue = localStorage.getItem('switcherMode');
      if (savedValue !== null) {
        switcherState.value = savedValue;
      }
      switcherState.addEventListener('input', (event) => {
        const currentValue = event.target.value;
        localStorage.setItem('switcherMode', currentValue);
      });
});

/* LOW CONTRAST MODE */
$(function() {
    (function hypCont() {
        var $toggleCont = $('#contrastmode');
        var $body = $('.hyp');

        function hypCont() {
            if (!$body.hasClass('contrastmode')) {
                $body.addClass('contrastmode');
                $toggleCont.addClass('toggled');
                localStorage.setItem('contrastMode', 'true');
            } else {
                $body.removeClass('contrastmode');
                $toggleCont.removeClass('toggled');
                localStorage.removeItem('contrastMode');
            }
        }

        $toggleCont.on('click', hypCont);
    })();
});



/* MODE WHATEVER */
function hypModeSwitch() {
      var switcherState = document.getElementById("hyp-mode");
      var switcherVal = document.getElementById("hyp-mode").value;
  
      if(switcherVal == "1"){
        $('body').removeClass();
        localStorage.removeItem('darkMode', 'true');
        localStorage.removeItem('sepiaMode');
      }
      else if(switcherVal == "2"){
        $('body').removeClass();
        $('body').attr('class','sepiamode');
        localStorage.setItem('sepiaMode', 'true');
        localStorage.removeItem('darkMode');
      }
      else {
        $('body').removeClass();
        $('body').attr('class','darkmode');
        localStorage.setItem('darkMode', 'true');
        localStorage.removeItem('sepiaMode');
      }
    }





/* FONT SIZE CHANGER */
(function() {
    const r = document.documentElement
    const f = localStorage.getItem("fontSizeHyp") || "14"
    r.style.setProperty("--fontSize", f + "px")
    localStorage.setItem("fontSizeHyp", f)
    
    const f2 = localStorage.getItem("lineHeightHyp") || "22"
    r.style.setProperty("--lineHeight", f2 + "px")
    localStorage.setItem("lineHeightHyp", f2)
  })()
  document.addEventListener("DOMContentLoaded", () => {
    const r = document.documentElement
    const cf = d => {
      let s = parseFloat(getComputedStyle(r).getPropertyValue("--fontSize")) || 14
      let n = Math.min(32, Math.max(8, s + d))
      r.style.setProperty("--fontSize", n + "px")
      localStorage.setItem("fontSizeHyp", n)
    }
    
    const cf2 = d2 => {
      let s2 = parseFloat(getComputedStyle(r).getPropertyValue("--lineHeight")) || 22
      let n2 = Math.min(41, Math.max(17, s2 + d2))
      r.style.setProperty("--lineHeight", n2 + "px")
      localStorage.setItem("lineHeightHyp", n2)
    }
    document.getElementById("font-up").addEventListener("click", () => cf(1))
    document.getElementById("font-down").addEventListener("click", () => cf(-1))
    document.getElementById("font-reset").addEventListener("click", () => {
      r.style.setProperty("--fontSize", "14px")
      localStorage.setItem("fontSizeHyp", "14")
    })
    
    document.getElementById("font-up").addEventListener("click", () => cf2(1))
    document.getElementById("font-down").addEventListener("click", () => cf2(-1))
    document.getElementById("font-reset").addEventListener("click", () => {
      r.style.setProperty("--lineHeight", "22px")
      localStorage.setItem("lineHeightHyp", "22")
    })
  })



/* COLOR DROPPERS */

function hypColorBasic() {
      var letter = document.getElementById("hypColorBasic");
      var userLtr = letter.options[letter.selectedIndex].value;
      if(userLtr == "default"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','defaultPalette');
      }
      if(userLtr == "prettyPink"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','prettyPink');
      }
      else if(userLtr == "cherryRed"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','cherryRed');
      }
      else if(userLtr == "tangyOrange"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','tangyOrange');
      }
      else if(userLtr == "glitterGold"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','glitterGold');
      }
      else if(userLtr == "leafyGreen"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','leafyGreen');
      }
      else if(userLtr == "seafoamTeal"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','seafoamTeal');
      }
      else if(userLtr == "berryBlue"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','berryBlue');
      }
      else if(userLtr == "perfectPurple"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','perfectPurple');
      }
    }

function hypColorPremium() {
      var letter = document.getElementById("hypColorPremium");
      var userLtr = letter.options[letter.selectedIndex].value;
      if(userLtr == "default"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','defaultPalette');
      }
      if(userLtr == "bubblegumCrisis"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','bubblegumCrisis');
      }
      else if(userLtr == "pinkLemonade"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','pinkLemonade');
      }
      else if(userLtr == "hatsuneMiku"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','hatsuneMiku');
      }
      else if(userLtr == "unicornDust"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','unicornDust');
      }
      else if(userLtr == "appleOrchard"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','appleOrchard');
      }
      else if(userLtr == "retroGamer"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','retroGamer');
      }
      else if(userLtr == "summerSunshine"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','summerSunshine');
      }
      else if(userLtr == "citrusTwist"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','citrusTwist');
      }
      if(userLtr == "goldfishPond"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','goldfishPond');
      }
      else if(userLtr == "lightningBolt"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','lightningBolt');
      }
      else if(userLtr == "mayFlowers"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','mayFlowers');
      }
      else if(userLtr == "melonSlice"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','melonSlice');
      }
      else if(userLtr == "blindJustice"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','blindJustice');
      }
      else if(userLtr == "greenerGrass"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','greenerGrass');
      }
      else if(userLtr == "circusTent"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','circusTent');
      }
      if(userLtr == "popsicleStick"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','popsicleStick');
      }
      else if(userLtr == "blueberryLemonade"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','blueberryLemonade');
      }
      else if(userLtr == "gamecubeController"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','gamecubeController');
      }
      else if(userLtr == "mulberryBush"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','mulberryBush');
      }
      else if(userLtr == "jokerBaby"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','jokerBaby');
      }
      else if(userLtr == "dixieCup"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','dixieCup');
      }
    }

function hypColorSpecial() {
      var letter = document.getElementById("hypColorSpecial");
      var userLtr = letter.options[letter.selectedIndex].value;
      if(userLtr == "default"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','defaultPalette');
      }
      else if(userLtr == "preciousMetals"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','preciousMetals');
      }
      else if(userLtr == "cyberPunk"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','cyberPunk');
      }
      else if(userLtr == "cyberPink"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','cyberPink');
      }
      else if(userLtr == "sourCandies"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','sourCandies');
      }
      else if(userLtr == "coffeeCake"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','coffeeCake');
      }
      else if(userLtr == "neaPolitan"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','neaPolitan');
      }
      else if(userLtr == "pikaPika"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','pikaPika');
      }
      else if(userLtr == "camoGear"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','camoGear');
      }
      else if(userLtr == "peppermintPatty"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','peppermintPatty');
      }
    }

function hypColorMonochrome() {
      var letter = document.getElementById("hypColorMonochrome");
      var userLtr = letter.options[letter.selectedIndex].value;
      if(userLtr == "default"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','defaultPalette');
      }
      if(userLtr == "pastelGoth"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','pastelGoth monochrome')
      }
      else if(userLtr == "vampireBlood"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','vampireBlood monochrome');
      }
      else if(userLtr == "jackoLantern"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','jackoLantern monochrome');
      }
      else if(userLtr == "bumbleBee"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','bumbleBee monochrome');
      }
      else if(userLtr == "getSlimed"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','getSlimed monochrome');
      }
      else if(userLtr == "winterNight"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','winterNight monochrome');
      }
      else if(userLtr == "brutalistBlue"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','brutalistBlue monochrome');
      }
      else if(userLtr == "witchingHour"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','witchingHour monochrome');
      }
      else if(userLtr == "doberMann"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','doberMann monochrome');
      }
      else if(userLtr == "newsPrint"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','newsPrint monochrome');
      }
      else if(userLtr == "paintBlack"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','paintBlack monochrome');
      }
    }

function hypColorHoliday() {
      var letter = document.getElementById("hypColorHoliday");
      var userLtr = letter.options[letter.selectedIndex].value;
      if(userLtr == "default"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','defaultPalette');
      }
      if(userLtr == "thanksGiving"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','thanksGiving');
      }
      else if(userLtr == "halloWeen"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','halloWeen');
      }
      else if(userLtr == "stPatrick"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','stPatrick');
      }
      else if(userLtr == "easTer"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','easTer');
      }
      else if(userLtr == "newYear"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','newYear');
      }
      else if(userLtr == "kwanZaa"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','kwanZaa');
      }
      else if(userLtr == "valentinesDay"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','valentinesDay');
      }
      else if(userLtr == "hanuKkah"){
        $('#hyp-color').removeClass();
        $('#hyp-color').attr('class','hanuKkah');
      }
    }