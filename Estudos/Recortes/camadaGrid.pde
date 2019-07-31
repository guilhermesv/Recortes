class camadaGrid {
  
  int colunaQtd;
  int linhaQtd;
  String forma;
  
  grid() {
    colunaQtd = 1
  
  
}



void camadaGrid(int colunaQtd = 16, int linhaQtd = 10, String forma = "desenho.svg") {

  colunaLargura = width / colunaQtd;
  linhaAltura = height / linhaQtd;

  for (int x = 0; x < width; x += colunaLargura) {
    for (int y = 0; y < height; y += linhaAltura) {
    }
  }
}