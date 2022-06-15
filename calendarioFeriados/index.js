import Express from "express";

const server = Express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "17/4/2022", name: "Páscoa" },
    { date: "21/4/2022", name: "Tiradentes" },
    { date: "1/5/2022", name: "Dia do trabalho" },
    { date: "16/6/2022", name: "Corpus Christi" },
    { date: "7/9/2022", name: "Independência do Brasil" },
    { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    { date: "2/11/2022", name: "Finados" },
    { date: "15/11/2022", name: "Proclamação da República" },
    { date: "25/12/2022", name: "Natal" }
];

server.get('/holidays', (req, res) => {
    res.send(holidays);
})

server.get('/is-today-holiday', (req, res) => {

    const resposta = [];
    const hoje = new Date();
    

    holidays.map((holidays) => {
        if (holidays.date === hoje.toLocaleDateString()) {
            resposta.push(`Sim, hoje é ${holidays.name}`)
        }
    })

    if (resposta.length === 0) {
        resposta.push("Não, hoje não é feriado")
    }

    res.send(resposta);
})

server.listen(3000);