// DataConfiguration class
//  - basically holds config for data
//  - leaving how to get this from a file for later

'use strict';

class DataConfiguration {
    constructor (dataDriver, connectionString) {
        this.dataDriver = dataDriver;
        this.connectionString = connectionString;
    }
}