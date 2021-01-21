import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('pricing')
export class PricingController {
  @Get('')
  public getPrice(req: Request, res: Response): void {
    const { origin, to, duration, plan } = req.body;

    res.send([
      {
        origin: 11,
        to: 16,
        pricePerTime: 1.9,
        duration: 20,
        plan: 1,
        withPlan: 0,
        withOut: 38,
      },
    ]);
  }


//   private getPricePerMinute(inital, final): void {

//   }
}
