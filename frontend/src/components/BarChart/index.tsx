import Chart from 'react-apexcharts'

const BarChart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Ruetten', 'Yeung', 'McAfee', 'Mayer', 'Kassam']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 89.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };
    
    return (
        <Chart 
            options={{...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;