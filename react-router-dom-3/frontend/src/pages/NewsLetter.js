import React from 'react'
import PageContent from '../components/PageContent'
import NewsletterSignup from '../components/NewsletterSignup'
import { json, redirect } from 'react-router-dom'

const NewsLetterPage = () => {
  return (
      <PageContent title='Join our awsome Newsletter' >
      <NewsletterSignup />
      </PageContent>
  )
}

export default NewsLetterPage

export const action = async ({ request, params }) => {
    const method = request.method;
    const data = await request.formData();
    const email = data.get('email');
    const response = await fetch('http://localhost:8080/events', {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(email),
    });

    console.log(email);
    if (!response.ok) {
        throw json({ message: 'email not saved' }, { status: 500 });
    } 
    return redirect('/events')
}