document.getElementById('waterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const litriAcquario = parseFloat(document.getElementById('litriAcquario').value);
    const durezzaAcquario = parseFloat(document.getElementById('durezzaAcquario').value);
    const durezzaRubinetto = parseFloat(document.getElementById('durezzaRubinetto').value);
    const durezzaTarget = parseFloat(document.getElementById('durezzaTarget').value);

    const litriRubinetto = ((durezzaTarget - durezzaAcquario) / (durezzaRubinetto - durezzaAcquario)) * litriAcquario;
    const litriAcquarioResidui = litriAcquario - litriRubinetto;

document.getElementById('output').innerHTML = `
    Per raggiungere una durezza di ${durezzaTarget}°dH, <br>
    rimuovere <h3><strong>${litriRubinetto.toFixed(2)}</strong></h3> litri dall'acquario e sostituirli con acqua di rubinetto.
`;    document.getElementById('result').style.display = 'block';
});
