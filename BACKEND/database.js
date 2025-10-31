import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'srv1700.hstgr.io',
    user: 'u890110621_DeonickiVojvod',
    password: 'Sektor11!',
    database: 'u890110621_SerbiaWonders'
}).promise()

const checkConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Database connection successfull!');
        connection.release()
    }
     catch (e) {
        console.log('Error')
     }
}

// const result = await pool.query('select * from Comments')
// console.log(result)

export { pool, checkConnection } 