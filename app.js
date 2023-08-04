const funcionarios = [
    { nome: "Funcionario1", idade: 30, cargo: "Analista", tempo_empresa: 5, salario: 5000 },
    { nome: "Funcionario2", idade: 25, cargo: "Estagiário", tempo_empresa: 1, salario: 1500 },
    { nome: "Funcionario3", idade: 35, cargo: "Gerente", tempo_empresa: 10, salario: 10000 },
    // Adicione os demais funcionários aqui
    { nome: "Funcionario4", idade: 28, cargo: "Assistente", tempo_empresa: 3, salario: 4000 },
    { nome: "Funcionario5", idade: 33, cargo: "Coordenador", tempo_empresa: 7, salario: 7000 },
    { nome: "Funcionario6", idade: 40, cargo: "Diretor", tempo_empresa: 15, salario: 15000 },
    { nome: "Funcionario7", idade: 22, cargo: "Estagiário", tempo_empresa: 1, salario: 1600 },
    { nome: "Funcionario8", idade: 29, cargo: "Analista", tempo_empresa: 4, salario: 5500 },
    { nome: "Funcionario9", idade: 38, cargo: "Gerente", tempo_empresa: 9, salario: 9000 },
    { nome: "Funcionario10", idade: 31, cargo: "Analista", tempo_empresa: 6, salario: 6000 },
    { nome: "Funcionario11", idade: 27, cargo: "Assistente", tempo_empresa: 2, salario: 4200 },
    { nome: "Funcionario12", idade: 34, cargo: "Gerente", tempo_empresa: 8, salario: 8500 },
    { nome: "Funcionario13", idade: 24, cargo: "Estagiário", tempo_empresa: 1, salario: 1600 },
    { nome: "Funcionario14", idade: 36, cargo: "Coordenador", tempo_empresa: 7, salario: 7200 },
    { nome: "Funcionario15", idade: 45, cargo: "Diretor", tempo_empresa: 18, salario: 18000 },
    { nome: "Funcionario16", idade: 26, cargo: "Assistente", tempo_empresa: 3, salario: 4300 },
    { nome: "Funcionario17", idade: 32, cargo: "Analista", tempo_empresa: 6, salario: 6200 },
    { nome: "Funcionario18", idade: 37, cargo: "Gerente", tempo_empresa: 10, salario: 9700 },
    { nome: "Funcionario19", idade: 29, cargo: "Analista", tempo_empresa: 5, salario: 5400 },
    { nome: "Funcionario20", idade: 41, cargo: "Coordenador", tempo_empresa: 11, salario: 8500 },
  ];



function totalFuncionarios () {
    const lenghtFuncionarios = funcionarios.length
    const sumFuncionarios = funcionarios.reduce((agrupador, item) => agrupador + item.salario, 0).toFixed(2)
    const ttFun = document.querySelector('.totalFuncionarios').innerHTML = lenghtFuncionarios
    const sumFun = document.querySelector('.custoFuncionarios').innerHTML = `R$: ${sumFuncionarios}` 



    const gerentes = funcionarios.filter((item) => item.cargo == 'Gerente').length
    const sumGer = funcionarios.filter((item) => item.cargo === 'Gerente').reduce((agrupador, item) => agrupador + item.salario, 0).toFixed(2)
    const ttGer = document.querySelector('.totalGerentes').innerHTML = gerentes
    const sumGerentes = document.querySelector('.sumGerentes').innerHTML = `R$: ${sumGer}`

    const totaAssistentes = funcionarios.filter((item) => item.cargo === 'Assistente').length
    const sumAssistentes = funcionarios.filter((item) => item.cargo === 'Assistente').reduce((agrupador, item) => agrupador + item.salario,0).toFixed(2)
    const assistentes = document.querySelector('.sumAssistentes').innerHTML = `R$: ${sumAssistentes}`
    const ttAssistentes = document.querySelector('.totalAssistentes').innerHTML = totaAssistentes

}
totalFuncionarios()


const btnMobile = document.querySelector('.btn-mobile')
const menuEsquerdo = document.querySelector('.menuEsquerdo')
const body = document.body;

btnMobile.addEventListener('click', () => {
  btnMobile.classList.toggle('menuOpen')
  menuEsquerdo.classList.toggle('isOpen')
  body.classList.toggle('scroll-lock'); 
})