let grid1, grid2;

function setup() {
  createCanvas(764, 510);
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
      largura: tamanhoSorteado.colunaQtd,
      altura: tamanhoSorteado.linhaQtd
    }
    this.modulo = random(modulos);
    this.moduloLargura = width / this.tamanho.largura;
    this.moduloAltura = height / this.tamanho.altura;
  }

  desenhar() {

    let gridComecoX = floor(random(this.tamanho))
    for (let x = 0; x < width; x += this.moduloLargura) {
      for (let y = 0; y < height; y += this.moduloAltura) {

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
            break;
        }
      }
    }
  }
}