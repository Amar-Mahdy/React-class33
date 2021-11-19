import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  XAxis,
  Tooltip,
  CartesianGrid,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export const CityPage = () => {
  const { cityId } = useParams();
  const [data, setData] = useState({});
  const [chart, setChart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
        );
        const data = await response.json();
        setData(data);
        fillData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cityId]);

  const fillData = (data) => {
    const tempData = [];
    for (let num = 0; num < data.cnt; num++) {
      tempData.push({
        date: data.list[num].dt_txt,
        temp: parseFloat(data.list[num].main.temp),
      });
    }
    setChart(tempData);
  };

  return (
    <div>
      {chart.length !== 0 && (
        <>
          <button className="back" onClick={() => navigate("/")}>
            Back
          </button>
          <h1 className="container">charts of 5 days for your favorite city</h1>
          <h3>
            {data.city.name}, {data.city.country}
          </h3>
          <ResponsiveContainer width={1300} height={500}>
            <AreaChart data={chart}>
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0000ff" stopOpacity={0.4} />
                  <stop offset="0%" stopColor="#00cc99" stopOpacity={0.5} />
                </linearGradient>
              </defs>
              <Area dataKey="temp" stroke="#3431A7" fill="url(#color)" />
              <XAxis dataKey="date" tickCount={5} />
              <YAxis dataKey="temp" tickCount={4} />
              <Tooltip />
              <CartesianGrid opacity={0.1} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};
