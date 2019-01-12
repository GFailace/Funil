anychart.onDocumentReady(function () {

    var hs1 = document.getElementById('hs1')
    var hs2 = document.getElementById('hs2')
    var hs3 = document.getElementById('hs3')
    var dollar1 = document.getElementById('dollar1')
    var dollar2 = document.getElementById('dollar2')
    var dollar3 = document.getElementById('dollar3')

    var wWidth = 0;

    var color1 = "#FFFFFF";

    // Variable for controlling color darkness
    var colorIndex = 0;

    function colorizer() {
        var mixColor1 = anychart.color.darken(color1, colorIndex);
        colorIndex = colorIndex + 0.05;
        return mixColor1;
    }

    function sizeOfThings(){
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        
        var screenWidth = screen.width;
        var screenHeight = screen.height;

        wWidth = windowWidth
        
        console.log(windowWidth + 'x' + windowHeight)
      
      };
      sizeOfThings();
      
      window.addEventListener('resize', function(){
          sizeOfThings();
      });

    var data = [{

        name: '1ª Etapa',
        name2: 'Venda',
        text:'Potencial',
        negocios:10,
        valor:200000.00,
        value: 33,
        fill: (colorizer())
    },
    {
        name: '2ª Etapa',
        name2: 'Em',
        text: 'Negociação',
        negocios:10,
        valor:200000.00,
        value: 33,
        fill: (colorizer())
    },
    {
        name: '3ª Etapa',
        name2: 'Negociação',
        text: 'Fechada',
        negocios:10,
        valor:200000.00,
        value: 33,
        fill: (colorizer())
    },
    
    ];

    hs1.innerHTML = `<h5><img src="img/handshake.png"/> R$${data[0].valor.toFixed(2)}</h5>`;
    hs2.innerHTML = `<h5><img src="img/handshake.png"/> R$${data[1].valor.toFixed(2)}</h5>`;
    hs3.innerHTML = `<h5><img src="img/handshake.png"/> R$${data[2].valor.toFixed(2)}</h5>`;

    dollar1.innerHTML = `<h5><img src="img/dollar.png"/> ${data[0].negocios} Negócios</h5>`;
    dollar2.innerHTML = `<h5><img src="img/dollar.png"/> ${data[1].negocios} Negócios</h5>`;
    dollar3.innerHTML = `<h5><img src="img/dollar.png"/> ${data[2].negocios} Negócios</h5>`;

    
    var chart = anychart.funnel(data);

    chart.stroke("black", 0.5, null, "round")

    
    chart.background('white')

        .baseWidth('50%')

        .neckHeight('0%');



    chart.labels()
        .useHtml(true)
        .fontWeight(900)
        .position('inside')
        .hAlign('center')
        .fontColor('#85afe1')
        .fontOpacity(1)
        .format("<span style='color:#b1b1b1; font-size:0.65rem;'>{%Name}</span><br><span style='font-size:1rem;'>{%Name2}</span><br><span style='font-size:1rem;'><br><span style='font-size:1rem;'>{%Text}<br><span style='font-size:1rem;'>");
        /*if(wWidth > 460){
        chart.labels().format("<span style='color:#b1b1b1; font-size:0.75rem;'>{%Name}</span><br><span style='font-size:1.25rem;'>{%Name2}</span><br><span style='font-size:1.25rem;'><br><span style='font-size:1.25rem;'>{%Text}");
        }
        if(wWidth < 460){
            chart.labels().format("<span style='color:#b1b1b1; font-size:0.5rem;'>{%Name}</span><br><span style='font-size:0.75rem;'>{%Name2}</span><br><span style='font-size:0.75rem;'><br><span style='font-size:0.75rem;'>{%Text}");
        }*/

    chart.connectorLength(45);


    chart.container('container');

    chart.tooltip()
    .useHtml(true)
    .format("Valor: R${%Valor}<br>Negócios: <b>{%Negocios}<br></b>Porcentagem: <b>{%Value}%</b>")
    .separator(false)

    chart.legend(false)
    /*.useHtml(true)
    .itemsLayout("vertical")
    .position("right")
    .positionMode("outside")
    .itemsSourceMode("categories")
    .itemsFormat("<h5>{%Negocios} Negócios</h5></div>")*/

    $('#1').append(`<span style='font-size:1.5rem; float:right;'>${data[0].value}%</span>`)
    $('#2').append(`<span style='font-size:1.5rem; float:right;'>${data[1].value}%</span>`)
    $('#3').append(`<span style='font-size:1.5rem; float:right;'>${data[2].value}%</span>`)


    chart.draw();
});