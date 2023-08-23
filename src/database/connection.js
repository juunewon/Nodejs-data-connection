const mysql = require('mysql');
const connectionInfo = require('../config/db-config');

const getConnectionInfo = () => {

    return mysql.createConnection(connectionInfo);
}

module.exports = getConnectionInfo;