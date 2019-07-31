import processing.pdf.*;

//mm para px
//72 dpi   2.833
//300 dpi  11.811
//600 dpi  23.622

//https://forum.processing.org/one/topic/saveframe-in-high-resolution.html

int qtdPaginas = 1;
int qtdEdicoes = 1;


float rBaixa = 2.833;
float rAlta = 11.811;
int largura = mm(270, rBaixa);
int altura = mm(190, rBaixa);


void settings(){
  size(largura, altura, P2D);
}

void setup() {
  camadaGrid();
}




int mm(float x, float dpi) {
  x = floor(x * dpi);
  return int(x);
}