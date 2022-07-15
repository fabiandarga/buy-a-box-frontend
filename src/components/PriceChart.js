import React from "react";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Card from "./Card.js";

function PriceChart(props) {
  Chart.register(CategoryScale);

  // props.items = Array aus { date, lang, code, name, type, price, shop}
  const itemsSorted = props.items.reduce((acc, item) => {
    const key = `${item.shop}/${item.code}/${item.lang}`;
    if (acc[key]) {
      acc[key].push(item);
    } else {
      acc[key] = [item];
    }
    return acc;
  }, {});

  const newDatasets = Object.entries(itemsSorted).map((set) => {
    const data = set[1].sort(
      (itemA, itemB) => new Date(itemA.date) - new Date(itemB.date)
    );

    return {
      label: set[0],
      data: data.map((item) => ({ x: item.date, y: item.price })),
      backgroundColor: ["yellow"],
      borderColor: ["red"],
      borderWidth: 1,
    };
  });

  return (
    <Card>
      <div>
        <Line
          data={{
            datasets: newDatasets,
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </Card>
  );
}

export default PriceChart;
