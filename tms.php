<?php
include "main_components.php";
?>

        <!--**********************************  
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid mt-3">
                <div class="row">
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Transformer Voltage (Last Day)</h4>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered zero-configuration">
                                        <thead>
                                            <tr>
                                                <th>Below 5%</th>
                                                <th>Above 5%</th>
                                                <th>Normal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>4</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">DT Communication Status</h6>
                                <div id="dt-communication-status"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">DT Events</h6>
                                <div id="dt-evt"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body pb-0 d-flex justify-content-between">
                                            <div>
                                                <h4 class="mb-1">Transformer Load and Consumption</h4>
                                                <p>Total DT Count</p>
                                                <h3 class="m-0">359</h3>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li class="d-inline-block mr-3"><a class="text-dark" href="#">ESD-1</a></li>
                                                    <li class="d-inline-block mr-3"><a class="text-dark" href="#">ESD-2</a></li>
                                                    <li class="d-inline-block mr-3"><a class="text-dark" href="#">ESD-3</a></li>
                                                    <li class="d-inline-block mr-3"><a class="text-dark" href="#">ESD-4</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="chart-wrapper">
                                            <canvas id="chart_widget_2"></canvas>
                                        </div>
                                        <div class="card-body">
                                            <h4>ESD wise DT Communication</h4>
                                            <div class="d-flex justify-content-between">
                                                <div class="w-100 mr-2">
                                                    <h6>ESD-1</h6>
                                                    <div class="progress" style="height: 6px">
                                                        <div class="progress-bar bg-danger" style="width: 98%"></div>
                                                    </div>
                                                </div>
                                                <div class="ml-2 w-100">
                                                    <h6>ESD-2</h6>
                                                    <div class="progress" style="height: 6px">
                                                        <div class="progress-bar bg-primary" style="width: 92%"></div>
                                                    </div>
                                                </div>
                                                <div class="ml-2 w-100">
                                                    <h6>ESD-3</h6>
                                                    <div class="progress" style="height: 6px">
                                                        <div class="progress-bar bg-primary" style="width: 88%"></div>
                                                    </div>
                                                </div>
                                                <div class="ml-2 w-100">
                                                        <h6>ESD-4</h6>
                                                        <div class="progress" style="height: 6px">
                                                            <div class="progress-bar bg-primary" style="width: 75%"></div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <!--**********************************  
            Content body end
        ***********************************-->
        
        <?php
include "main_components_2.php";
?>       
     
    <script src="./js/dashboard/tms.js"></script>
