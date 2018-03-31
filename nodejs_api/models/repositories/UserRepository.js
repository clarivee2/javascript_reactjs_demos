// repo implementation for users
//

'use strict';

class UserRepository extends repository {
    constructor(dataContext) {
        super(dataContext);
        dataContext.connect();

    }

    // get a user by id
    userById(Id) {
       return dataContext.dataSource.getData(Id);
    }

    // get all users - limits max
    users() {
        return dataContext.dataSource.getData();
    }



}