    var tab = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var tab1 = [];
    var n;

    var entrer = ["B", "R", "U", "N", "O"];
    var sortie = [];

    var test;
    var t = [];
    var t1 = [];
    var res;

function cryptage(){
    n = parseInt(document.getElementById("n").value);
    test = document.getElementById("entree").value;
    for (var i = 0; i < tab.length; i++) {
        if (i<tab.length - n) {
            tab1[i] = tab[i + n];
        } else {
            tab1[i] = tab[i - (tab.length - n)];
        }
    }
    for (var i = 0; i < entrer.length; i++) {
        for (var j = 0; j < tab.length; j++) {
            if (entrer[i] == tab[j]) {
                sortie[i] = tab1[j];
            }
        }
    }
    for (var i = 0; i < test.length; i++) {
        t[i]= test.charAt(i);
        for (var j = 0; j < tab.length; j++) {
            if (t[i] == tab[j]) {
                t1[i] = tab1[j];
            }
        }
    }
    res = t1.join('');
    console.log("resultat: ", res);
    sort.textContent = t1.join('');
}