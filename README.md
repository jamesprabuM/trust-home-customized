# Trust Home for Special Children — website starter

Next.js App Router, React, Tailwind CSS v4, React Three Fiber, Drei, GSAP, lucide-react, and Swiper.

## Run locally
Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Routes
- `/` — homepage, 3D hero, program slider
- `/about` — story and values
- `/programs` — residential care and education/life-skills draft copy
- `/impact` — transparency-first impact page
- `/gallery` — consent-aware gallery placeholder
- `/get-involved` — donation, volunteer, partnership information
- `/contact` — enquiry form UI (demo only; not connected to email/backend)
- `/privacy` — privacy and safeguarding policy draft

## Required before launch
1. Replace “A Place to Grow” with the trust's official registered name and approved logo.
2. Add verified location, phone, email, registration identifiers, leadership, and governance details.
3. Verify every service description; remove services not actually provided.
4. Add approved photos only after documented consent and safeguarding review.
5. Connect the contact form to a secure backend/form provider, add spam protection, and test delivery.
6. Online donations are **not implemented**. Choose a reputable payment provider, create the trust's merchant account, use provider-hosted checkout, verify payment callbacks server-side, issue receipts, and never store card details on this website.
7. Confirm eligibility and requirements before accepting online donations. In India, seek professional advice on domestic and, if relevant, foreign contributions and tax receipts. Do not display unverified tax exemption or registration claims.
8. Replace `https://example.org` in `app/layout.tsx` with the real domain.
9. Review privacy, child safeguarding, accessibility, mobile performance, and security.
10. Run `npm run build` and fix errors before deployment.

This is a starter project, not a deployed or production-certified website. Demo form validation does not send information, and no donation payment is processed.
