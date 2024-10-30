document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('waterForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Prende i valori di input
        const litriAcquario = parseFloat(document.getElementById('litriAcquario').value);
        const durezzaAcquario = parseFloat(document.getElementById('durezzaAcquario').value);
        const durezzaRubinetto = parseFloat(document.getElementById('durezzaRubinetto').value);
        const durezzaTarget = parseFloat(document.getElementById('durezzaTarget').value);

        // Controlla che tutti i valori siano numeri validi
        if (isNaN(litriAcquario) || isNaN(durezzaAcquario) || isNaN(durezzaRubinetto) || isNaN(durezzaTarget)) {
            alert("Per favore, inserisci valori validi per tutti i campi.");
            return;
        }

        // Esegue il calcolo dei litri di acqua da sostituire
        const litriRubinetto = ((durezzaTarget - durezzaAcquario) / (durezzaRubinetto - durezzaAcquario)) * litriAcquario;

        // Mostra il risultato nell'elemento 'output'
        document.getElementById('output').innerHTML = `
            Per raggiungere una durezza di ${durezzaTarget}°dH, <br>
            rimuovere <strong><h3 style="display: inline;">${litriRubinetto.toFixed(2)}</h3></strong> litri dall'acquario e sostituirli con acqua di rubinetto.
        `;
        document.getElementById('result').style.display = 'block';
    });
});
