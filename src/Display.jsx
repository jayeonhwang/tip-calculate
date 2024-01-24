export function Display() {
  return (
    <div className="display">
      <div className="tipAmount">
        <p>Tip Amont</p>
        <input type="number" name="tipAmount" />
        <small>/ per person</small>
      </div>

      <div className="totalAmount">
        <p>Total</p>
        <input type="number" name="total" />
        <small>/ per person</small>
      </div>

      <button>Reset</button>

    </div>
  )
}