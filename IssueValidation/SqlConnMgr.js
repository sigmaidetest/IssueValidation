module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["gcptestandun1"] = {
        host: "35.190.163.122",
        port: "3306",
        user: "root",
        password: process.env.Password_sqlgcptestandun1,
        database: "information_schema"
    };
};