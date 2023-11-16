import express from 'express';
import { addBudget, getBudget } from './modules/BudgetModel.js';


const router = express.Router();

router.get("/", async (req, res)=>{
    const budgetList = await getBudget();
    res.json({
        status: "success",
        message: "Your Transactions",
        budgetList,
    });
});

router.post("/", async (req, res)=>{
    console.log(req.body)

    const result = await addBudget(req.body);

    result?._id
    ? res.json({
        status: "success",
        message: "The transaction has been added",
    })
    : res.json({
        status: "Error",
        message: "Error can't add the transaction",
    })
});

export default router;