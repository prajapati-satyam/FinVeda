function calculateRD() {
    let amount = parseFloat(document.getElementById("monthly-installment").value);
    let rate = parseFloat(document.getElementById("rate1").value) / 100;
    let time = parseFloat(document.getElementById("months").value) / 12;
    let n = 12;

    let maturity = amount * ((Math.pow(1 + (rate / n), n * time) - 1) / (1 - Math.pow(1 + (rate / n), -1)));

    let totalInvestment = amount * (time * 12); 
    let interestEarned = maturity - totalInvestment; 

        document.getElementById("interestEarned1").innerText = interestEarned.toFixed(2);
        document.getElementById("maturityAmount1").innerText = maturity.toFixed(2);
    

    console.log('all done')
}

function clearFields() {
    document.getElementById("monthly-installment").value = "";
    document.getElementById("rate1").value = "";
    document.getElementById("months").value = "";
    document.getElementById('calculate-rd').disabled = true
    document.getElementById("interestEarned1").innerText = '';
document.getElementById("maturityAmount1").innerText = '';
    
}


function disable() {
    let amount =document.getElementById("monthly-installment").value;
    let rate = document.getElementById("rate1").value;
    let time = document.getElementById("months").value;
    let calculate_rd_button = document.getElementById('calculate-rd');
    if (amount.length < 1 ||rate.length < 1 || time.length < 1) {
       calculate_rd_button.disabled = true
    } else {
        calculate_rd_button.disabled = false
    }
    
}

document.getElementById('clear').addEventListener('click', clearFields)
document.getElementById('calculate-rd').addEventListener('click', calculateRD)

document.getElementById("monthly-installment").addEventListener('input', disable);
document.getElementById("rate1").addEventListener('input', disable);
document.getElementById("months").addEventListener('input', disable);