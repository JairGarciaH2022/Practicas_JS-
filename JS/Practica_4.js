
let dias,mes,año;
mes = prompt('Introduzca el numero del mes','');
mes = parseInt(mes);

if (mes==1||mes==2||mes==3||mes==4||mes==5||mes==6||mes==7||mes==8||mes==9||mes==10||mes==11||mes==12)
 {
     document.write ('Este mes tiene 31 dias');
 }
 else 
 {
if (mes==2)  
document.write ('Este mes puede tener 30 dias');
else
document.write ('Este mes tiene 30 dias');
} 