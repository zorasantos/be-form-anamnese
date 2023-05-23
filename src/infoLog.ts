import Table from 'cli-table3'
import chalk from 'chalk'

const table = new Table({
  head: [
    chalk.cyan('Server'),
    chalk.cyan('Port'),
    chalk.cyan('Database'),
    chalk.cyan('ORM'),
    chalk.cyan('Environment'),
  ],
})

export const logApplicationInfo = async () => {
  const server = process.env.SERVER_TYPE as string
  const serverName = server[0].toUpperCase() + server.substring(1)

  table.push([
    serverName,
    process.env.PORT_SERVER,
    process.env.DATABASE,
    process.env.ORM_TYPE,
    process.env.NODE_ENV,
  ])

  console.log(table.toString())
}
