var input = [
    ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
    ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
    ['0003', 'Winona', 'Ambon', '25/12/65', 'Memasak'],
    ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun'],
]

function dataHandling(cetak) {

    for (var input = 0; input < 4; input++){

        console.log('Nomor ID : ' +cetak[input][0]);
        console.log('Nama : ' +cetak[input][1]);
        console.log('TTL : ' +cetak[input][2]+ ' ' +cetak[input][3]);
        console.log('Hobi : ' +cetak[input][4]);
        console.log();
    
    }

}

dataHandling(input);