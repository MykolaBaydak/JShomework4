const KG_TO_LBS = 2.20462;
const kgInput = document.getElementById('kgInput');
const lbsOutput = document.getElementById('lbsOutput');
kgInput.addEventListener('input', function() {
    const kgValue = parseFloat(kgInput.value);
    if (isNaN(kgValue)) {
        lbsOutput.textContent = '0';
        return;
    }
    const lbsValue = kgValue * KG_TO_LBS;
    lbsOutput.textContent = lbsValue.toFixed(2);
});
