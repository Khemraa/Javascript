var Obj=[
  {
    id:1001,Name:"Khemra",School:"AUPP"
  },
  {
    id:1002,Name:"Honey hah",School:"RUPP"
  },
  {
    id:1000,Name:"Honey hah",School:"RUPP"
  },
]
var resultMap= Obj.map((e)=>e);
var resultName= Obj.filter((e)=>e.id <=1001).map((e)=>e);
console.log(resultName);