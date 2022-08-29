/* eslint-disable no-restricted-syntax */
import React from 'react';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2';
import Card from './Card';
import './priceChart.css';

const allColors = [
  '#099',
  '#340070',
  '#4d6200',
  '#f24d12',
  '#218d3a',
  '#874b98',
  '#6a741a',
  '#df3aa8',
  '#693aa6',
  '#b37038',
];

function getColorFromIndex(index) {
  const colorIndex = index % allColors.length;
  return allColors[colorIndex];
}

function getLabelForDataSet(key) {
  const parts = key.split('/');
  return `${parts[0]} ${parts[1]} [${parts[2].substr(0, 2)}] (${parts[3]})`;
}

function PriceChart(props) {
  const { items } = props;
  Chart.register(CategoryScale);

  // props.items = Array aus { date, lang, code, name, type, price, shop}
  const itemsSorted = items.reduce((acc, item) => {
    // const key = `${item.code} ${item.lang.toUpperCase()} (${item.shop})`;
    const key = `${item.code}/${item.type}/${item.lang.toLowerCase()}/${item.shop}`;
    if (acc[key]) {
      acc[key].push(item);
    } else {
      acc[key] = [item];
    }
    return acc;
  }, {});

  const newDatasets = Object.entries(itemsSorted).map((set, index) => {
    const data = set[1]
      .sort((itemA, itemB) => new Date(itemA.date) - new Date(itemB.date))
      .map((item) => ({ x: item.date, y: item.price }));
    const color = getColorFromIndex(index);

    return {
      label: getLabelForDataSet(set[0]),
      data,
      borderWidth: 3,
      backgroundColor: color,
      borderColor: color,
    };
  });

  return (
    <Card>
      <div className="priceChart">
        <noscript>You need to enable JavaScript to see the price chart.</noscript>
        <Line
          data={{
            datasets: newDatasets,
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxis: {
                // The axis for this scale is determined from the first letter of the id as `'x'`
                // It is recommended to specify `position` and / or `axis` explicitly.
                type: 'time',
                time: {
                  unit: 'day',
                  tooltipFormat: 'dd.MM.yyyy',
                },
              },
            },
            plugins: {
              legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                  boxWidth: 7,
                },
              },
            },
          }}
        />
      </div>
    </Card>
  );
}

export default PriceChart;
