export function Display() {
  return (
    <div className="display">
      {/* Tip amount and Total */}

      <div class="col amount-col">
        <label class="amount-label" for="amount">Tip Amount</label>
        <label class="sub-label" for="total">/ person</label>
      </div>
      <div class="col input-col">
        <p id="amount" class="amount-input">$0.00</p>
      </div>
      <div class="col total-col">
        <label class="total-label" for="total">Total</label>
        <label class="sub-label" for="total"> / person</label>
      </div>
      <div class="col input-col">
        <p id="total" class="total-input">$0.00</p>
      </div>
      <br />

      <label for="reset-btn"></label>
      <button type="button" class="reset-button" value="Reset">Reset</button>

    </div>
  )
}