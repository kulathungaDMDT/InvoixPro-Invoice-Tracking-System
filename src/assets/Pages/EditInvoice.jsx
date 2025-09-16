import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  TextField,
  MenuItem,
} from "@mui/material";

const statuses = ["Draft", "Sent", "Paid", "Cancelled"];

const EditInvoice = () => {
  const [clientName, setClientName] = useState("John Doe");
  const [invoiceNumber, setInvoiceNumber] = useState("INV-001");
  const [issueDate, setIssueDate] = useState("2025-09-01");
  const [dueDate, setDueDate] = useState("2025-09-20");
  const [status, setStatus] = useState("Draft");
  const [totalAmount, setTotalAmount] = useState("1000");
  const [amountPaid, setAmountPaid] = useState("200");
  const [amountRemaining, setAmountRemaining] = useState("800");
  const [installments, setInstallments] = useState("2");
  const [notes, setNotes] = useState("First installment received.");

  const handleSave = () => {
    alert("Invoice updated successfully! ✅");
    // Later: send a PUT request to backend API
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
            Edit Invoice ✏️
          </Typography>

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
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ px: 6, py: 1.8, fontWeight: 700 }}
          >
            Save Changes ✅
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default EditInvoice;
