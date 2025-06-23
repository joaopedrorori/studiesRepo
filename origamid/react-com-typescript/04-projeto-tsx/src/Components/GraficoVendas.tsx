import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { IVenda } from "../Context/DataContext";

const dadosGrafico = [
  {
    data: "2023-05-03",
    pago: 30000,
    processando: 3000,
    falha: 2000,
  },
  {
    data: "2023-05-04",
    pago: 40000,
    processando: 5000,
    falha: 6000,
  },
  {
    data: "2023-05-04",
    pago: 40000,
    processando: 5000,
    falha: 6000,
  },
  {
    data: "2023-05-04",
    pago: 20000,
    processando: 1000,
    falha: 3000,
  },
  {
    data: "2023-05-04",
    pago: 40000,
    processando: 5000,
    falha: 6000,
  },
];

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width={"99%"} height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
