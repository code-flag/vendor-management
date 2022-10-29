// @ts-check

/**
 * @type {string}
 */
const storageDB = '';

const __COMMAND = {
    'CREATE': ['DATABASE', 'TABLE'], 
    'SELECT' : ['FROM', 'WHERE', '*'], 
    'INSERT': ['INTO', 'SET'], 
    'WHERE': ['$eq', '$and', '$gte', '$lte', '=']
};
const COMMAND_FORMAT = {
    name: '',
    action: '',
    address: '',
    params: [],
    values: [],
}