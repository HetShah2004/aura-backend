try {
    const mysql = require('mysql2');
    console.log("mysql2 is installed and working!");
} catch (e) {
    console.error("Failed to load mysql2:", e.message);
}
