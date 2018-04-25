

let cinta_blanda = [
{
'nombre':'Omar',
'edad':24
},
{
'nombre' : 'Francisco',
'edad':39
},
{
'nombre' : 'Nora',
'edad':25
},
{
'nombre' : 'Hossmi',
'edad':25
}
]

for(i=0;i<cinta_blanca.length; i++){
//Creamos elementos de jquery, lo mismo de arriba pero con los objetos de jquery
let h1=$('<h1>'+'Esta persona se llama '+cinta_blanca[i].nombre+' y tiene '+cinta_blanca[i].edad+' años'+'</h1>'); 
$('#elBody').append(h1);

}
