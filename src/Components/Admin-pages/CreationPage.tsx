import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Textarea from '@mui/joy/Textarea';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CreationPage() {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)} style={{width:100,height:35,fontSize:16,fontWeight:500,backgroundColor:'#252525',color:'#fff',borderRadius:8}}>
        Upload
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            
            width: "90%",
            
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            height:'90%'
          }}
        >
            
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body"
            }}
            
          />
          
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Upload new data
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
                Fill all the field To avoid unwanted Server error
            which may lead to server down.
          </Typography>

          <div className="input-container" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'left'}}>

          <div className="inputRow-1">

                <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Textarea placeholder="Enter Name here" minRows={1} maxRows={1} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>
                <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Location</FormLabel>
                        <Textarea placeholder="Inside Campus" minRows={1} maxRows={1} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>
                <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Scientific Name</FormLabel>
                        <Textarea placeholder="Use Italic font" minRows={1} maxRows={1} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>
                <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Common Name</FormLabel>
                        <Textarea placeholder="" minRows={1} maxRows={1} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>
                <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Tamil Name</FormLabel>
                        <Textarea placeholder="" minRows={1} maxRows={1} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>
                <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Family</FormLabel>
                        <Textarea placeholder="" minRows={1} maxRows={1} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>
            </div>

            <div className="inputRow-2">

                <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Textarea placeholder="Enter here" minRows={2} maxRows={3} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>
                <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Uses</FormLabel>
                        <Textarea placeholder="Enter here" minRows={2} maxRows={3} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>
                <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Kingdom</FormLabel>
                        <Textarea placeholder="" minRows={1} maxRows={1} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>
                <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Phylum</FormLabel>
                        <Textarea placeholder="" minRows={1} maxRows={1} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>
                <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Class</FormLabel>
                        <Textarea placeholder="" minRows={1} maxRows={1} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>
                
            </div>

            <div className="inputRow-3">

            <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Genus</FormLabel>
                        <Textarea placeholder="" minRows={1} maxRows={1} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>
                <div style={{marginTop:20,width:300}}>
                    <FormControl>
                        <FormLabel>Species</FormLabel>
                        <Textarea placeholder="" minRows={1} maxRows={1} />
                        {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                    </FormControl>
                </div>

           

                <Typography id="modal-desc" textColor="text.tertiary" style={{marginTop:20}}>
                       Upload 4 images for this Flora
                </Typography>

                    <input
                        accept="image/*"
                        className=""
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button   style={{background:'#252525',color:'#fff',marginTop:16}}>
                                Upload
                            </Button>
                        </label> 
                        {/* <input
                            accept="image/*"
                            className={classes.input}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                            />
                            <label htmlFor="raised-button-file">
                            <Button variant="raised" component="span" className={classes.button}>
                                Upload
                            </Button>
                            </label>  */}

                <Typography id="modal-desc" textColor="text.tertiary" style={{marginTop:20}}>
                       Upload 360° image if available
                </Typography>

                    <input
                        accept="image/*"
                    
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button  style={{background:'#252525',color:'#fff',marginTop:16}}>
                                Upload
                            </Button>
                        </label> 

                        <div style={{marginTop:20}}>
                            <FormControl sx={{minWidth: 120 }} >      

                                    <InputLabel id="demo-select-small-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={age}
                                        label="Type"
                                        onChange={handleChange}
                                    >
                                            
                                    
                                        <MenuItem value="">
                                        </MenuItem>
                                        <MenuItem value={10}>Trees</MenuItem>
                                        <MenuItem value={20}>Palm</MenuItem>
                                        <MenuItem value={30}>Climbers</MenuItem>
                                        <MenuItem value={40}>Creepers</MenuItem>
                                        <MenuItem value={50}>Flowering Shurbs</MenuItem>
                                        <MenuItem value={60}>Foliage Shurbs</MenuItem>
                                        <MenuItem value={70}>Medicinal Plants</MenuItem>
                                        <MenuItem value={80}>Indoor Plants</MenuItem>


                                    </Select>
                            </FormControl>
                        </div>
            </div>


        </div>

        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
