import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
//basically we have used the middleware for validation of backend data 
export const validateDTO = (dtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObject = plainToInstance(dtoClass, req.body);// it will convert the request data into an instance of DTo class
    const errors = await validate(dtoObject); //and here it will validate the data that we have given

    if (errors.length > 0) {
      const errorMessages = errors.map(err => Object.values(err.constraints!)).flat();
      res.status(400).json({ errors: errorMessages });
    }

    next();
  };
};
