class StringBuilder {
  #value; 
  //private
  constructor(startValue) {
    this.#value = startValue; 
  //değer
  }
  //value değeri
  getValue() {
    return this.#value;
  }
  //str sonuna ekle
  padEnd(str) {
    this.#value = `${this.#value}${str}`;
  }
  //str başına ekle
  padStart(str) {
    this.#value = `${str}${this.#value}`;
  }
  //str başına ve sonuna
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

//kontrol
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
