using Mansor.Business.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using System.Net;
using System.Net.Mail;

namespace Mansor.Business.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration Configuration;

        public EmailService(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public async Task SendEmailAsync(string email, string subject, string htmlMessage)
        {

            var client = new SmtpClient(Configuration["EmailSend:SmtpService"], int.Parse(Configuration["EmailSend:SmtpServicePort"]))
            {
                Credentials = new NetworkCredential(Configuration["EmailSend:SmtpUser"], Configuration["EmailSend:SmtpPassword"]),
                EnableSsl = true
            };
            MailMessage mailMessage = new MailMessage(Configuration["EmailSend:MailMessageFrom"], $"{email}", $"{subject}", $"{htmlMessage}");
            mailMessage.IsBodyHtml = true;
            client.Send(mailMessage);

        }
    }
}
