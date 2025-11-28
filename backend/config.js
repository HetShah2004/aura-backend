const mysql = require('mysql2');

// Use a Connection Pool instead of a single connection
// Pools automatically handle reconnection, timeouts, and keeping the connection alive.
const pool = mysql.createPool({
    host: 'mainline.proxy.rlwy.net',
    user: 'root',
    port: 12999,
    password: 'xXdNPXUDXzUZAEMmQbjGADtilxtyGTPI',
    database: 'railway',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.warn("Error connecting to DB pool:", err);
    } else {
        console.warn("Successfully connected to DB pool");
        connection.release(); // Always release the connection back to the pool
    }
});

module.exports = pool;