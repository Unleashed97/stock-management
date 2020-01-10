// var canvas = document.getElementById("myChart");
// var ctx = canvas.getContext('2d');
//
// // Global Options:
// Chart.defaults.global.defaultFontColor = 'black';
// Chart.defaults.global.defaultFontSize = 16;
//
// var data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//   datasets: [{
//       label: "Stock A",
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: "rgba(225,0,0,0.4)",
//       borderColor: "red", // The main line color
//       borderCapStyle: 'square',
//       borderDash: [], // try [5, 15] for instance
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: "black",
//       pointBackgroundColor: "white",
//       pointBorderWidth: 1,
//       pointHoverRadius: 8,
//       pointHoverBackgroundColor: "yellow",
//       pointHoverBorderColor: "brown",
//       pointHoverBorderWidth: 2,
//       pointRadius: 4,
//       pointHitRadius: 10,
//       // notice the gap in the data and the spanGaps: true
//       data: [65, 59, 80, 81, 56, 55, 40, ,60,55,30,78],
//       spanGaps: true,
//     }, {
//       label: "Stock B",
//       fill: true,
//       lineTension: 0.1,
//       backgroundColor: "rgba(167,105,0,0.4)",
//       borderColor: "rgb(167, 105, 0)",
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: "white",
//       pointBackgroundColor: "black",
//       pointBorderWidth: 1,
//       pointHoverRadius: 8,
//       pointHoverBackgroundColor: "brown",
//       pointHoverBorderColor: "yellow",
//       pointHoverBorderWidth: 2,
//       pointRadius: 4,
//       pointHitRadius: 10,
//       // notice the gap in the data and the spanGaps: false
//       data: [10, 20, 60, 95, 64, 78, 90,,70,40,70,89],
//       spanGaps: false,
//     }
//
//   ]
// };
//
// // Notice the scaleLabel at the same level as Ticks
// var options = {
//   scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 },
//                 scaleLabel: {
//                      display: true,
//                      labelString: 'Moola',
//                      fontSize: 20
//                   }
//             }]
//         }
// };
//
// // Chart declaration:
// var myBarChart = new Chart(ctx, {
//   type: 'line',
//   data: data,
//   options: options
// });

////////////////////////////////////////////////////////////////////////////

// let data = {
// 	labels : ["January","February","March",
//               "April","May","June",
//               "July","Agost","September",
//               "October","November","December"],
// 	datasets : [
// 		{
// 			backgroundColor : "rgba(252,233,79,0.5)",
// 			borderColor : "rgba(82,75,25,1)",
// 			pointBackgroundColor : "rgba(166,152,51,1)",
// 			pointBorderColor : "#fff",
// 			data : [10, 3, 9, 3, 5, 3],
//       steppedLine: true
// 		}
// 	]
// }
//
// let options = {
//   scales: {
//         yAxes: [{
//             display: true,
//             ticks: {
//                 beginAtZero: true   // minimum value will be 0.
//             }
//         }]
//     }
// }
//
// let ctx = document.getElementById("myChart").getContext("2d");
// new Chart(ctx, {
//   type: 'line',
//   data: data,
//   options: options
// })

///////////////////////////////////////////////////////////////////


//// labels
function rangeLabels()
{
  let arr = [], min=1, max=30;
  for(let i=min; i<=max; i++)
  {
    arr.push(i + ' Day');
  }
  return arr;
}


// function randomScalingFactor()
// 	// return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
//   return Math.floor(Math.random() * 100) + 1;
// }

var arrRandomScale = []; //массив случайных значений
var stockLevel = 10 + Math.random() * (35 + 1 - 10); // уровень оптимального запаса
function randomScalingFactor()
{
  return Math.floor(Math.random() * 100) + 1;
}

function randomData()
{
  // var arrRandomScale = [];
  for(let i=1; i<=30; i++)
  {
    arrRandomScale.push(randomScalingFactor());
  }
  return arrRandomScale;
}

function optimalStockLevel()
{
  // var stockLevel = 20;
  let arrStockData = [];
  for(let i=1; i<=30; i++)
  {
    arrStockData.push(stockLevel);
  }
  return arrStockData;
}

function optimization()
{
  let arrOptimized = arrRandomScale.slice();
  for(let i = 0; i<arrOptimized.length; i++)
  {
    if(arrOptimized[i] < stockLevel)
    {
      arrOptimized[i] = stockLevel;
    }
  }
  return arrOptimized;


  // arrTest = [];
  // for(let i=1; i<=30; i++)
  // {
  //   arrTest.push(Math.floor(Math.random() * 100) + 1);
  // }
  // return arrTest;

}

// DATA
let data = {
  labels: rangeLabels(),
  datasets: [
    // {
    //   label: "Равномерное распределение",
    //   backgroundColor : "rgba(252,233,79,0.5)",
    //   borderColor : "rgba(82,75,25,1)",
    //   pointBackgroundColor : "rgba(166,152,51,1)",
    //   pointBorderColor : "#fff",
    //   data : [10, 3, 9, 3, 5, 3],
    //   lineTension: 0,
    //   steppedLine: true,
    // },

    {
      label: "Оптимальный уровень запаса",
      fill: false,
      borderColor : "blue",
      pointBackgroundColor : "rgba(166,152,51,1)",
      pointBorderColor : "#fff",
      data : optimalStockLevel(),
    },
    {
      type: 'line',
      label: 'Стохастическая модель',
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      borderColor: "rgba(255, 0, 0, 1)",
      // data: [10, 8, 7,6,4,1, 5, 4, 2, 9, 8,7,3,1, 8, 6, 4, 2, 0, 10, 9, 7, 5,3,1],
      data: randomData(),
      steppedLine: true,
    },
    {
      label: 'Оптимизированный график',
      backgroundColor: "rgba(0, 250, 154, 0.5)",
      borderColor: "rgba(0, 250, 154, 1)",
      data: optimization(),
      steppedLine: true,
    }
  ]
}

// OPTIONS
let options = {
  scales: {
    yAxes: [
      {
        display: true,
        ticks: {
          beginAtZero: true   // minimum value will be 0.
        }
      }
    ],

    // xAxes: [
    //   {
    //     type: 'linear',
    //     position: 'bottom'
    //   }
    // ]
  }
}
// DECLARATION CHART
let ctx = document.getElementById('myChart').getContext('2d');
let myLineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options,
  annotation: {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 50,
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 4,
        label: {
          enabled: false,
          content: 'Test label'
        }
      }]
    },
});


// var ctx = document.getElementById('myChart').getContext('2d');
//
// var scatterChart = new Chart(ctx, {
//     type: 'scatter',
//     data: {
//         datasets: [{
//             label: 'Scatter Dataset',
//             data: [{
//                 x: 0,
//                 y: 10
//             }, {
//                 x: 1,
//                 y: 3
//             }, {
//                 x: 1,
//                 y: 6
//             },{
//                 x: 2,
//                 y: 3
//             },{
//                 x: 2,
//                 y: 9
//             }, {
//                 x: 3,
//                 y: 3
//             }, {
//                 x: 3,
//                 y: 7
//             }, {
//                 x: 4,
//                 y: 3
//             }, {
//                 x: 4,
//                 y: 8
//             }, {
//                 x: 5,
//                 y: 3
//             }
//           ],
//           borderColor: 'black',
//          borderWidth: 1,
//          fill: false,
//          tension: 0,
//          showLine: true
//         }]
//     },
//     options: {
//         scales: {
//             xAxes: [{
//                 type: 'linear',
//                 position: 'bottom'
//             }]
//         }
//     }
// });
