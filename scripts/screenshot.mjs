/**
 * screenshot.mjs — take full-page or viewport screenshots for pixel-perfect reference
 *
 * Usage:
 *   node scripts/screenshot.mjs <url> [output-name] [--full]
 *
 * Examples:
 *   node scripts/screenshot.mjs https://workbyw.com ref-home
 *   node scripts/screenshot.mjs https://workbyw.com/work ref-work
 *   node scripts/screenshot.mjs http://localhost:5174 our-home
 *   node scripts/screenshot.mjs https://workbyw.com ref-home --full   (full-page scroll)
 *
 * Screenshots saved to: scripts/screenshots/
 */

import puppeteer from 'puppeteer'
import { mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(__dirname, 'screenshots')
mkdirSync(outDir, { recursive: true })

const url      = process.argv[2]
const name     = process.argv[3] || 'screenshot'
const fullPage = process.argv.includes('--full')

if (!url) {
  console.error('Usage: node scripts/screenshot.mjs <url> [name] [--full]')
  process.exit(1)
}

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

// Give fonts/animations time to settle
await new Promise(r => setTimeout(r, 1200))

const outPath = resolve(outDir, `${name}.png`)
await page.screenshot({ path: outPath, fullPage })

await browser.close()
console.log(`✓ Saved: ${outPath}`)
