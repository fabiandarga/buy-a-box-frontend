/* eslint-disable no-restricted-syntax */
import React from 'react';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
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

function PriceChart(props) {
  const { items } = props;
  Chart.register(CategoryScale);

  // props.items = Array aus { date, lang, code, name, type, price, shop}
  const itemsSorted = items.reduce((acc, item) => {
    const key = `${item.code} ${item.lang.toUpperCase()} (${item.shop})`;
    if (acc[key]) {
      acc[key].push(item);
    } else {
      acc[key] = [item];
    }
    return acc;
  }, {});

  const newDatasets = Object.entries(itemsSorted).map((set, index) => {
    const data = set[1].sort((itemA, itemB) => new Date(itemA.date) - new Date(itemB.date));
    const color = getColorFromIndex(index);
    return {
      label: set[0],
      data: data.map((item) => ({ x: item.date, y: item.price })),
      borderWidth: 3,
      backgroundColor: color,
      borderColor: color,
    };
  });

  return (
    <Card>
      <div className="priceChart">
        <Line
          data={{
            datasets: newDatasets,
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                  boxWidth: 20,
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
