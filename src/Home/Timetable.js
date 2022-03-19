import { Paper, TableBody, TableContainer, TableHead, TableRow, Table, TableCell } from "@mui/material"

const data = [
  {
    time: '08:00-10:00',
    content: [{
      pc: 'pc1', name: 'han'
    },
    {
      pc: 'pc2', name: 'kim'
    }],
  },
  {
    time: '10:00-12:00',
    content: [{
      pc: 'pc1', name: 'lee'
    },
    {
      pc: 'pc2', name: null
    }],
  },
  {
    time: '12:00-14:00',
    content: [{
      pc: 'pc1', name: 'hong'
    },
    {
      pc: 'pc2', name: 'park'
    }],
  }
];

function TRows() {
  return data.map(({ time, content }) => {
    return content.map(({ pc, name }, i) => {
      return (
        <TableRow>
          {i === 0 ? <TableCell align="center" rowSpan={content.length} >{time}</TableCell> : null}
          <TableCell align="center">{pc}</TableCell>
          <TableCell align="center">{name ? name : "사용불가"}</TableCell>
        </TableRow>
      );
    });
  });
}

function TBody() {
  return (
    <TableBody>
      <TRows />
    </TableBody>
  )
}

function Timetable(props) {
  return (
    <TableContainer component={Paper} {...props}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">PC</TableCell>
            <TableCell align="center">Name</TableCell>
          </TableRow>
        </TableHead>
        <TBody />
      </Table>
    </TableContainer>
  );
}

export default Timetable;