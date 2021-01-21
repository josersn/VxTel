import './utils/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { PricingController } from './controllers/pricing';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupController();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupController(): void {
    const pricingController = new PricingController();
    this.addControllers([pricingController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
