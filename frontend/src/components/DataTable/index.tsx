const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Aluno</th>
                        <th>Treinos feitos</th>
                        <th>Pontos acumulados</th>
                        <th>Ranking</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>06/05/2021</td>
                        <td>A. T. Yeung</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017</td>
                    </tr>
                    <tr>
                        <td>15/05/2021</td>
                        <td>S. Ruetten</td>
                        <td>32</td>
                        <td>23</td>
                        <td>14899</td>
                    </tr>
                    <tr>
                        <td>27/05/2021</td>
                        <td>P. C. McAfee</td>
                        <td>29</td>
                        <td>18</td>
                        <td>13541</td>
                    </tr>
                    <tr>
                        <td>31/05/2021</td>
                        <td>H. M. Mayer</td>
                        <td>23</td>
                        <td>12</td>
                        <td>11244</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;