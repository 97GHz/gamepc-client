function Timetable() {
    return (
        <table style={{width: "100%"}}>
          <thead>
            <tr>
              <td width="34%">Time</td>
              <td width="33%">PC</td>
              <td width="33%">Name</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="2">10:00~12:00</td>
              <td>PC1</td>
              <td>NOPE</td>
            </tr>
            <tr>
              <td>PC2</td>
              <td>HEY~</td>
            </tr>
          </tbody>
        </table>
    );
}

export default Timetable;