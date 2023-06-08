- Fazer validação dos dados do family
- Corrigir testes
- Fazer autenticação

const result = await prismaClient.familyAndYou.findFirst({
where: {
personalDataId: 'c4bb0d44-2c0b-4fd1-adaa-ed0e8e1519e6',
},
include: {
member: true,
children: true,
personalData: true,
},
})

const result = await prismaClient.personalData.findFirst({
where: {
id: 'c4bb0d44-2c0b-4fd1-adaa-ed0e8e1519e6',
},
include: {
dfficult: true,
family: {
include: {
member: true,
children: true,
},
},
},
})

# Próxima versão

1. Passa o personalId pelo id que sera enviado no token da requisição;
2. Criar uma tabela que registre os acessos com dados como: count, gender, idade;
