import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de alunos</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary"> Aproveitamento % </h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary"> Rankings consolidados </h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Desempenho detalhado</h2>
        </div>


        <div/>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
