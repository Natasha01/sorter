class Sorter {
  constructor() {
    this.myarray = [];
    this.compare = (left, right) => left - right;
  }

  add(element) {
    this.myarray.push(element);
  }

  at(index) {
    return this.myarray[index];
  }

  get length() {
    return this.myarray.length;
  }

  toArray() {
    return this.myarray;
  }

  sort(indices) {

    indices.sort((left, right) => left - right);
    var help_arr = [];

    for (var i = 0; i < indices.length; i++){
      help_arr[i] = this.myarray[indices[i]];
    }
    
    help_arr.sort(this.compare);

    for (i = 0; i < help_arr.length; i++){
      this.myarray[indices[i]] = help_arr[i];
    }

  }

  setComparator(compareFunction) {    
    return this.compare = compareFunction;
  }

}

module.exports = Sorter;