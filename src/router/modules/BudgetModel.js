import BudgetScheme from './BudgetScheme.js'

export const addBudget = obj => {
    return BudgetScheme(obj).save();
}

export const getBudget = () => {
    return BudgetScheme.find();
}