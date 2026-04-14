# 🔬 CharqScience

Projeto integrando **Arduino + Node.js** para leitura e exibição de dados em tempo real via porta serial.

---

## 🚀 Objetivo

O projeto tem como objetivo capturar dados enviados pelo Arduino via USB (Serial), processá-los no backend Node.js e exibir esses dados em uma interface web.

---

## 🧠 Tecnologias utilizadas

- Arduino (C/C++)
- Node.js
- Express.js
- EJS (template engine)
- SerialPort (@serialport)
- HTML + CSS + JavaScript

---

---

## ⚙️ Como funciona

```text
Arduino → envia dados via Serial (USB)
        ↓
Node.js (SerialPort) lê os dados
        ↓
Express armazena e expõe os dados
        ↓
EJS renderiza na página web
