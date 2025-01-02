console.log('hi');

let canvas=document.getElementById('draw');

let context=canvas.getContext('2d');
context.strokeStyle='#BADA55'
context.lineWidth=100;
context.lineJoin = 'round';
context.lineCap = 'round';

let painting=false;

let oneX,oneY;

let colors=0

let currentCol=0;

let ok=true;
canvas.addEventListener('mousedown',(e)=>{
painting=true;
oneX=e.offsetX;
oneY=e.offsetY;});

canvas.addEventListener('mousemove',(e)=>{
if(painting){

context.beginPath();
context.moveTo(oneX,oneY);
context.lineTo(e.offsetX,e.offsetY);
context.stroke();

oneX=e.offsetX;
oneY=e.offsetY;
context.strokeStyle=`hsl(${colors}, 100%, 50%)`;
colors++;
if(colors>=360){
colors=0;}

if(context.lineWidth>=100){
ok=false}

if(ok){width++;}
else{width--;}

}
});

canvas.addEventListener('mouseup',(e)=>{

painting=false;
});

/*let colors=['orange','white','green','yellow','red']

let currentCol=0;

canvas.addEventListener('click',()=>{
context.strokeStyle=colors[currentCol];
currentCol=(currentCol+1)%colors.length;
})
*/



