function rysujChoinke(rozmiarChoinki) {
    for(var n=1; n<=rozmiarChoinki; n++) {
        var star="";
        var space="     ";
        for(var i = 1; i <= n*2 - 1; i++) {
            star += "*";
        }
        for(var i = 1; i <= n; i++)  {
            space = space.slice(0, -1);
        }
        console.log(space + star);
    }
}
rysujChoinke(5);