export function Amount() {
  return (
    <div>
      <div className="tipAmount">
        <p>Tip Amont</p>
        <small>/ per person</small>
        <input type="number" name="tipAmount"/>
      </div>

      <div className="totalAmount">
        <p>Total</p>
        <small>/ per person</small>
        <input type="number" name="total"/>
      </div>

      <button>Reset</button>

    </div>
  )
}