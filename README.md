# EYES TO EARTH — Workshop de Estudantes 2

Website institucional do segundo Workshop de Estudantes do projecto EYES TO EARTH.

## Organização dos ficheiros

```text
eyes-to-earth-workshop-2/
├── index.html
├── styles.css
├── script.js
├── README.md
├── assets/
│   └── imagens/
│       ├── capa/          # imagem principal do site
│       ├── galeria/       # fotografias do workshop
│       └── temas/         # imagens de satélite, água, IA e cheias
└── documentos/
    └── apresentacoes/     # PDFs dos quatro apresentadores
```

## Como organizar as imagens

Use nomes curtos, sem espaços nem acentos:
- `assets/imagens/capa/incomati-marracuene.jpg`
- `assets/imagens/galeria/foto-grupo.jpg`
- `assets/imagens/galeria/sessao-apresentacoes.jpg`
- `assets/imagens/galeria/aula-pratica.jpg`
- `assets/imagens/temas/observacao-terra.jpg`

**Imagem principal recomendada:** uma fotografia aérea ou imagem de satélite real do rio Incomáti e da paisagem de Marracuene/Macaneta. Deve mostrar o rio e a planície envolvente, ser nítida e ter autorização/licença de utilização. Se for imagem de satélite, indicar a fonte e a data (por exemplo, Sentinel-2 / Copernicus, quando aplicável). Não usar uma imagem genérica de outro rio como se fosse Marracuene.

## Como organizar documentos

Guardar os PDFs em `documentos/apresentacoes/`, com nomes consistentes:
- `apresentacao-01.pdf`
- `apresentacao-02.pdf`
- `apresentacao-03.pdf`
- `apresentacao-04.pdf`

Depois, cada cartão em `index.html` deve apontar para o PDF correspondente, com um link para abrir e outro para descarregar. Confirmar autorização dos autores antes de publicar os slides.

## Conteúdos e fontes

O site inclui secções temáticas sobre Observação da Terra, monitorização da água, Inteligência Artificial e previsão de cheias, além de uma introdução geográfica e histórica a Marracuene e ao rio Incomáti.

Fontes de referência para rever/expandir o texto:
- Município de Marracuene: https://www.cmmarracuene.gov.mz/sobre-o-municipio/
- Instituto Nacional de Estatística, Estatísticas do Distrito de Marracuene (2019–2023): https://ine.gov.mz/documents/20119/271103/Marracuene_Junho2024.pdf
- Portal do Governo de Moçambique, Perfil do Distrito de Marracuene: https://www.portaldogoverno.gov.mz/por/content/download/2966/23882/version/1/file/Marracuene.pdf

A secção histórica é introdutória. Recomenda-se validação adicional com fontes históricas e/ou especialistas locais antes de publicar um texto histórico mais aprofundado.

## Link do painel de controlo ETE

https://ete-platform.streamlit.app/

O botão “Abrir painel de controlo ETE” já está ligado a este endereço.

## Publicar no GitHub Pages

1. Envie o conteúdo deste pacote para a raiz do repositório `SADI2026/eyes-to-earth-workshop-2`.
2. Abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch **main** e a pasta **/(root)**.
5. Clique em **Save** e aguarde a publicação.

Endereço esperado: https://sadi2026.github.io/eyes-to-earth-workshop-2/

## Privacidade e direitos

Antes de publicar fotografias identificáveis de participantes, obtenha autorização. Confirme também a permissão dos colegas para disponibilizar as apresentações em PDF. Evite incluir dados pessoais sem consentimento.
