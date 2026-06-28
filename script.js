function calculer() {

    const facture = Number(document.getElementById("facture").value);

    if (facture <= 0) {
        document.getElementById("resultat").innerHTML =
            "Veuillez entrer votre facture EDF.";
        return;
    }

    const economie = Math.round(facture * 12 * 0.65);

    document.getElementById("resultat").innerHTML =
        "<p>Vous pourriez économiser jusqu'à :</p>" +
        "<span style='font-size:46px;color:#D4AF37;font-weight:bold;'>" +
        economie + " € / an</span><br><br>" +
        "<a href='#contact' class='btn-yellow'>Recevoir mon devis gratuit</a>";

}

window.addEventListener("scroll", function () {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(255,255,255,0.97)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        nav.style.background = "rgba(255,255,255,.92)";
        nav.style.boxShadow = "0 1px 15px rgba(0,0,0,.05)";

    }

});