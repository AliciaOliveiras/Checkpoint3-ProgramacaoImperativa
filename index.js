
let aluno = {
    nome: "",
    qtdFaltas: 0,
    notas: [],
  };
  

  function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
    this.faltas = function() {
      this.qtdFaltas += 1;
    },
      this.calcularMedia = function() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
          soma += this.notas[i];
        }
  
        return soma / this.notas.length;
      }
  }

  const aluno1 = new Aluno("Lucas", 3, [10, 8, 6, 7]);
  const aluno2 = new Aluno("Roberta", 8, [9, 2, 3, 6]);
  const aluno3 = new Aluno("Carla", 14, [10, 2, 1, 1]);
  const aluno4 = new Aluno("Rodrigo", 2, [6, 5, 5, 5]);
  const aluno5 = new Aluno("Irineu", 18, [8, 8, 4, 7]);
  const aluno6 = new Aluno("Suellen", 23, [9, 3, 4, 5]);
  const aluno7 = new Aluno("Maria", 3, [8, 8, 8, 5]);
  const aluno8 = new Aluno("Matheus", 8, [10, 5, 6, 9]);
  const aluno9 = new Aluno("Claudiomar", 25, [10, 7, 7, 7]);
  const aluno10 = new Aluno("Sara", 00, [10, 8, 6, 7]);

  let curso = {
    nomeCurso: 'Programação Imperativa',
    notaAprovacao: 6,
    limiteFaltas: 20,
    listaEstudantes: [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7, aluno8, aluno9, aluno10],
    novoEstudante: function(estudante) {
        this.listaEstudantes.push(estudante);
      },
      resultado: function (aluno){

        let media = aluno.calcularMedia();
        let resultado;

        if (aluno.qtdFaltas < this.limiteFaltas && media >= this.notaAprovacao) {
            resultado = true;
        }else if(aluno.qtdFaltas == this.limiteFaltas && media >= (this.notaAprovacao * 1.1)){
            resultado = true;
        }else {
            resultado = false;
        }
        return resultado;
    },
    arrayDeResultados: function(){
        let resultados = [];
        for(let i = 0; i < this.listaEstudantes.length; i++){
            resultados.push(this.resultado(this.listaEstudantes[i]))
        }
        return resultados
    }
}

