function rysujChoinke(rozmiarChoinki) {
    for(var n=1; n<=rozmiarChoinki; n++) {
        var star="";
        for(var i = 1; i <= n*2 - 1; i++) {
            star += "*";
        }
        console.log(star);
    }
}
rysujChoinke(5);