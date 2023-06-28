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
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../FirebaseConfig.js";
import CreationPage from "../CreationPage.tsx";
import Search from '../assets/Search.svg'
import { Container, InputAdornment, TextField, InputBase } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import QRCode from "qrcode.react";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const TreeTable = (props) => {
  const classes = useStyles();
  const [treeList, setTreeList] = useState(props.treeList)
  const [selectedData, setSelectedData] = useState("null")

  const [rows, setRows] = useState(treeList);
  const [pg, setpg] = useState(0);
  const [rpg, setrpg] = useState(5);
  const [searchText, setSearchText] = useState("")



  React.useEffect(() => {
    const getData = setTimeout(() => {
      const filteredRows = treeList.filter((row) => {
        return row.name.toLowerCase().includes(searchText.toLowerCase());
      });
      setRows(filteredRows);
      setpg(0)
    }, 500)
  }, [searchText])


  function handleChangePage(event, newpage) {
    setpg(newpage);
  }

  async function deleteTree(name) {
    deleteDoc(doc(db, "trees", name)).then(() => {
      setTreeList((current) =>
        current.filter((tree) => tree.name !== name)
      );
      setRows((current) =>
        current.filter((tree) => tree.name !== name)
      );
    }).catch((e) => {
      console.error(e);
    })
  }

  function handleChangeRowsPerPage(event) {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  }

  const handleDownloadQR = (name) => {
    var resizedCanvas = document.createElement("canvas");
    var resizedContext = resizedCanvas.getContext("2d");

    resizedCanvas.height = "200";
    resizedCanvas.width = "200";
    setTimeout(() => {
      var canvas = document.getElementById("generated-qr2");
      resizedContext.drawImage(canvas, 0, 0, 200, 200);

      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL("image/png");
      downloadLink.download = name + ".png";
      downloadLink.click();
    }, 1000);

  };

  return (
    <div style={{ marginLeft: 20, marginRight: 20, paddingTop: 100 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
        <p style={{ fontSize: 24, fontWeight: 600, color: '#656565', margin: 0 }}> Woodie Datas</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Container >
            <TextField
              color="grey"
              id="search"
              type="search"
              label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}

              sx={{ width: 600 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" >
                    {/* <SearchIcon /> */}

                  </InputAdornment>
                ),
              }}
            />
          </Container>
          <CreationPage title="Upload" setTreeList={setTreeList} setRows={setRows} />
        </div>
      </div>


      <Paper style={{ marginTop: 54, borderRadius: 20 }}>

        <TableContainer style={{ width: '100%', borderRadius: 20 }}>
          <Table className={classes.table} aria-label="simple table" style={{ width: 2500 }}>
            <TableHead style={{ backgroundColor: '#252525' }}>
              <TableRow style={{ width: 800 }}>
                <TableCell align=""> <p style={{ color: '#fff' }}><b>Name</b></p></TableCell>
                <TableCell align="center"> <p style={{ color: '#fff' }}><b>Sci- Name</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' }}><b>Location</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' }}><b>Common Name</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' }}><b>Tamil Name</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' }}><b>Family</b></p></TableCell>
                <TableCell align="center"> <p style={{ color: '#fff' }}><b>Description</b></p></TableCell>
                <TableCell align="center"> <p style={{ color: '#fff' }}><b>Uses</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' }}><b>Kingdom</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' }}><b>Phylum</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' }}><b>Class</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' }}><b>Order</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' }}><b>Genus</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' }}><b>Species</b></p></TableCell>
                <TableCell align="center" > <div></div></TableCell>
                <TableCell align="center" > <div></div></TableCell>
                <TableCell align="center" > <div></div></TableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" width="120"> {row.name} </TableCell>
                  <TableCell align="center">{row.scientificName}</TableCell>
                  <TableCell align="center">{row.location}</TableCell>
                  <TableCell align="center">{row.commonName}</TableCell>
                  <TableCell align="center">{row.tamilName}</TableCell>
                  <TableCell align="center">{row.family}</TableCell>
                  <TableCell align="left" width="300">{row.botanicalDes}</TableCell>
                  <TableCell align="left" width="600">{row.uses}</TableCell>
                  <TableCell align="center">{row.kingdom}</TableCell>
                  <TableCell align="center">{row.phylum}</TableCell>
                  <TableCell align="center">{row.class}</TableCell>
                  <TableCell align="center">{row.order}</TableCell>
                  <TableCell align="center">{row.genus}</TableCell>
                  <TableCell align="center">{row.species}</TableCell>
                  <TableCell align="center">

                    <Button variant="contained" onClick={() => { deleteTree(row.name) }} style={{ background: '#F25C6F', borderRadius: 6, height: 32, width: 80, marginTop: 0 }}>Delete</Button>

                  </TableCell>
                  <TableCell align="center">

                    <Button variant="contained" onClick={() => {
                      setSelectedData("https://biodiversity.srmist.edu.in/Info?tree=" + row.name);
                      handleDownloadQR(row.name)
                    }} style={{ background: 'black', borderRadius: 6, height: 32, width: 80, marginTop: 0 }}>Generate QR</Button>

                  </TableCell>

                  <TableCell align="center">

                  <CreationPage title="Edit" setTreeList={setTreeList} setRows={setRows} row={row} />

                  </TableCell>



                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <QRCode style={{}} id="generated-qr2" value={selectedData} size={200} />

        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rpg}
          page={pg}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </div>
  );
};

export default TreeTable;
