const express = require("express");
const path = require("path");

/*const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");



const port = new SerialPort({
    path: "COM4",
    baudRate: 9600,
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

parser.on("data", (data) => {
    ultimoDado = data.toString().trim();
    console.log("Arduino:", ultimoDado);
}); */

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

let ultimoDado = "Sem dados ainda";

app.get("/charq/sus", (req, res) => {
    res.render("index", { ultimoDado });
});

app.use((req, res) => {
    res.status(404).send("404 - Rota não encontrada");
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});