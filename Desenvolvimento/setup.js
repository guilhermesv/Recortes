// Definição de variaveis globais

let resolucaos = {
  tela: 3,
  impressaoCaseira: 12,
  impressaoFineArt: 24
}

let resolucao = resolucaos.impressaoCaseira;
let paginaLargura = 245 * resolucao;
let paginaAltura = 195 * resolucao;
let pdf;

let nPaginas = 1;

let fundoPaleta = [{
    r: 0,
    g: 0,
    b: 0
  },
  {
    r: 255,
    g: 0,
    b: 0
  },
  {
    r: 0,
    g: 0,
    b: 255
  }
]

// Fotos

let fotoArquivos = [];
let fotoCarregadas = [];
let foto1, foto2;

let mascaraFormas = [
  "circular",
  "retangular",
  "retangularRasgada",
  "irregular"
]

// Malha

let malha1, malha2;

let modulos = [
  "retangulo",
  "circulo",
  "estranha",
  "linha",
  "triangulo"
];

let tamanhos = [{
    colunaQtd: 30,
    linhaQtd: 24
  },
  {
    colunaQtd: 9,
    linhaQtd: 7
  },
  {
    colunaQtd: 6,
    linhaQtd: 5
  }
]

let espessura = 0.5 * resolucao;

// Carregamento de imagens
function preload() {
  for (let i = 0; i < 22; i++) {
    let arquivo = "img-" + nf(i + 1, 2, 0) + ".jpg";
    append(fotoArquivos, arquivo);
  }
  for (let i = 0; i < fotoArquivos.length; i++) {
    fotoCarregadas[i] = loadImage("fotos-245x195/" + fotoArquivos[i]);
  }
}

function setup() {
  createCanvas(paginaLargura, paginaAltura);
  background(0);

  malha1 = new Malha();
  foto1 = new FotoRecorte();
  foto2 = new FotoRecorte();
  malha2 = new Malha();

  ellipseMode(CORNER);
  // pdf = createPDF();
  // pdf.beginRecord();
};

function draw() {
  let fundoCor = random(fundoPaleta);
  background(fundoCor.r, fundoCor.g, fundoCor.b);

  malha1.desenhar();
  foto1.desenhar();
  foto2.desenhar();
  malha2.desenhar();

  if (frameCount == nPaginas) {

    //pdf.save();
  }
  //pdf.nextPage();
  let nomeNumero = int(random(4000));
  let nome = "desenho-245x195" + nomeNumero + ".png";
  // save(nome)
  noLoop();

};

// setTimeout(function() {
//   location.reload();
// }, 10000)
