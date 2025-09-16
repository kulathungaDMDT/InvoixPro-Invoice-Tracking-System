import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Input,
  LinearProgress,
  TextField,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const statuses = ["Draft", "Sent", "Paid", "Cancelled"];

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  // Invoice fields
  const [clientName, setClientName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Draft");
  const [totalAmount, setTotalAmount] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [amountRemaining, setAmountRemaining] = useState("");
  const [installments, setInstallments] = useState("");
  const [notes, setNotes] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an invoice file first! 📁");
    if (!clientName.trim()) return alert("Please enter the client name! 👤");
    if (!invoiceNumber.trim()) return alert("Please enter the invoice number! #️⃣");
    if (!issueDate) return alert("Please select the issue date! 📅");
    if (!dueDate) return alert("Please select the due date! ⏳");
    if (!totalAmount) return alert("Please enter the total amount! 💵");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("clientName", clientName);
    formData.append("invoiceNumber", invoiceNumber);
    formData.append("issueDate", issueDate);
    formData.append("dueDate", dueDate);
    formData.append("status", status);
    formData.append("totalAmount", totalAmount);
    formData.append("amountPaid", amountPaid || 0);
    formData.append("amountRemaining", amountRemaining || 0);
    formData.append("installments", installments || 0);
    formData.append("notes", notes);

    try {
      setUploading(true);
      setProgress(0);

      const token = localStorage.getItem("token");
      if (!token) return alert("Not authenticated! Please log in again.");

      const response = await axios.post(
        "http://localhost:5000/api/invoices/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percent);
          },
        }
      );

      if (response.status === 201) {
        alert("Invoice Upload Successful! 🎉");
        setFile(null);
        setClientName("");
        setInvoiceNumber("");
        setIssueDate("");
        setDueDate("");
        setStatus("Draft");
        setTotalAmount("");
        setAmountPaid("");
        setAmountRemaining("");
        setInstallments("");
        setNotes("");
      }
    } catch (error) {
      console.error("Invoice upload failed:", error);
      alert("Invoice upload failed. ❌");
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = () => {
    navigate("/edit-invoice"); // Navigate to Edit Invoice page
  };

  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "90vh", py: 8 }}>
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 4,
            textAlign: "center",
            bgcolor: "white",
            boxShadow:
              "0 8px 20px rgba(57, 73, 171, 0.1), 0 4px 10px rgba(57, 73, 171, 0.05)",
          }}
        >
          <Typography variant="h4" fontWeight={700} color="#3949ab" mb={3}>
            Upload Invoice 📤
          </Typography>

          {/* Invoice Form Fields */}
          <TextField
            fullWidth
            label="Client Name 👤"
            variant="outlined"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Invoice Number #️⃣"
            variant="outlined"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Issue Date 📅"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Due Date ⏳"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            select
            fullWidth
            label="Invoice Status 📌"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            sx={{ mb: 3 }}
          >
            {statuses.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            label="Total Amount 💵"
            type="number"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Amount Paid 💰"
            type="number"
            value={amountPaid}
            onChange={(e) => setAmountPaid(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Amount Remaining 💵"
            type="number"
            value={amountRemaining}
            onChange={(e) => setAmountRemaining(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Number of Installments 📑"
            type="number"
            value={installments}
            onChange={(e) => setInstallments(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Notes 🧾 (Optional)"
            multiline
            minRows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any additional notes about this invoice"
            sx={{ mb: 3 }}
          />

          {/* File Upload */}
          <Button
            variant="outlined"
            component="label"
            sx={{
              borderColor: "#3949ab",
              color: "#3949ab",
              fontWeight: 600,
              px: 5,
              py: 1.5,
              mb: 2,
              "&:hover": { borderColor: "#283593", backgroundColor: "#e8eaf6" },
            }}
          >
            Choose Invoice File
            <Input type="file" onChange={handleFileChange} sx={{ display: "none" }} />
          </Button>

          <Typography variant="body1" color="text.secondary" mb={3}>
            {file ? file.name : "No file chosen yet..."}
          </Typography>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              disabled={!file || uploading}
              onClick={handleUpload}
              sx={{ px: 6, py: 1.8, fontWeight: 700 }}
            >
              {uploading ? "Uploading..." : "Upload Invoice"}
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={handleEdit}
              sx={{ px: 6, py: 1.8, fontWeight: 700 }}
            >
              Edit Invoice ✏️
            </Button>
          </Box>

          {uploading && (
            <Box sx={{ width: "100%", mt: 4 }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ height: 10, borderRadius: 5 }}
              />
              <Typography variant="body2" color="text.secondary" mt={1}>
                {progress}% completed
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default UploadPage;
