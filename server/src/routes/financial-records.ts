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



export default router;