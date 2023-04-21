import SendEmailForm from "@/components/form/send-email-form"

const ContactPage = () => {
  return (
    <main className="page-layout pt-20">
      <h1 className="text-3xl font-medium font-serif text-center mb-8">Send me a message!</h1>
      <SendEmailForm className="container mx-auto px-8 max-w-[600px]" />
    </main>
  )
}

export default ContactPage
