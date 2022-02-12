
function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputAmountText = inputValue.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear deposit input
    inputValue.value = '';
    return inputAmount;
}

function updateInputTotal(inputTotalId, newInputAmount) {
    // debugger;
    const inputTotal = document.getElementById(inputTotalId);
    const previousInputTotalText = inputTotal.innerText;
    const previousInputTotal = parseFloat(previousInputTotalText);

    inputTotal.innerText = previousInputTotal + newInputAmount;
}

function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

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
    const newDepositAmount = getInputValue('deposit-input');

    // get and update deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalText);

    depositTotal.innerText = previousDepositTotal + newDepositAmount; */
    const updatedDepositTotal = updateInputTotal('deposit-total', newDepositAmount)


    // balance update
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + newDepositAmount; */
    const balanceTotal = updateBalance(newDepositAmount, true);

})

// Withdraw part
document.getElementById('withdraw-button').addEventListener('click', function () {

    /* const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText); */
    const newWithdrawAmount = getInputValue('withdraw-input');

    // get and update withdraw total
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + newWithdrawAmount; */
    const updatedWithdrawTotal = updateInputTotal('withdraw-total', newWithdrawAmount)

    // balance update
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount; */
    const balanceTotal = updateBalance(newWithdrawAmount, false);

    // clear withdraw input
    // withdrawInput.value = ''; eta dorkar nai. cause function er vitor kaj hoi gese.//
})