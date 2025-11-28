const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'mainline.proxy.rlwy.net',
    user: 'root',
    port: 12999,
    password: 'xXdNPXUDXzUZAEMmQbjGADtilxtyGTPI',
    database: 'railway'
});

con.connect((err) => {
    if (err) {
        console.warn("error connecting:", err);
    } else {
        console.warn("connected to cloud db");
    }
});

module.exports = con;