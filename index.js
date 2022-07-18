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
// cekNum(11);

// Nomor 3
const url = "https://jsonplaceholder.typicode.com/users";

const janji = new Promise((resolve, reject) => {
  let getData = fetch(url);
  if (getData) {
    resolve(getData);
  } else {
    reject("gagal");
  }
});

janji
  .then((res) => {
    if (res.status >= 400) {
      throw "Bad response from server";
    }
    return res.json();
  })
  .then((data) => {
    data.forEach((e) => {
      console.log(e.name);
    });
  })
  .catch((error) => {
    console.log(error);
  });
