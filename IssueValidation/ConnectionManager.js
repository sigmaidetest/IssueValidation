module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["root"] = {
        host: process.env.EndPoint_rdsRoot,
        port: process.env.Port_rdsRoot,
        user: process.env.User_rdsRoot,
        password: process.env.Password_rdsRoot,
        database: "test"
    };
};