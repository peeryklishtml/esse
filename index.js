const puppeteer = require('puppeteer');

(async () => {
    let browser;
    try {
        const puppeteer = require('puppeteer-core');
const browser = await puppeteer.launch({
  executablePath: '/path/to/chrome', // Forneça o caminho do Chromium
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});


        // Acesse a URL da página que contém o iframe
        await page.goto('https://pedir-deliveri.site/app/16/?name=LUCILENE%20PINHEIRO&document=02987624395&email=LUCIELE@gmail.com&telephone=47999364152'); // Substitua pela URL da sua página

        // Espera o iframe carregar
        await page.waitForSelector('iframe#meuIframe', { visible: true });

        // Acessa o conteúdo do iframe
        const iframe = await page.$('iframe#meuIframe');
        const iframeContent = await iframe.contentFrame();

        // Espera o botão "Gerar Pix" dentro do iframe
        await iframeContent.waitForSelector('button#finalize_pix_purchase', { visible: true });

        // Espera 3 segundos antes de clicar no botão
        await new Promise(resolve => setTimeout(resolve, 2000)); // Pausa por 3 segundos

        // Clique no botão "Gerar Pix" dentro do iframe
        await iframeContent.click('button#finalize_pix_purchase');

    } catch (error) {
        console.error('Erro:', error); // Exibe o erro se ocorrer
    }

    app.listen(process.env.PORT || 3000, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
      });
      
    // Não fecha o navegador para que ele permaneça aberto
})();
