function Relogio(){
    var BRASIL = setInterval (function(){
    var relogio1 = new Date();
    var h1 = relogio1.getHours();
    var m1 = relogio1.getMinutes();
    var s1 = relogio1.getSeconds();
    var d1 = relogio1.getDate();
    var mes1 = relogio1.getMonth();
    var ano1 = relogio1.getFullYear();
    var sem1 = relogio1.getDay();
    if(h1 < 10){
        h1="0"+h1;
    }
    if(m1 < 10){
        m1="0"+m1;
    }
    if(s1 < 10){
        s1="0"+s1;
    }
    dsemana = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado");
    meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    var minhahora1 = h1 + ":" + m1 + ":" + s1;
    var minhadata1 = d1 + " de " + meses[mes1] + " de " + ano1;
    var minhasemana1 = dsemana[sem1];
    horaatual.innerHTML = minhahora1;
    diaatual.innerHTML = minhadata1;
    semanaatual.innerHTML = minhasemana1;
},1000)};


function Relogionz(){
    var NOVAZ = setInterval(function(){
    var relogio2 = new Date().getTime() + 57600000;
    var relogio = new Date(relogio2);
    var h = relogio.getHours();
    var m = relogio.getMinutes();
    var s = relogio.getSeconds();
    var d = relogio.getDate();
    var mes = relogio.getMonth();
    var ano = relogio.getFullYear();
    var sem = relogio.getDay();
    
    if(h < 10){
        h="0"+h;
    }
   
    if(m < 10){
        m="0"+m;
    }
    if(s < 10){
        s="0"+s;
    }
    dsemana = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado");
    meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    var minhahora = h + ":" + m + ":" + s;
    var minhadata = d + " de " + meses[mes] + " de " + ano;
    var minhasemana = dsemana[sem]
    horaatual1.innerHTML = minhahora;
    diaatual1.innerHTML = minhadata;
    semanaatual1.innerHTML = minhasemana;
},1000)};


function RelogioAlemanha(){
    var ALEMANHA = setInterval(function(){
    var relogio3 = new Date().getTime() + 14400000;
    var relogio = new Date(relogio3);
    var h = relogio.getHours();
    var m = relogio.getMinutes();
    var s = relogio.getSeconds();
    var d = relogio.getDate();
    var mes = relogio.getMonth();
    var ano = relogio.getFullYear();
    var sem = relogio.getDay();
    
    if(h < 10){
        h="0"+h;
    }
   
    if(m < 10){
        m="0"+m;
    }
    if(s < 10){
        s="0"+s;
    }
    dsemana = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado");
    meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    var minhahora = h + ":" + m + ":" + s;
    var minhadata = d + " de " + meses[mes] + " de " + ano;
    var minhasemana = dsemana[sem]
    horaatual2.innerHTML = minhahora;
    diaatual2.innerHTML = minhadata;
    semanaatual2.innerHTML = minhasemana;
},1000)};