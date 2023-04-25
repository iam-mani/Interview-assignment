import test from 'tape';
import requestPromise from 'request-promise';

const before = test;
const after = test;

const beforeEach = () => {/*test setup*/};

const afterEach = () => {/*test cleanup*/};

before('before', (t) => {/*one time setup*/});

test('POST /create', (t) => {
  beforeEach()
    .then(() => (
      requestPromise({
        method: 'POST',
        // yes! we can use the service name in the docker-compose.yml file
        uri: 'http://my-service:8080/create',
        body: {
          thing: 'this thing',
        },
      })
    ))
    .then((response) => {
      // inspect the response
      t.equal(response.statusCode, 200, 'statusCode: 200');
    })
    .then(() => (
      // inspect the database
      rethinkdb.table('table_name')
        .filter({
          thing: 'this thing',
        })
        .count()
        .run(connection)
        .then((value) => {
          t.equal(value, 1, 'have data');
        })
    ))
    .catch((error) => t.fail(error))
    .then(() => afterEach())
    .then(() => t.end());
});

after('after', (t) => {/*one time setup*/});
