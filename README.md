# 🔬 CharqScience

Projeto integrando **Arduino + Node.js** para leitura e exibição de dados em tempo real via porta serial.

---

## 🚀 Objetivo

O projeto tem como objetivo capturar dados enviados pelo Arduino via USB (Serial), processá-los no backend Node.js e exibir esses dados em uma interface web.

---

## 🧠 Tecnologias utilizadas

- Arduino (C/C++)
- Node.js
- HTML + CSS + JavaScript

---

# Como usar o projeto

## Clone o projeto e abra a pasta CharqScience
```bash
git clone  https://github.com/Kinin08/Irriga-o-inteligente.git
cd CharqScience
```
## Conect um arduino mega 2560
### ajeite conforme sua porta
```bash
const port = new SerialPort({
    path: "SUA_PORTA",
    baudRate: 9600,
})
```
## Instale dependencias
```bash
npm install
```
## Entre no arquivo

```bash
cd interface
```

## Rode o projeto
npm run start:dev

Servidor rodará em:

http://localhost:8080/charq/sus
