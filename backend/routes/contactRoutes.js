import express from "express";
import { createContact, getAllContacts, markAsRead, deleteContact } from "../controller/contactController.js";
// import { createContact } from "../controller/contactController.js";

const router = express.Router();

router.post("/contact", createContact);
router.get("/contact", getAllContacts);
router.put("/contact/:id/read", markAsRead);
router.delete("/contact/:id", deleteContact);
export default router;