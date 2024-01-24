export function Form() {
  return (
    <div className="form">
      <p>Bill</p>
      <input type="number" name="billAmount" />

      <div className="tip %">
        <p>Select Tip %</p>
        <input type="radio" id="5%" value={0.05} />
        <label for="5%">5%</label>
        <input type="radio" id="10%" value={0.1} />
        <label for="10%">10%</label>
        <input type="radio" id="15%" value={0.15} />
        <label for="15%">15%</label>
        <input type="radio" id="20%" value={0.2} />
        <label for="20%">20%</label>
        <input type="radio" id="25%" value={0.25} />
        <label for="25%">25%</label>
        <input type="radio" id="30%" value={0.3} />
        <label for="30%">30%</label>
        <input type="number" id="customs" />
        <label for="customs">customs</label>
      </div>

      <p>Number of People</p>
      <input type="number" name="numberOfPeople" />
    </div>


  )
}