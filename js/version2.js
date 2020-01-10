//// labels
function rangeLabels()
{
  let arr = [], min=1, max=30;
  for(let i=min; i<=max; i++)
  {
    arr.push(i + ' День');
  }
  return arr;
}


var arrRandomWeekAll = [];

// генерация случайных чисел
function randomScalingFactor()
{
  return Math.floor(Math.random() * 100) + 1;
}

function randomDataWeek() //заполнение случайными значениями Неделя
{
  var arrRandomWeekOne = [],
  arrRandomWeekTwo = [],
  arrRandomWeekThree = [],
  arrRandomWeekFour = [];
  for(let i =1; i<=7; i++)
  {
    // случайные значения
    arrRandomWeekOne.push(randomScalingFactor());
    arrRandomWeekTwo.push(randomScalingFactor());
    arrRandomWeekThree.push(randomScalingFactor());
    arrRandomWeekFour.push(randomScalingFactor());
  }
  // сортировка по убыванию
  arrRandomWeekOne.sort((a, b) => b - a);
  arrRandomWeekTwo.sort((a, b) => b - a);
  arrRandomWeekThree.sort((a, b) => b - a);
  arrRandomWeekFour.sort((a, b) => b - a);

  // совмещение массивов
  arrRandomWeekAll = arrRandomWeekOne.concat(arrRandomWeekTwo, arrRandomWeekThree, arrRandomWeekFour);

  return arrRandomWeekAll;
}

var arrChanged = [];
function optStockLvl()
{
  var arrOptimalData = arrRandomWeekAll.slice();

  for(let i=0; i<arrOptimalData.length; i++)
  {
    arrChanged.push(arrOptimalData[i] / 3);
  }
  return arrChanged;
}

function delayOpt() {
  var timeoutID = window.setTimeout(optStockLvl, 100);
}

delayOpt();



// DATA
let data = {
  labels: rangeLabels(),
  datasets: [
    {
      type: 'line',
      label: 'Стохастическая модель',
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      borderColor: "rgba(255, 0, 0, 1)",
      data: randomDataWeek(),
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

  },
  // Vertical lines (weeks)
   annotation: {
        annotations: [
          {
            type: "line",
            mode: "vertical",
            scaleID: "x-axis-0",
            value: "7 День",
            borderColor: "Yellow",
            borderWidth: "4",
            label: {
              content: "1 Неделя",
              enabled: true,
              position: "bottom"
            }
          },
          {
            type: "line",
            mode: "vertical",
            scaleID: "x-axis-0",
            value: "14 День",
            borderColor: "Yellow",
            borderWidth: "4",
            label: {
              content: "2 Неделя",
              enabled: true,
              position: "bottom"
            }
          },
          {
            type: "line",
            mode: "vertical",
            scaleID: "x-axis-0",
            value: "21 День",
            borderColor: "Yellow",
            borderWidth: "4",
            label: {
              content: "3 Неделя",
              enabled: true,
              position: "bottom"
            }
          },
          {
            type: "line",
            mode: "vertical",
            scaleID: "x-axis-0",
            value: "28 День",
            borderColor: "Yellow",
            borderWidth: "4",
            label: {
              content: "4 Неделя",
              enabled: true,
              position: "bottom",
            }
          }
        ]
      }

}


// DECLARATION CHART
let ctx = document.getElementById('myChart').getContext('2d');
let myLineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options,
});


// добавление графика
var btn = document.getElementById('btn');
btn.addEventListener('click', function ()
{
  var newDataset =
  {
    label: "Оптимальный уровень запаса",
    backgroundColor: 'rgba(99, 255, 132, 0.5)',
    borderColor: 'rgba(99, 255, 132, 1)',
    data: arrChanged,
    steppedLine: true,
  }

  data.datasets.push(newDataset);
  myLineChart.update();
  btn.disabled = true;
});
