var Obj=[
  {
    id:1001,Name:"Khemra",School:"AUPP"
  },
  {
    id:1002,Name:"Honey hah",School:"RUPP"
  },
]
var id= Obj.map((name)=>name.id);
var Name= Obj.map((name)=>name.Name);
var School= Obj.map((name)=>name.School);
console.log(id,Name,School);


