// auth middleware sets req.userId — TS doesn't know about it by default, so we teach it here
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export {};
