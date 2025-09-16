import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MyInvoices = () => {
  // Hardcoded Invoices (6 rows)
  const [invoices, setInvoices] = useState([
    {
      _id: 1,
      clientName: "ABC Pvt Ltd",
      invoiceNumber: "INV-001",
      issueDate: "2025-01-10",
      dueDate: "2025-01-20",
      status: "Paid",
      totalAmount: 1000,
      amountPaid: 1000,
      amountRemaining: 0,
    },
    {
      _id: 2,
      clientName: "XYZ Solutions",
      invoiceNumber: "INV-002",
      issueDate: "2025-01-12",
      dueDate: "2025-01-22",
      status: "Unpaid",
      totalAmount: 2000,
      amountPaid: 0,
      amountRemaining: 2000,
    },
    {
      _id: 3,
      clientName: "Techie Hub",
      invoiceNumber: "INV-003",
      issueDate: "2025-01-14",
      dueDate: "2025-01-25",
      status: "Partial",
      totalAmount: 1500,
      amountPaid: 500,
      amountRemaining: 1000,
    },
    {
      _id: 4,
      clientName: "Creative Minds",
      invoiceNumber: "INV-004",
      issueDate: "2025-01-15",
      dueDate: "2025-01-28",
      status: "Paid",
      totalAmount: 2500,
      amountPaid: 2500,
      amountRemaining: 0,
    },
    {
      _id: 5,
      clientName: "Global Traders",
      invoiceNumber: "INV-005",
      issueDate: "2025-01-16",
      dueDate: "2025-01-29",
      status: "Unpaid",
      totalAmount: 3000,
      amountPaid: 0,
      amountRemaining: 3000,
    },
    {
      _id: 6,
      clientName: "NextGen Corp",
      invoiceNumber: "INV-006",
      issueDate: "2025-01-18",
      dueDate: "2025-02-01",
      status: "Partial",
      totalAmount: 1800,
      amountPaid: 800,
      amountRemaining: 1000,
    },
  ]);

  // Delete invoice
  const handleDelete = (id) => {
    setInvoices(invoices.filter((inv) => inv._id !== id));
  };

  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const filteredInvoices = invoices.filter((inv) =>
    Object.values(inv).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Box sx={{ minHeight: "80vh", pt: 10, px: 4, backgroundColor: "#f5f7fa" }}>
      {/* Title */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={700}
        mb={3}
        color="#3949ab"
        letterSpacing={1}
      >
        🧾 My Invoices
      </Typography>

      {/* Search Bar */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <TextField
          variant="outlined"
          placeholder="Search invoices..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "60%", backgroundColor: "white", borderRadius: 2 }}
        />
      </Box>

      {/* Invoices Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 4 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#3949ab" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Client Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Invoice #</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Issue Date</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Due Date</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Status</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Total Amount</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Paid</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Remaining</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((inv) => (
                <TableRow key={inv._id}>
                  <TableCell>{inv.clientName}</TableCell>
                  <TableCell>{inv.invoiceNumber}</TableCell>
                  <TableCell>{inv.issueDate}</TableCell>
                  <TableCell>{inv.dueDate}</TableCell>
                  <TableCell>{inv.status}</TableCell>
                  <TableCell>💵 {inv.totalAmount}</TableCell>
                  <TableCell>💰 {inv.amountPaid}</TableCell>
                  <TableCell>💸 {inv.amountRemaining}</TableCell>
                  <TableCell>
                    <IconButton color="error" onClick={() => handleDelete(inv._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  ❌ No invoices found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyInvoices;
