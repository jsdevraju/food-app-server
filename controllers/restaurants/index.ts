import Resultant from "../../models/restaurant";
import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middleware/catchAsyncError";
import ErrorHandler from "../../utils/errorHandler";


export const createResultant = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const resultant = await Resultant.create(req.body);
    res.status(201).json({
        success: true,
        data: resultant
    });
})

export const getAllResultants = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const resultants = await Resultant.find({}).populate("categories dishes");

    res.status(200).json({
        success: true,
        data: resultants
    });
})

export const getResultant = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const resultant = await Resultant.findById(req.params.id);
    if (!resultant) {
        return next(new ErrorHandler("Resultant not found", 404));
    }
    res.status(200).json({
        success: true,
        data: resultant
    });
})

export const updateResultant = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const resultant = await Resultant.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    if (!resultant) {
        return next(new ErrorHandler("Resultant not found", 404));
    }
    res.status(200).json({
        success: true,
        data: resultant
    });
})

export const deleteResultant = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const resultant = await Resultant.findByIdAndDelete(req.params.id);
    if (!resultant) {
        return next(new ErrorHandler("Resultant not found", 404));
    }
    res.status(200).json({
        success: true,
        data: resultant
    });
})