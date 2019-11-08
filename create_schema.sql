CREATE TABLE user (
  id int(50) NOT NULL AUTO_INCREMENT,
  username varchar(60) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  last_login DATE,
  user_level int(10) DEFAULT 2,
  PRIMARY KEY (id)
);
CREATE TABLE reports (
  report_id int(50) NOT NULL AUTO_INCREMENT,
  report_name varchar(255) NOT NULL,
  report_desc varchar(255) NOT NULL,
  report_sql TEXT NOT NULL,
  report_access TEXT NOT NULL,
  report_input_type TEXT NOT NULL,
  report_inputs TEXT NOT NULL,
  PRIMARY KEY (report_id)
);
CREATE TABLE report_dt_audit_and_coverage (
  SUBDIVISION varchar(10) ,
  FEEDER_NAME varchar(255),
  DT_NAME varchar(255),
  DT_CONSUMPTION varchar(20),
  TOTAL_SLAVE varchar(20),
  SLAVES_COMM varchar(20),
  SLAVES_CONS varchar(20),
  SLAVES_COMM_P varchar(20),
  LOSS_P varchar(20)
);

CREATE TABLE report_sanctioned_load_violation_based_on_max_demand (
    SUBDIVISION varchar(10) ,
    FEEDER_NAME varchar(255) ,
    DT_NAME varchar(255) ,
    CUSTOMER_NAME varchar(255) ,
    ACCOUNT_NUMBER varchar(20),
    METER_EXTERNAL_ID varchar(20),
    SANCTIONED_LOAD varchar(20),
    VIOLATED_VALUE varchar(20),
    VIOLATION_DATE varchar(50)
);
ALTER TABLE report_dt_audit_and_coverage ADD COLUMN log_date VARCHAR(50) DEFAULT TO_CHAR(TRUNC(SYSDATE));

select * from report_sanctioned_load_violation_based_on_max_demand 
where str_to_date(CONCAT(UCASE(LEFT(LCASE(VIOLATION_DATE), 1)), 
                             SUBSTRING(LCASE(VIOLATION_DATE), 2)),'%d-%b-%y %H:%i') >= 
                             str_to_date(CONCAT(UCASE(LEFT(LCASE('15-OCT-19 15:00'), 1)), 
                             SUBSTRING(LCASE(VIOLATION_DATE), 2)),'%d-%b-%y %H:%i') 
and str_to_date(CONCAT(UCASE(LEFT(LCASE(VIOLATION_DATE), 1)), 
                             SUBSTRING(LCASE(VIOLATION_DATE), 2)),'%d-%b-%y %H:%i') <=
                             str_to_date(CONCAT(UCASE(LEFT(LCASE('25-OCT-19 15:00'), 1)), 
                             SUBSTRING(LCASE(VIOLATION_DATE), 2)),'%d-%b-%y %H:%i') ;