import { Router } from 'express'
import express from 'express'

const router = Router()

// Raw body required for signature verification
router.post('/webhooks/clerk', express.raw({ type: 'application/json' }), async (req, res) => {})
router.post('/webhooks/stripe', express.raw({ type: 'application/json' }), async (req, res) => {})

export default router
