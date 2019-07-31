class FotoRecorte {
  constructor(fotoNome, mascara) {
    this.mascara = createGraphics(paginaLargura, paginaAltura);
    this.mascaraForma = random(mascaraFormas);
    this.fotoSorteada = random(fotoCarregadas);
  }

  desenhar() {

    switch (this.mascaraForma) {
      case "circular":
        let diametro = random(width / 10, width);
        this.mascara.ellipse(random(width), random(height), diametro, diametro);
        break;
      case "retangular":
        this.mascara.rect(random(width / 2), random(height / 2), random(width), random(height));
        break;
      case "retangularRasgada":
        let x = random(width / 2);
        let y = random(30, height / 2);
        let largura = random(width / 2);
        let altura = random(height / 2);
        let corteDetalhe = 10;

        this.mascara.beginShape();
        this.mascara.vertex(x + largura, y + altura);
        this.mascara.vertex(x + largura, y);
        let corteInclinacao = 0;
        let corteInclinacaoIncremento = random(-5, 5);
        for (let i = 0; i < altura; i += corteDetalhe) {
          this.mascara.vertex(x + corteInclinacao + (noise(i) * 5), y + i);
          corteInclinacao += corteInclinacaoIncremento;
        };
        this.mascara.endShape(CLOSE);

        break;
      case "irregular":
        let raioVariacao = 1;
        let raioDistorçãoX = random()
        let raioMinimo = random(width / 2);
        let raioMaximo = random(raioMinimo, width);

        this.mascara.push();
        this.mascara.translate(random(width), random(height));

        this.mascara.beginShape();
        for (let angulo = 0; angulo < TWO_PI; angulo += radians(5)) {
          let xDeslocamento = map(cos(angulo), -1, 1, 0, raioVariacao);
          let yDeslocamento = map(sin(angulo), -1, 1, 0, raioVariacao);
          let raio = map(noise(xDeslocamento, yDeslocamento), 0, 1, raioMinimo, raioMaximo);
          let x = raio * cos(angulo);
          let y = raio * sin(angulo);
          this.mascara.vertex(x, y);
        }
        this.mascara.endShape(CLOSE);
        this.mascara.pop();

        break;
    }

    this.fotoSorteada.resize(paginaLargura, paginaAltura);
    this.fotoSorteada.mask(this.mascara);
    if (random(1) > 0.5) {
      push();
      translate(width, 0);
      scale(-1, 1);
      image(this.fotoSorteada, 0, 0);
      pop();
    } else {
      image(this.fotoSorteada, 0, 0);
    }
  }
}