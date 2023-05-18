export const logApplicationInfo = async (PORT: number) => {
  const server = process.env.SERVER_TYPE as string
  const serverName = server[0].toUpperCase() + server.substring(1)
  console.log(`Servidor: ${serverName} server Running in port ${PORT}`)
  console.log(`Banco de Dados: ${process.env.DATA_BASE}`)
  console.log(`ORM: ${process.env.REPOSITORY_TYPE}`)
  console.log(`Ambiente: ${process.env.NODE_ENV}`)
}
