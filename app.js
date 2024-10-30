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
    rimuovere <strong><h3 style="display: inline;">${litriRubinetto.toFixed(2)} L </h3></strong> dall'acquario e sostituirli con acqua di rubinetto.
`;
document.getElementById('result').style.display = 'block';

