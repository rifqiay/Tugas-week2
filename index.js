// Nomor 1
// const cekNum = (n) => {
//   try {
//     if (n == "") throw "Input is empty";

//     if (isNaN(n) === true) throw "Input is not Number";

//     if (n > 10) throw "Input is to high";

//     if (n <= 5) throw "Input is to low";
//     else {
//       console.log(n);
//     }
//   } catch (error) {
//     console.log(`error ${error}`);
//   } finally {
//     console.log("Done");
//   }
// };
// cekNum(7);

// Nomor 2
const cekNum = (n) => {
  for (let i = 1; i <= n; i++) {
    try {
      if (i <= 4) {
        throw `${i} is too low`;
      }
      if (i > 4 && i <= 10) {
        console.log(`${i}`);
      }
      if (i > 10) {
        throw `${i} is too high`;
      }
    } catch (error) {
      console.log(`error ${error}`);
    }
  }
};
cekNum(5);

// Nomor 3
const janji = new Promise((resolve, reject) => {
  const condition = 1;
  if (condition == 1) {
    resolve("hello world");
  } else {
    reject("gagal");
  }
});

janji
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(`error ${error}`);
  });
