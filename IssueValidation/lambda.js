let AWS = require('aws-sdk');
let SL_GCP = require('slappforge-sdk-gcp');
let sqlConnMgr = require('./SqlConnMgr');
const sql = new SL_GCP.SQL(sqlConnMgr);
let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);
console.log("Test")

exports.handler = function (event, context, callback) {

    // You can pass the existing connection to this function.
    // A new connection will be created if it's not present as the third param.
    // You must always end/destroy the DB connection after it's used.
    sql.query({
        instanceIdentifier: 'gcptestandun1',
        query: 'CREATE TABLE Persons (PersonID int, LastName varchar(255), FirstName varchar(255), Address varchar(255), City varchar(255)  );',
        inserts: []
    }, function (error, results, connection) {
        if (error) {
            throw error;
        } else {
            // use `results` to do your magic
            console.log(results);
        }
        connection.end();
    });



    callback(null, 'Successfully executed');
}