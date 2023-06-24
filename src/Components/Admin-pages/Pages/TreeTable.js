import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, TablePagination } from "@mui/material";
import Paper from "@material-ui/core/Paper";
// import SearchBar from "material-ui-search-bar"
import SearchBar from "../SearchBar";
import CreationPage from "../CreationPage.tsx";


const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const TreeTable = () => {
  const classes = useStyles();

  const originalRows = [
    { name: "Pizza", calories: "helolflib", fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Hot Dog", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Burger", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Hamburger", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Fries", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Ice Cream", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 }
  ];

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
  <div style={{marginLeft:20,marginRight:20,marginTop:32}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginLeft:20,marginRight:20}}>
      <p style={{fontSize:24,fontWeight:600,color:'#656565',margin:0}}> Woodie Datas</p>
     
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:460}}>
      <SearchBar/>

      <CreationPage/>      </div>
    </div>
      
   
      <Paper style={{marginTop:20}}>
        {/* <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        /> */}
        <TableContainer style={{width:'100%'}}>
          <Table className={classes.table} aria-label="simple table" style={{width:2000}}>
            <TableHead>
              <TableRow style={{width:800}}>
                <TableCell  align=""> <p style={{}}><b>Name</b></p></TableCell>
                <TableCell align="center"> <p style={{}}><b>Sci- Name</b></p></TableCell>
                <TableCell align="center" > <p style={{}}><b>Location</b></p></TableCell>
                <TableCell align="center" > <p style={{}}><b>Common Name</b></p></TableCell>
                <TableCell align="center" > <p style={{}}><b>Tamil Name</b></p></TableCell>
                <TableCell align="center" > <p style={{}}><b>Family</b></p></TableCell>
                <TableCell align="center"> <p style={{}}><b>Description</b></p></TableCell>
                <TableCell align="center"> <p style={{}}><b>Uses</b></p></TableCell>
                <TableCell align="center" > <p style={{}}><b>Kingdom</b></p></TableCell>
                <TableCell align="center" > <p style={{}}><b>Phylum</b></p></TableCell>
                <TableCell align="center" > <p style={{}}><b>Class</b></p></TableCell>
                <TableCell align="center" > <p style={{}}><b>Order</b></p></TableCell>
                <TableCell align="center" > <p style={{}}><b>Family</b></p></TableCell>
                <TableCell align="center" > <p style={{}}><b>Genus</b></p></TableCell>
                <TableCell align="center" > <p style={{}}><b>Species</b></p></TableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          // count={rows.length}
          // rowsPerPage={rowsPerPage}
          // page={page}
          // onPageChange={handleChangePage}
          // onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    
     </div>
  );
};

export default TreeTable;
