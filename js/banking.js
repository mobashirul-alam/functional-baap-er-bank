
function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputAmountText = inputValue.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear deposit input
    inputValue.value = '';
    return inputAmount;
}

function updateInputTotal(inputTotalId, newInputAmount) {
    const inputTotal = document.getElementById(inputTotalId);
    const previousInputTotalText = inputTotal.innerText;
    const previousInputTotal = parseFloat(previousInputTotalText);

    inputTotal.innerText = previousInputTotal + newInputAmount;
}

function currentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = currentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + newAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - newAmount;
    }

}
// Deposit part
document.getElementById('deposit-button').addEventListener('click', function () {

    /* const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText); */


    // get and update deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalText);

    depositTotal.innerText = previousDepositTotal + newDepositAmount; */



    // balance update
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + newDepositAmount; */
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        const updatedDepositTotal = updateInputTotal('deposit-total', newDepositAmount)
        const balanceTotal = updateBalance(newDepositAmount, true);
    }
})

// Withdraw part
document.getElementById('withdraw-button').addEventListener('click', function () {

    /* const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText); */


    // get and update withdraw total
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + newWithdrawAmount; */


    // balance update
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount; */
    const newWithdrawAmount = getInputValue('withdraw-input');
    const presentBalance = currentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < presentBalance) {
        const updatedWithdrawTotal = updateInputTotal('withdraw-total', newWithdrawAmount)
        const balanceTotal = updateBalance(newWithdrawAmount, false);
    }
    if (newWithdrawAmount > presentBalance) {
        console.log('You can not withdraw more than what you have.')
    }
    // clear withdraw input
    // withdrawInput.value = ''; eta dorkar nai. cause function er vitor kaj hoi gese.//
})