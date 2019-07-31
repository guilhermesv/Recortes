let grid1, grid2;
let resolucao = {
  tela: 3,
  impressaoCaseira: 12,
  impressaoFineArt: 24
}

function setup() {
  createCanvas(270 * resolucao.tela, 180 * resolucao.tela);
  background(0);
  ellipseMode(CORNER);
  grid1 = new Grid();
  grid2 = new Grid();
  frameRate(10);
};

function draw() {
  background(0);
  grid1.desenhar();
  grid2.desenhar();
};

let modulos = [
  "retangulo",
  "circulo",
  "estranha",
  "linha"
];

let tamanhos = [{
    colunaQtd: 27,
    linhaQtd: 18
  },
  {
    colunaQtd: 9,
    linhaQtd: 6
  },
  {
    colunaQtd: 6,
    linhaQtd: 4
  }
]

class Grid {

  constructor(tamanho, modulo) {

    let tamanhoSorteado = random(tamanhos);

    this.tamanho = {
      colunaQtd: tamanhoSorteado.colunaQtd,
      linhaQtd: tamanhoSorteado.linhaQtd
    }

    this.colunaPrimeira = floor(random(this.tamanho.colunaQtd));
    this.linhaPrimeira = floor(random(this.tamanho.linhaQtd));

    this.colunaUltima = this.colunaPrimeira + ceil(random(this.tamanho.colunaQtd - this.colunaPrimeira));
    this.linhaUltima = this.linhaPrimeira + ceil(random(this.tamanho.linhaQtd - this.linhaPrimeira));

    this.modulo = random(modulos);
    this.moduloLargura = width / this.tamanho.colunaQtd;
    this.moduloAltura = height / this.tamanho.linhaQtd;

  }

  desenhar() {
    // console.log(this.colunaPrimeira + " / " + this.colunaUltima + " / " + this.linhaPrimeira + " / " + this.linhaUltima);

    for (let i = this.colunaPrimeira; i < this.colunaUltima; i++) {
      for (let j = this.linhaPrimeira; j < this.linhaUltima; j++) {

        let x = i * this.moduloLargura;
        let y = j * this.moduloAltura;

        noFill();
        stroke(255);
        switch (this.modulo) {
          case 'retangulo':
            rect(x, y, this.moduloLargura, this.moduloAltura);
            break;

          case 'circulo':
            ellipse(x, y, this.moduloLargura, this.moduloAltura);
            break;

          case 'estranha':
            beginShape();
            curveVertex(x, y);
            curveVertex(x, y);
            curveVertex(x + this.moduloLargura, y + (this.moduloAltura * 0.5));
            curveVertex(x, y + this.moduloAltura);
            curveVertex(x, y + this.moduloAltura);
            endShape();
            break;

          case 'linha':
            beginShape();
            vertex(x, y);
            vertex(x + this.moduloLargura, y + (this.moduloAltura * 0.5));
            endShape();

        }
      }
    }
  }
}