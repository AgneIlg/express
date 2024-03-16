import { Router } from "express";

const apiRouter = Router();

apiRouter.get('/api', (req, res) => {
    res.send('Sveiki atvyke i API puslapi. Pasirinkite viena is galimu veiksmu: suma, atimtis, daugyvba, dalyba');
});

// apiRouter.get('/api/veiksmas', (req, res) => {
//     const mathFunc = req.params.veiksmas;
//     if (mathFunc !== 'suma' && mathFunc !== 'atimtis' && mathFunc !== 'daugyba' && mathFunc !== 'dalyba' ){
//     return res.send('Norima atliktifunkcija yra neatpazinta');
//     }
//     return('Norint susumuoti, reikia nurodytis 2 skaicius');
// });

// apiRouter.get('/api/suma/:pirmas', (req, res) => {
//     return res.send('Norint susumuoti, dar truksta vieno skaiciaus');
// });

// apiRouter.get('/api/suma/:pirmas/:antras', (req, res) => {
//     const a = +req.params.pirmas;
//     const b = +req.params.antras;

//     if(isNaN(a)) {
//        return res.send(`Pirmas parametras nera tikras skaicius`);
//     }
//     if(isNaN(b)) {
//         return res.send(`Antras parametras nera tikras skaicius`);
//      }
//     const sum = +(a + b).toFixed(10);

//     console.log(a, b);
//     return res.send(`${a}+${b}=${sum}`);
// });

// apiRouter.get('/api/dalyba/:pirmas/:antras', (req, res) => {
//     const a = +req.params.pirmas;
//     const b = +req.params.antras;

//     if(isNaN(a)) {
//        return res.send(`Pirmas parametras nera tikras skaicius`);
//     }
//     if(isNaN(b)) {
//         return res.send(`Antras parametras nera tikras skaicius`);
//      }
//     const dalyba = +(a / b).toFixed(10);

//     console.log(a, b);
//     return res.send(`${a}/${b}=${dalyba}`);
//     // res.send('7/5=12');
// });


// apiRouter.get('/api/abbr/:name/:lastName', (req, res) => {
//     const a = req.params.name;
//     const b = req.params.lastName;
//     const result = a.charAt(0) + '. ' + b.charAt(0) + '.';
//       return res.send (`${a.charAt(0)} + ${b.charAt(0)} = ${result}`);
       

      apiRouter.get('/api/time/:hours/:minutes/:seconds', (req, res) => {
        const a = req.params.hours;
        const b = req.params.minutes;
        const c = req.params.seconds;
        const result = a + ":"+ b + ":" + c;
        return res.send (`${a} + ${b} + ${c} = ${result}`);
});


// Kreipiantis konkreciai i toli URL yra grazinamas laikas tokiu formatu hh:mm:ss, bet visi skaiciai yra zodziai
// pvz.: 10:57:14 => desimt valandu, penkiasdesimt septynios minutes, keturiolika sekundziu
// pasistenkti apgalvoti visas galimas gramatikos situacijas
apiRouter.get('/api/time-as-text', (req, res) => {
    const d = new Date();

    const h = formatTimeAsText(d.getHours());
    const m = formatTimeAsText(d.getMinutes());
    const s = formatTimeAsText(d.getSeconds());

    const ht = timeValueTitle(d.getHours(), 'h');
    const mt = timeValueTitle(d.getMinutes(), 'm');
    const st = timeValueTitle(d.getSeconds(), 's');

    const time = `${h} ${ht}, ${m} ${mt}, ${s} ${st}`;
    return res.status(200).send(time);
});



export { apiRouter };
