import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import QRsearchbar from "./QRsearchbar";
import QRCode from "react-qr-code";
import { useState } from "react";


export default function QRgenerator() {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleDataSelection = (data) => {
    setSelectedData(data);
  };

  const handleDownloadQR = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = document.getElementById("generated-qr").toDataURL();
    downloadLink.download = "generated_qr.png";
    downloadLink.click();
  };

  return (
    <React.Fragment>
      {/* Generate button */}
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
        style={{
          width: 100,
          height: 35,
          fontSize: 16,
          fontWeight: 500,
          backgroundColor: "#252525",
          color: "#fff",
          borderRadius: 8,
          marginTop: 12
        }}
      >
        Generate
      </Button>

      {/* Modal */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: "60%",
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            height: "80%"
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
            Generate QR
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            Search and select the uploaded data, then generate the QR code by clicking "Generate".
          </Typography>

          {/* QR search bar */}
          <QRsearchbar onSelection={handleDataSelection} />

          {/* Generated QR code */}
          {selectedData && (
            <div id="generated-qr">
              <QRCode value={selectedData} size={200} />
            </div>
          )}

          {/* Download button */}
          {selectedData && (
            <Button
              variant="outlined"
              color="neutral"
              onClick={handleDownloadQR}
              style={{ marginTop: 20 }}
            >
              Download QR
            </Button>
          )}
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
