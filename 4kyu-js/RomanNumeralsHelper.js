class RomanNumerals {
  static toRoman(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];

    let roman = "";

    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        roman += symbols[i];
        num -= values[i];
      }
    }

    return roman;
  }

  static fromRoman(str) {
    const romanToNum = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let num = 0;
    let i = 0;

    while (i < str.length) {
      if (i + 1 < str.length && romanToNum[str.substring(i, i + 2)]) {
        num += romanToNum[str.substring(i, i + 2)];
        i += 2;
      } else {
        num += romanToNum[str.charAt(i)];
        i += 1;
      }
    }

    return num;
  }
}
