import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authToken = req.headers.authorization;

  if (!authToken) {
    res.status(401).json({ error: "Token is missing" });
    return;
  }

  const [, token] = authToken.split(" ");

  try {
    const decoded = verify(token, process.env.JWT_SECRET as string);
    req.user_id = (decoded as any).sub;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
    return;
  }
}

