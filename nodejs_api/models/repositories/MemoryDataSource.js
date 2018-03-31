// memory based data source
//  - really simple
//  - just push json arrays to it and it will extend its data array

class MemoryDataSource extends DataSource {
    constructor(dataConfiguration) {
        super(dataConfiguration);
        this.data = { };
    }

    // get all data
    get getData() {

    }

    // get data by id
    get getData(Id , IdField) {

    }
}