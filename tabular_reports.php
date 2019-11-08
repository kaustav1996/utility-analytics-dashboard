<?php
include "main_components.php";
include "db_config.php";
?>

        <!--**********************************  
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid mt-3">
            <div class="row">
                <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Choose Report</h4>

                                <p class="text-muted">Choose one of the reports and provide desired inputs and then click Fetch</p>
                                <button id="report_list_button" onclick="myFunction()" class="input-group-text bg-transparent border-1 pr-2 pr-sm-3">Show Report List</button>
                                <div class="dropdown">
                                    
                                    <div id="myDropdown" class="dropdown-menu">
                                        <input class="input-default" type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
                                        <?php
                                        $stmt = $DB_con->prepare('SELECT * FROM reports where CONVERT(report_access,SIGNED INTEGER) >= '.$_SESSION['user_level'].' ORDER BY report_id DESC');
                                            $stmt->execute();
                                            if($stmt->rowCount() > 0)
                                            {
                                                while($row=$stmt->fetch(PDO::FETCH_ASSOC))
                                                {
                                                extract($row);
                                            ?>
                                                <a class="dropdown-item" href="#" onclick='return get_input(<?php echo json_encode([$row["report_id"],$row["report_desc"],$row["report_input_type"],$row["report_inputs"]]); ?> )' ><?php echo $row['report_name']; ?></a> 
                                            <?php
                                                }
                                            }
                                            ?>
                                    </div>
                                    
                                </div>
                                <br>
                                <br>
                                <h6 id="report_desc" >No Report Selected</h6>
                                <form id="report_div" method="POST" class="mt-5 mb-5 login-input">
                                
                                </form>
                            </div>

                        </div>
                </div>
            </div> 
             <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                            <h6 id="report_title" class="card-title"></h6>
                                    
            <?php
                if(isset($_POST['get_result'])) {
                    $report_id=$_POST['report_id'];
                    $stmt = $DB_con->prepare('SELECT * FROM reports where report_id = '.$report_id);
                    
                    $stmt->execute();
                    if($stmt->rowCount() > 0)
                    {
                        while($row=$stmt->fetch(PDO::FETCH_ASSOC))
                        {
                            extract($row);
                            echo "<script>document.getElementById('report_title').innerHTML='".$row['report_desc']."';</script>";
                            $report_sql=$row['report_sql'];
                            
                            $inputs=explode(',',$row['report_inputs']);
                            $input_types=explode(',',$row['report_input_type']);
                            $form_inputs=array();
                            $i=0;
                            for($i=0;$i<count($input_types);$i++){
                                $x=$_POST[ltrim($inputs[$i],":")];
                                if($input_types[$i]=='date'){
                                    $x=strtoupper(date('d-M-y',strtotime($x)));
                                }
                                if(strpos($inputs[$i], ':') !== false){
                                    $report_sql=str_replace($inputs[$i],"'".$x."'",$report_sql);
                                }
                                else{
                                    $report_sql=str_replace(":".$inputs[$i],"'".$x."'",$report_sql);
                                }
                                
                            }
                            $table_Result=$DB_con->prepare($report_sql);
                            $table_Result->execute();
                            if($table_Result->rowCount() > 0){
                                $j=0;
                                while($r=$table_Result->fetch(PDO::FETCH_ASSOC))
                                {
                                    
                                    extract($r);
                                    if($j==0){
                                        echo "<div id='report_table' class='table-responsive'>
                                        <button style='margin-left: 45%;' class='input-group-text bg-transparent border-1 pr-2 pr-sm-3' id='export_excel' name='export_excel' onclick='return ExportToExcel(\"".$row['report_desc']."\")'>Export Excel</button>
                                        <table  id='only_report_table' class='table table-striped table-bordered zero-configuration'><thead><tr>";
                                        foreach ($r as $key => $value){
                                            echo "<th>".$key."</th>";
                                        }
                                        echo "</tr></thead><tbody>";
                                        $j++;
                                    }
                                    echo "<tr>";
                                    foreach ($r as $key => $value){
                                        echo "<td>".$value."</td>";
                                    }
                                    echo "</tr>";

                                }
                                echo "</tbody></table></div>";
                            }
                            else
                        {
                            echo "<p>No Data Found</p>";
                        }
                            
                        }
                    }
                    

                }
?>

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
        <script src="./js/reports/tabular_reports.js"></script>
        <script src="./plugins/tables/js/jquery.dataTables.min.js"></script>
        <script src="./plugins/tables/js/datatable/dataTables.bootstrap4.min.js"></script>
        <script src="./plugins/tables/js/datatable/dataTables.bootstrap4.min.js"></script>
        <script src="./plugins/tables/js/datatable-init/datatable-basic.min.js"></script>
        <script src="./plugins/tables/js/pdfmake.min.js"></script>
        <script src="./plugins/tables/js/jszip.min.js"></script>
        <script src="./plugins/tables/js/buttons.print.min.js"></script>
        <script src="./plugins/tables/js/buttons.html5.min.js"></script>
        <script src="./plugins/tables/js/vfs_fonts.js"></script>
        <script>
        /* When the user clicks on the button,
        toggle between hiding and showing the dropdown content */
        function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
        if(document.getElementById("report_list_button").innerHTML=="Hide Report List"){
            document.getElementById("report_list_button").innerHTML="Show Report List";
        }
        else{
            document.getElementById("report_list_button").innerHTML="Hide Report List";
        }
        
        }

        function filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
            } else {
            a[i].style.display = "none";
            }
        }
        }
        function get_input(report){
            console.log(report);
            var report_div=document.getElementById("report_div");
            var report_table=document.getElementById("report_table");
            document.getElementById("report_desc").innerHTML=report[1];
            try {
                while(report_div.hasChildNodes()) {
                    report_div.removeChild(report_div.childNodes[0]);
                }
            }
            catch(err){
                //do nothing
            }
            try {
                while(report_table.hasChildNodes()) {
                    report_table.removeChild(report_table.childNodes[0]);
                }
            }
            catch(err){
                //do nothing
            }
            
            $("#report_div").append('<input type="hidden" name="report_id" value="'+report[0]+'"/><div class="form-group row">');
            var inp_arr_types=report[2].split(',');
            var inp_arr=report[3].split(',');
            for(i=0;i<inp_arr_types.length;i++){
                label=inp_arr[i].replace(':','').replace('_',' ');
                label=label.replace(label.charAt(0),label.charAt(0).toUpperCase());
                $("#report_div").append('<label>'+label+'&nbsp;&nbsp;&nbsp;</label><input type="'+inp_arr_types[i]+'" name="'+inp_arr[i].replace(':','')+'"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
            }
            $("#report_div").append('<br><br><button style="margin-left: 45%;" class="input-group-text bg-transparent border-1 pr-2 pr-sm-3" id="get_result" name="get_result">Fetch</button>');
            $("#report_div").append('</div>');
        }
        </script>
        <script type="text/javascript">
        $('#only_report_table').dataTable({
    aLengthMenu: [
        [10,25, 50, 100, 200, -1],
        [10,25, 50, 100, 200, "All"]
    ],
    buttons: [
        'copy', 'excel', 'pdf', 'print'
        ],
    iDisplayLength: 10
});
function ExportToExcel(mytblId){
       var htmltable= document.getElementById('only_report_table');
       var html = htmltable.outerHTML;
       var uri = 'data:application/vnd.ms-excel,'+ encodeURIComponent(html);
       var downloadLink = document.createElement("a");
       downloadLink.href = uri;
        downloadLink.download = mytblId+".xls";

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
</script>
