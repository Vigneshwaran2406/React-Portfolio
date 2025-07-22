# EmailJS Setup Instructions

To receive contact form submissions via email, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** service_zhra7bo

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** template_y454wyk

## 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** 9g4mCUsxKVxiwjxBx

## 5. Update the Code
In `src/components/Contact.tsx`, replace these placeholders:

```javascript
const serviceId = 'service_zhra7bo'; // Replace with your Service ID
const templateId = 'template_y454wyk'; // Replace with your Template ID  
const publicKey = '9g4mCUsxKVxiwjxBx'; // Replace with your Public Key
```

## 6. Test the Form
1. Deploy your portfolio or test locally
2. Fill out the contact form
3. Check your email for the message

## Alternative Solutions

### Option 1: Formspree (Simpler Setup)
- Go to [Formspree.io](https://formspree.io/)
- Create account and get form endpoint
- Update form action to point to Formspree

### Option 2: Netlify Forms (If deploying to Netlify)
- Add `netlify` attribute to form
- Netlify automatically handles form submissions

### Option 3: Backend Service
- Create a simple Node.js/Express backend
- Use services like Nodemailer to send emails
- Deploy to Heroku, Vercel, or similar platforms

## Security Notes
- Never expose private keys in frontend code
- EmailJS public key is safe to use in frontend
- Consider rate limiting for production use