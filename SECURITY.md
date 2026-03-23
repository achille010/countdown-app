# Security Policy

## Supported Versions

The following versions of Countdown App are currently receiving security updates:

| Version | Supported |
|---|---|
| latest (`main`) | ✅ Yes |
| older branches | ❌ No |

As this is an actively developed open-source project, only the latest code on the `main` branch is maintained.

---

## Reporting a Vulnerability

If you discover a security vulnerability in this project, **please do not open a public GitHub issue.** Public disclosure of security issues before they're fixed puts all users at risk.

Instead, please report it responsibly:

1. **Open a private security advisory** via GitHub:
   Go to the repository → **Security** tab → **Report a vulnerability**

2. Include as much detail as possible:
   - A description of the vulnerability
   - Steps to reproduce it
   - The potential impact
   - Any suggested fixes (optional, but appreciated)

### What to Expect

- **Acknowledgement** within 48 hours of your report
- **Status update** within 7 days (confirmed, dismissed, or in progress)
- **Credit** in the fix's release notes if you'd like it, once the issue is resolved

---

## Scope

This is a **frontend-only** React application with no backend, no database, and no user authentication. Most security concerns will relate to:

- Dependency vulnerabilities (check with `npm audit`)
- XSS risks in dynamic rendering
- Third-party package integrity

---

## Keeping Dependencies Secure

We recommend contributors and users regularly run:

```bash
npm audit
npm audit fix
```

If you spot an outdated or vulnerable dependency, feel free to open a PR updating it.