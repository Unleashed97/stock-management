var chartData = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
  datasets: [
    {
      data: [12, 3, 2, 1, 8, 8, 2, 2, 3, 5, 7, 1]
    }
  ]
};

window.onload = function() {
  var ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: chartData,
    options: {
      annotation: {
        annotations: [
          {
            type: "line",
            mode: "vertical",
            scaleID: "x-axis-0",
            value: "MAR",
            borderColor: "red",
            label: {
              content: "TODAY",
              enabled: true,
              position: "top"
            }
          }
        ]
      }
    }
  });
};
