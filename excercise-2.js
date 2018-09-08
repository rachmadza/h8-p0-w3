function balikString(balik) {

    var tampil ='';

    for(var i = balik.length-1; i>=0; i--) {
        tampil += balik[i];
    }


    return tampil;

}

console.log(balikString('hello world!'));
