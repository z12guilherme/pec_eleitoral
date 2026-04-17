document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.getElementById('signature-count');

    // ID da sua planilha pública
    const sheetId = '1d0ZyLXs3N5QSrklPS9LW068-ntGmf6Es7hDd9DI2kps';
    // URL da API de Visualização do Google (lê os dados sem problemas de CORS)
    const gvizURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&tq=SELECT A`;

    // Função para animar os números
    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Efeito "ease out" (desacelera suavemente no final)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            obj.innerHTML = Math.floor(easeOutQuart * (end - start) + start);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.innerHTML = end; // Garante que termine no número exato
            }
        };
        window.requestAnimationFrame(step);
    };

    // Lê os dados direto da planilha pública
    fetch(gvizURL)
        .then(response => response.text())
        .then(text => {
            // O Google retorna um formato de texto com prefixo. Isolamos apenas o JSON:
            const jsonString = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
            const data = JSON.parse(jsonString);

            // A quantidade de assinaturas é equivalente à quantidade de linhas retornadas
            const count = data.table.rows.length;

            // Inicia a animação de 0 até o total
            animateValue(countElement, 0, count, 2000);
        })
        .catch(error => {
            console.error('Erro ao buscar quantidade de assinaturas:', error);
            countElement.innerHTML = `<span style="font-size: 1.5rem; color: #ef4444; text-shadow: none;">Erro de Conexão com o Servidor</span>`;
        });
});