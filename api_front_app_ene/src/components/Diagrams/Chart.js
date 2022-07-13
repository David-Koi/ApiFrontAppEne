import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component{
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: props.apiRes.days
        }
      },
      series: [
        {
          name: "series-1",
          data: props.apiRes.percentage
        }
      ]
    };
  }
  
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            {console.log('allé voy')}
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="1000"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;