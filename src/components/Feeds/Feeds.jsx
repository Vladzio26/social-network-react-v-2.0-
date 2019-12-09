import React from 'react';
import s from './Feeds.module.css';

const Feeds = () =>{
    const Cp = 2600;
    const Ke = 0.03; 
    const GidOpir = 0.009;
    const z = 0.9;
    var molMas = prompt("Введіть 'молярну масу'", this)//моолярна масса
    

    var outDiametr =  prompt("Введіть 'Зовнішній діаметр'", this)
    var widthWall = prompt("Введіть'товщину стінки'", this);
    


    var Pn = prompt("Введіть 'Початковий тиск'", this);
    var M = prompt("Введіть 'Масова витрата'", this);
    var L = prompt("Введіть 'Довжину'", this);
    var k = prompt("Введіть 'коефіцієнт теплопровідності'", this);
    var Tgr = prompt("Введіть'температуру груунту'", this);
    var Tp =prompt("Введіть 'початкову температуру'", this);
   
    var R=(287.1/molMas);//газова стала
    var innerDiametr = ((outDiametr - (2*widthWall))/100)
    
    var Pk = (Math.pow(Pn,2))-((16*(M,2)*GidOpir*z*R*300*L)/(Math.pow(3.14, 2)*Math.pow(innerDiametr, 5)*2.5))
    var Pkk = Math.sqrt(Pk)//кінцевий тиск

    

    var A = (k*3.14*outDiametr)/(M*Cp);

    var al = -(A*L);
    
    var Tkk = Math.pow(Math.E,al);
    var Tk = Tgr + (Tp-Tgr)*Tkk;

    //Tser = Tgr+(Tn)/()

    var Re = (4*M)/(3.14*innerDiametr*0.0000122)

    var gidravOpir = 0.067*((158/Re)+((2*Ke)/innerDiametr));

    var Pser = 0.66666*(Pn+(Math.pow(Pkk, 2))/(Pn+Pkk));//значення вкличини середнього тиску в газопроводі

    //var Zser = 1 - 5.5 * Math.pow(10, 6) * (Pser*Math.pow(molMas,1.3)/(Math.pow(T)));

return <>
<table className = {s.tg}>
    <tr>
        <td id={s.header} colspan="5">Вхідні дані</td>
    </tr>
    <tr >
        <td>Варіант</td>
        <td>Довжина, км</td>
        <td>Діаметр зовнішній, мм</td>
        <td>Товщина стінки, мм</td>
        <td>Початкова температура, 0С</td>
    </tr>
    <tr >
        <td>6</td>
        <td>{L}</td>
        <td>{outDiametr}</td>
        <td>{widthWall}</td>
        <td>{Tp}</td>
    </tr>
    <tr >
        <td>Коеф. теплопередачі,
Вт/(м2·К)
</td>
        <td>Відносна густина газу</td>
        <td>Темп. грунту, 
0С
</td>
        <td>Масова витрата, кг/с</td>
        <td>Початковий тиск, 
кгс/см2
</td>
    </tr>
    <tr>
        <td>{k}</td>
        <td>{molMas}</td>
        <td>{Tgr}</td>
        <td>{M}</td>
        <td>{Pn}</td>
    </tr>
    <tr>
        <td id={s.header} colspan="5">Результати розрахунків</td>
    </tr>
    <tr>
        <td >Газова стала,
Дж/(кг·К)
</td>
        <td>Кінцевий тиск, кгс/см2</td>
        <td>Кінцева температура, 0С</td>
        <td>Параметр  a,
м-1
</td>
        <td>Коеф. гідравлічного опору</td>
        
    </tr>
    <tr>
        <td>{R}</td>
        <td>{Pkk}</td>
        <td>{Tk}</td>
        <td>{A}</td>
        <td>{gidravOpir}</td>

    </tr>
    
</table>
</>
}

export default Feeds;