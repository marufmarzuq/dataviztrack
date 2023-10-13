import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarChartViz = () => {
  const curr_data = useSelector((state) => state?.home?.curr_data);

  return (
    <div>
      <div style={{ height: "480px", p: "20px 15px 20px 0" }}>
        <ResponsiveContainer width="99%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={curr_data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="linear"
              dataKey="amount"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartViz;
