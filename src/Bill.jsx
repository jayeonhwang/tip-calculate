export function Bill() {
  return (
    <div className="billing">
      <p>bill</p>
      <input type="number" name="billAmount"/>

      <div className="tip %">
        <p>Select Tip %</p>
        <input type="radio" id="5%"/>
        <label for = "5%">5%</label>
        <input type ="radio" id="10%"/>
        <label for = "10%">10%</label>
        <input type="radio" id="15%"/>
        <label for= "15%">15%</label>
        <input type="radio" id="20%"/>
        <label for= "20%">20%</label>
        <input type="radio" id="25%"/>
        <label for= "25%">25%</label>
        <input type="radio" id="30%"/>
        <label for= "30%">30%</label>
        <input type="radio" id="30%"/>
        <label for= "customs">customs</label>
      </div>

      <p>Number of People</p>
      <input type="number" name="numberOfPeople"/>
    </div>
      
    
  )
}