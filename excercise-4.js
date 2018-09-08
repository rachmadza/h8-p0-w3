var input= ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(array) {

    // array splice
    array.splice(1, 1, 'Roman Alamsyah Elsharawy');
    array.splice(2, 1, 'Provinsi Bandar Lampung');
    array.splice(4, 1, 'Pria', 'SMA International');
    console.log(array);

    //ambil data tanggal
    var tanggal = array[3];


    //split data tanggal
    var tgl = tanggal.split('/');

    //menggunakan 'switch' pada data tanggal yang telah di split
    switch (tgl[1]) {
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;

        default:
            break;
    }

    //variable baru join
    var joinTgl = tgl.join('-');

    //sort array tanggal hasil split
    tgl.sort(function (value1, value2) { return value2 - value1 });

    //menampilkan tanggal hasil split
    console.log(tgl);
    //menampilkan data tanggal dengan join
    console.log(joinTgl);

    var nama = array[1];
    //tampilkan data nama yang telah dibatasi 15 karakter menggunakan slice
    console.log(nama.slice(0, 15));

}


dataHandling2(input);











