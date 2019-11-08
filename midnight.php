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
                                <h4 class="card-title">DT Consumption Summary</h4>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered zero-configuration">
                                        <thead>
                                            <tr>
                                                <th>Total Consumption (KWh) </th>
                                                <th>Average Consumption (KWh)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>77005</td>
                                                <td>1000</td>
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
                                <h4 class="card-title">Energy Audit Last Day</h4>
                                <div id="energy-audit-last-day"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Energy Audit Last 30 Days</h4>
                                <div id="energy-audit-last-30-days"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Category Consumption Last Day</h4>
                                    <div id="category-consumption-last-day"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Category Consumption Last 30 Days</h4>
                                        <div id="category-consumption-last-30-days"></div>
                                    </div>
                                </div>
                            </div>
                    <div class="col-lg-6">
                        <h4>Meter Communication Status</h4>
                        <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-title">Feeder</h6>
                                    <div id="feeder-comm"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h6 class="card-title">DT</h6>
                                        <div id="dt-comm"></div>
                                    </div>
                                </div>
                            </div>
                        <div class="col-lg-6 col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h6 class="card-title">1-ph</h6>
                                        <div id="1-ph-comm"></div>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h6 class="card-title">3-ph</h6>
                                        <div id="3-ph-comm"></div>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h6 class="card-title">3-ph CT</h6>
                                        <div id="3-ph-CT-comm"></div>
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                            <h4>Meter Events</h4>
                            <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h6 class="card-title">Single Phase</h6>
                                        <div id="1-ph-evt"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title">Three Phase</h6>
                                            <div id="3-ph-evt"></div>
                                        </div>
                                    </div>
                                </div>
                            <div class="col-lg-12 col-md-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title">DT</h6>
                                            <div id="dt-evt"></div>
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

    <script src="./js/dashboard/midnight.js"></script>
