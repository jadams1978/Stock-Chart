import React from 'react';
import {connect} from 'react-redux';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export const SimpleLineChart = React.createClass({
	render () {
  	return (
    	<LineChart width={600} height={300} data={this.props.chartData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
      </LineChart>
    );
  }
})