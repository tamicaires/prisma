import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateSuplierController {
  async handle(request: Request, response: Response) {
    const { name, city } = request.body;

    const suplier = await prismaClient.suplier.create({
      data: {
        name,
        city
      }
    })
    return response.json(suplier)
  }
};

