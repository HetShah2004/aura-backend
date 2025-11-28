const con = require('./config');

const query1 = "ALTER TABLE usercollection ADD PRIMARY KEY (id);";
const query2 = "ALTER TABLE usercollection MODIFY id int(10) NOT NULL AUTO_INCREMENT;";

// Try adding primary key first
con.query(query1, (err) => {
    if (err) {
        // It might already be a primary key, so we ignore this specific error and try step 2
        console.log("Step 1 (Primary Key): " + err.message);
    } else {
        console.log("Step 1: Primary Key added.");
    }

    // Now try adding auto increment
    con.query(query2, (err2) => {
        if (err2) {
            console.error("Step 2 (Auto Increment) Failed:", err2);
        } else {
            console.log("Step 2: ID is now AUTO_INCREMENT. Success!");
        }
        con.end();
    });
});
