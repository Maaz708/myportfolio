# Gmail Setup for Contact Form

To enable the contact form to send emails to your Gmail account, follow these steps:

## Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to Security
3. Enable 2-Factor Authentication if not already enabled

## Step 2: Generate App Password
1. In your Google Account settings, go to Security
2. Find "App passwords" (you'll only see this if 2FA is enabled)
3. Click on "App passwords"
4. Select "Mail" as the app
5. Click "Generate"
6. Copy the 16-character password that appears

## Step 3: Create Environment File
1. Create a file named `.env.local` in your project root (same level as package.json)
2. Add the following content:

```env
# Your Gmail address (the email you want to receive contact form messages)
GMAIL_USER=your-email@gmail.com

# Gmail App Password (the 16-character password from Step 2)
GMAIL_APP_PASSWORD=your-16-character-app-password
```

## Step 4: Replace Placeholder Values
- Replace `your-email@gmail.com` with your actual Gmail address
- Replace `your-16-character-app-password` with the app password you generated

## Step 5: Restart Development Server
After creating the `.env.local` file, restart your development server:
```bash
npm run dev
```

## Important Notes:
- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore` to prevent accidental commits
- Use your Gmail address (not the app password) as the `GMAIL_USER`
- The app password is different from your regular Gmail password
- All contact form messages will be sent to your Gmail address

## Production (Netlify) Setup
To keep credentials out of GitHub and make them available in production:

1. In Netlify, open your site → Settings → Build & deploy → Environment → Environment variables.
2. Add two variables:
   - `GMAIL_USER` → your Gmail address
   - `GMAIL_APP_PASSWORD` → your 16-character Gmail App Password
3. Save and trigger a new deploy (Deploys → Trigger deploy → Clear cache and deploy site).

Notes:
- Do not prefix these with `NEXT_PUBLIC_` (that would expose them to the browser).
- These variables are only used on the server in `app/api/send-message/route.ts`.
- Keep `.env.local` only on your machine for local dev; it is ignored by git.

Optional (for collaborators):
- Commit a placeholder file named `.env.example` (no secrets) so others know which variables to set:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

If you find the contact form API returning 404 in production, ensure your app is deployed with server functions enabled (static export disables API routes).

## Testing:
Once configured, you can test the contact form by:
1. Going to your portfolio's contact page
2. Filling out the form
3. Submitting it
4. Checking your Gmail inbox for the message

The email will have a subject line like "Portfolio Contact: [Subject]" and will include all the form details in a nicely formatted HTML email.
