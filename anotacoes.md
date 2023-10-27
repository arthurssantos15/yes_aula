AULA 1:

USANDO O TERMINAL DO VS CODE

O terminal do vscode é smelhante ao cmd ou power shell.
Isso quer dizer que os comandos do cmd e do power shell, rodam também no terminal do vscode.

COMANDOS BÁSICOS:

NAVEGAR ATÉ UMA DETERMINADA PASTA: cd
VOLTAR A PASTA ANTERIOR: acrescenta-se dois pontos: cd..
TAMBÉM É POSSÍVEL PASSAR UM CAMINHO COMPLETO: cd pasta1/arquivos/imagens

1- CAMINHO RELATIVO:

é o caminho que depende de outras pastas para se localizar.

Imagine o seguinte diretório:

pasta raiz: main

dentro da pasta raiz tenho as seguintes pastas:

imagens - minhasimagens(pasta dentro de imagens)
vídeos - meusvídeos(pasta dentro de vídeos)
audios - meuaudios(pasta dentro de audios)

imagine que vc queira entrar na pasta minhasimagens dentro da pasta imagens, então seria: 

"cd imagens/minhasimagens"

A idéia do caminho relativo é que você possa ir e voltar a partir de qualquer ponto, desde que passe o caminho correto.

-------------------------------------------------------------------------------------------

2 - CAMINHO ABSOLUTO:

O caminho absoluto, segue as pastas dos sistema desde a raiz. Exemplo:

C:/Usuarios/Desktop/aulas_yes/main

a principal diferença é a referência absoluta, ou seja, o caminho precisa existir em todos os sistemas que estiver rodando a aplicação.

--------------------------------------------------------------------------------------------

CRIANDO PASTAS:

PARA CRIAR UMA NOVA PASTA:  "mkdir"

--------------------------------------------------------------------------------------------