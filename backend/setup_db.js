const con = require('./config');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS usercollection (
  id int(10) NOT NULL AUTO_INCREMENT,
  androidid varchar(50) NOT NULL,
  profilename varchar(50) NOT NULL,
  con1 varchar(15) NOT NULL,
  con2 varchar(15) NOT NULL,
  con3 varchar(15) NOT NULL,
  con4 varchar(15) NOT NULL,
  usercommand varchar(20) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
`;

con.query(createTableQuery, (err, results) => {
    if (err) {
        console.error("Error creating table:", err);
    } else {
        console.log("Table 'usercollection' created successfully!");
    }
    con.end();
});