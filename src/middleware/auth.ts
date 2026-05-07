import type { Request, Response, NextFunction } from 'express'

export interface AuthContext {
  userId: string
  role: 'client' | 'instructor' | 'studio_admin' | 'super_admin'
  actingAs?: string
  impersonatedBy?: string
}

declare global {
  namespace Express {
    interface Request {
      auth: AuthContext
    }
  }
}

export async function verifyAuth(req: Request, res: Response, next: NextFunction) {}
