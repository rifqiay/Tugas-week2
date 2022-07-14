// Nomor 1
// const cekNum = (n) => {
//   try {
//     if (n == "") throw "Input is empty";

//     if (isNaN(n)) throw "Input is not Number";

//     if (n > 10) throw "Input is to high";

//     if (n < 6) throw "Input is to low";
//     else {
//       console.log(n);
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Done");
//   }
// };
// cekNum(10);

// Nomor 2
// const cekNum = (n) => {
//   for (let i = 1; i <= n; i++) {
//     try {
//       if (i <= 4) {
//         throw `${i} is too low`;
//       }
//       if (i > 4 && i <= 10) {
//         console.log(`${i}`);
//       } else {
//         throw `${i} is too high`;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };
// cekNum(5);

// Nomor 3
const janji = new Promise((resolve, reject) => {
  let condition = 1;
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
    console.log(error);
  });
