import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const router = express.Router();

router.get("/getAllByUserID/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const financialRecords = await FinancialRecordModel.find({
      userId: userId,
    });
    if (financialRecords.length === 0) {
      return res.status(404).json({ message: "No records found for the user" });
    }
    res.status(200).send(financialRecords);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newBodyRecord = req.body;
    const NewRecord = new FinancialRecordModel(newBodyRecord);
    const savedRecord = NewRecord.save();
    res.status(201).send(savedRecord);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newRecordBody = req.body;
    const record = await FinancialRecordModel.findByIdAndUpdate(
      id,
      newRecordBody,
      { new: true }
    );
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const record = await FinancialRecordModel.findByIdAndDelete(id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
