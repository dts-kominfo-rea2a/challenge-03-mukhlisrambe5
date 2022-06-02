

// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];


const listBelanjaan = (arrayData)=>{
  data= [];
  for(let i=0; i<arrayData.length; i++){
    data.push("- " + arrayData[i].nama + " x " + arrayData[i].kuantitas);
    //return("- " + arrayData[i].nama + " x " + arrayData[i].kuantitas);
  }
  return data
};

console.log(listBelanjaan(dataBelanjaan));
// const data = (arrayData)=>{
// for(let i=0; i<arrayData.length ; i++){
//   console.log(arrayData[i])
// }
// }

// data([1,2,3])
