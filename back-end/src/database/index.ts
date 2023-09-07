import mysql from 'mysql2'
import 'dotenv/config'
import fs from 'fs'

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  multipleStatements: true
})

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err)
    return
  }

  connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err) => {
    if (err) {
      console.error('Erro ao criar o banco de dados:', err)
      connection.end()
      return
    }

    connection.changeUser({ database: process.env.DB_NAME }, (_err) => {
      if (_err) {
        console.error('Erro ao selecionar o banco de dados:', _err)
        connection.end()
        return
      }

      try {
        const sqlScript = fs.readFileSync('database.sql', 'utf8')
        connection.query(sqlScript, (err) => {
          if (err) {
            console.error('Erro ao executar o script SQL:', err)
          } else {
            console.log('Script SQL executado com sucesso.')
          }
        })
      } catch (fileReadError) {
        console.error('Erro ao ler o arquivo SQL:', fileReadError)
        connection.end()
      }
    })
  })
})

export { connection }
