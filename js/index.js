let selectedItems = [];
let total = 0;
let fullPrice = 0;
let discount = 0;
const discountThreshold = 200;
// Function to handle card click
function handleCLikBtn(element) {
    element.classList.toggle("border-4");
    element.classList.toggle("border-[#E527B2]");
    element.classList.toggle("bg-[#F6F6F6]");
}
function handleCLikBtn(card) {
    const price = parseFloat(card.querySelector('h6').textContent); // Get the price
    const name = card.querySelector('h5').textContent; // Get the name

    // Add the item to the selected items array
    selectedItems.push({ name, price });
    // Update the total price and full price
    total += price;
    fullPrice += price;
    // Update the display
    updateDisplay();
    const totalElement = document.getElementById('total');
    const tootal = totalElement.innerText
    // const total = parseFloat(tootal)
    if (tootal !== '00') {
        const Purchase1 = document.getElementById('Purchase')
        Purchase1.removeAttribute('disabled')
        // console.log('true');
    }
    else {
        console.log('false');
    }
}
// Function to apply discount
function applyDiscount() {
    const couponCode = document.getElementById('inputField').value;
    if (couponCode === 'SELL200' && total >= discountThreshold) {
        // Apply 20% discount
        discount = total * 0.2;
        fullPrice -= discount;
        // Update the display
        updateDisplay();
        // Disable the Apply button
        document.getElementById('applyButton').disabled = true;
        document.getElementById('applyButton').style.backgroundColor = '#F3F3F3'; // Set disabled color
    } else {
        // Show an alert
        alert("Invalid or empty coupon code. Please enter a valid code.");
    }
}

// Function to update the display
function updateDisplay() {
    const selectedItemsElement = document.getElementById('selected-items');
    const totalElement = document.getElementById('total');
    const discountElement = document.getElementById('discount');
    const fullPriceElement = document.getElementById('full-price');
    const makePurchaseButton = document.getElementById('makePurchaseButton');
    // Clear the selected items element and re-populate it with item counts
    selectedItemsElement.innerHTML = '';
    selectedItems.forEach((item, index) => {
        selectedItemsElement.innerHTML += `${index + 1}. ${item.name}: ${item.price.toFixed(2)} TK<br>`;
    });
    // Update the total price, discount, and full price elements
    totalElement.textContent = total.toFixed(2) + ' TK';
    discountElement.textContent = discount.toFixed(2);
    fullPriceElement.textContent = fullPrice.toFixed(2) + ' TK';

    if (fullPrice <= discountThreshold) {
        document.getElementById('applyButton').disabled = true;
        document.getElementById('applyButton').style.backgroundColor = '#F3F3F3'; // Set disabled color
    } else {
        document.getElementById('applyButton').disabled = false;
        document.getElementById('applyButton').style.backgroundColor = '#E527B2'; // Set enabled color
    }
}
// Add an event listener to the "Go Home" button
document.getElementById('goHomeButton').addEventListener('click', function (event) {
    event.preventDefault();
    // Close the modal if needed
    document.getElementById('my_modal_6').checked = false;
});
function goHome() {
    location.reload();
}
document.querySelector('.modal-action label.btn').addEventListener('click', goHome);