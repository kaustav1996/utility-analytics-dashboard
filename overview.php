<?php
    include "main_components.php";
?>
        <!--**********************************  
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid mt-3">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Category Wise Consumption</h4>
                                <div id="category-wise-consumption"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Category Status</h4>
                                <div id="category-status"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Phase wise total meter installed</h4>
                                <div id="phase-wise-meter-installed"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Phase wise total meter supplied</h4>
                                <div id="phase-wise-meter-supplied"></div>
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
        <script src="./js/dashboard/overview.js"></script>
