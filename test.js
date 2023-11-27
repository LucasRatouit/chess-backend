const pg = require('pg');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: {
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUAcMDKsWRQlQTl7iWtO1f//3ZeBYwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvY2YxMjQ3ZWYtNGUyMC00N2MzLWJkZDItMWY3MTA3MmEx
OTZmIFByb2plY3QgQ0EwHhcNMjMxMTI3MTg0NTUzWhcNMzMxMTI0MTg0NTUzWjA6
MTgwNgYDVQQDDC9jZjEyNDdlZi00ZTIwLTQ3YzMtYmRkMi0xZjcxMDcyYTE5NmYg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALpLxt0h
JlOYyMadAf3V4M/C7FxSHKUviqYPrqgHcADzd3fST0slE0Tr60vSEiEz8PrefhOR
OV/+ZT8OHCPLqbgn+stmfAu+J310SheAs6zxSMXGgWhf+yOc9iBJCcLX6SluCFq5
CuYnSdO8fCX9y73lOX/mvi1TAp6c2W5j564toLtqSVl6Xt9UtV54XEdJve3gLqQK
uJZ7/ukWZ5gRdbMzzF0Gf9stUvFE3H6nZp/yzZMxF4+/1J2RTEs0FunRzUVDq4bI
wF20leLp4NhWuaY/1dkCnBYqBsRK53V0JvVs/ITHDoI+TPwYvWclUhJY5JFIoJ82
MpIw1aJ9B6byEFJ/6OYJziI2BMGMNc1R6QeNw+sNcka97yXjVwODd7HhZRXUDCPl
EM8PC+lJmolOkMivNNlthgYV7+MC3/OMwMwLEg4O4sd/Yi1ynM6u/SOIzTgPA0Ev
xOQ9Zc4ABjNvU43gFC4kkhKDalk3za55GWKqsm31uoIGyvr3BX1S3iIyPQIDAQAB
oz8wPTAdBgNVHQ4EFgQUDmBB2tDD8IWZ3hB2XosoNy6iDFgwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAFbEpKisR8QsYLxz
T3lAoWihl18rLgaxixY+ZFB/ga+GRRlLrNZnRuNt9BQJcujA9wD31OvrVVYnSBcv
bFIm5R1wWZuiW9j2d7kN/VDyxZvMNtu0q6b3MaEw6qaAGzo3U54NUeTm49StCv2T
3V7nIiGZHLVedOMkVRiLUUWKXpePVAerfcH3LUACKZvqhUz6Lec0iIQaMEHAbyKJ
6y04mfdZNOQZywcH0m6+v3jkCUqZ/eFDpxAMRfdYDGd9JfJu1fisW7GW+wqk9vqx
O8NXtIHi/yL2sun4wdQf0YQIjp24OLMt8ZyAuUS6A516uuUs4V1A8llelReKpoFy
FVPSH1/tlci0gU3XYC07wLHmlAFimCA+CWKxgDo3rm3yfl6F26wKY7UwhrcTrU9x
tQBTMNHJ70APHmrWkz3jXPk0cCAHVC1C47eoNrZMrGbTtBHZHyHRhc0tMhNla27a
TvNQqyrDhYNuv/uLzMYMve/BFvxvxrJUg/ZaLIg/UtSuZb5Cbw==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT * FROM chess", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});
