import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PasswordResetRequest {
  email: string;
  resetUrl: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, resetUrl }: PasswordResetRequest = await req.json();

    console.log("Enviando email de recuperação para:", email);

    const emailResponse = await resend.emails.send({
      from: "Amostra <onboarding@resend.dev>",
      to: [email],
      subject: "Recuperação de senha - Amostra",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                background-color: #f8f9fa;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 40px auto;
                background: white;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
                padding: 40px 20px;
                text-align: center;
              }
              .logo {
                width: 120px;
                height: auto;
                margin-bottom: 10px;
              }
              .content {
                padding: 40px 30px;
                color: #333;
              }
              h1 {
                color: #1a1a1a;
                font-size: 24px;
                font-weight: 700;
                margin: 0 0 20px 0;
              }
              p {
                color: #666;
                font-size: 16px;
                line-height: 1.6;
                margin: 0 0 20px 0;
              }
              .button {
                display: inline-block;
                background: #ff6b35;
                color: white !important;
                text-decoration: none;
                padding: 16px 40px;
                border-radius: 8px;
                font-weight: 600;
                font-size: 16px;
                margin: 20px 0;
                transition: background 0.3s;
              }
              .button:hover {
                background: #ff5522;
              }
              .footer {
                padding: 30px;
                text-align: center;
                color: #999;
                font-size: 14px;
                border-top: 1px solid #eee;
              }
              .warning {
                background: #fff3cd;
                border-left: 4px solid #ffc107;
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
              }
              .warning p {
                margin: 0;
                color: #856404;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <img src="https://preview--interactive-web-brew.lovable.app/amostra-logo.png" alt="Amostra Logo" class="logo">
              </div>
              
              <div class="content">
                <h1>Recuperação de Senha</h1>
                <p>Olá!</p>
                <p>Recebemos uma solicitação para redefinir a senha da sua conta na Amostra.</p>
                <p>Clique no botão abaixo para criar uma nova senha:</p>
                
                <div style="text-align: center;">
                  <a href="${resetUrl}" class="button">Redefinir Senha</a>
                </div>
                
                <div class="warning">
                  <p><strong>⚠️ Importante:</strong> Este link expira em 1 hora por motivos de segurança.</p>
                </div>
                
                <p>Se você não solicitou a recuperação de senha, pode ignorar este email com segurança.</p>
                
                <p style="margin-top: 30px;">
                  <strong>Dica de segurança:</strong><br>
                  Nunca compartilhe sua senha com ninguém. A equipe da Amostra nunca pedirá sua senha por email.
                </p>
              </div>
              
              <div class="footer">
                <p>Este é um email automático, por favor não responda.</p>
                <p>© ${new Date().getFullYear()} Amostra - Sua plataforma de materiais de design</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email enviado com sucesso:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Erro ao enviar email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
