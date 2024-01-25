export function Form() {
  return (
    <form className="input-form">
      <div className="tip-input">
        {/* Bill input */}
        <label for="bill" className="label-title bill">Bill</label>
        <input type="number" id="bill" className="bill-input" placeholder="0" name="bill" />
        {/* Tip buttons input */}
        <div className="tip-btns">
          <label for="tip" className="label-title select">Select Tip %</label>
          <div className="col">
            <button className="tip-buttons" value="5%">5%</button>
            <button className="tip-buttons" value="10%">10%</button>
            <button className="tip-buttons" value="15%">15%</button>
          </div>
          <div className="col">
            <button className="tip-buttons" value="25%">25%</button>
            <button className="tip-buttons" value="50%">50%</button>
            <input type="number" id="tip" className="custom-input" value="custom" placeholder="Custom" />
          </div>
        </div>
      </div>
      <br />

      {/* Number of people input */}
      <div className="perPerson-input">

        <label for="quantity" className="label-title num"> Number of People</label>

        <small className="error-message">Can't be zero</small>
        <input type="number" className="numOfPeople-input" name="numberOfPeople" id="quantity" placeholder="0" />
      </div>
    </form>

  )
}