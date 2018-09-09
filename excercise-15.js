function groupAnimals(animals) {
    var hasil = [];
    for (var i = 0; i < animals.length; i++) {
        var animal = animals[i];
        for (var j = 0; j < hasil.length; j++) {
            if (hasil[j][0][0] === animal[0]) {
                hasil[j].push(animal);
                animal = null;
                break;
            }
        }
        if (animal) hasil.push([animal]);
    }

    hasil.sort((a, b) => a[0][0] > b[0][0]);

    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]