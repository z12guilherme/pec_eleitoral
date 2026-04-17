const contentData = {
    popular: {
        heroTitle: 'O Poder na Mão do Cidadão: <span class="gradient-text">A Revolução da Transparência</span>',
        heroDesc: 'Um "Contrato de Experiência" para o Presidente e Prefeitos. Mandato de 5 anos, sem reeleição e com auditoria popular em tempo real.',
        cycleTitle: 'O Ciclo de 5 Anos',
        step1Title: 'Contrato de Experiência',
        step1Desc: 'O político entra para trabalhar e provar o que veio fazer.',
        step2Title: 'Votação de Meio de Termo',
        step2Desc: 'Aos 2 anos e meio, você volta à urna para avaliar o governo.',
        step3Title: 'Governo Sob Medida',
        step3Desc: 'Se o governo vai mal, o povo dá maioria para a oposição fiscalizar.',
        pillar1Title: 'Fim da Reeleição',
        pillar1Desc: 'Mandato único de 5 anos para que o político foque no trabalho, não na próxima campanha.',
        pillar2Title: 'Painel da Verdade',
        pillar2Desc: 'Dados auditados pelo IBGE e tecnologia Blockchain. Se o governo mentir, a mentira cai na hora.',
        pillar3Title: 'Eleições de Meio de Mandato',
        pillar3Desc: 'O povo decide aos 30 meses se o governo merece continuar com apoio ou precisa ser travado.',
        pillar4Title: 'Auditoria Popular',
        pillar4Desc: 'Qualquer cidadão poderá baixar os dados reais e conferir se as metas estão sendo batidas.',
    },
    juridico: {
        heroTitle: 'PEC do Sistema Nacional de <span class="gradient-text">Governança Democrática</span>',
        heroDesc: 'Proposta de Emenda à Constituição: Avaliação intermediária, Blindagem Técnica e Transparência Pública Total (Blockchain).',
        cycleTitle: 'Ciclo de Accountability',
        step1Title: 'Regime de Execução Plena',
        step1Desc: 'Autonomia administrativa para implementação do plano de governo.',
        step2Title: 'Eleições Legislativas',
        step2Desc: 'Renovação do Poder Legislativo para refletir a percepção popular do ciclo.',
        step3Title: 'Regime de Governabilidade',
        step3Desc: 'O Congresso delibera sobre a autonomia ou compartilhamento da execução.',
        pillar1Title: 'Mandato Quinquenal',
        pillar1Desc: 'Mandato único visando reduzir incentivos eleitorais e reforçar a orientação para resultados.',
        pillar2Title: 'Sistemas de Dados Oficiais',
        pillar2Desc: 'Obrigatoriedade de uso exclusivo de dados do IBGE e padronização técnica ABNT.',
        pillar3Title: 'Accountability Democrática',
        pillar3Desc: 'Mecanismo de controle social contínuo sobre a administração pública nacional.',
        pillar4Title: 'Blockchain Governamental',
        pillar4Desc: 'Imutabilidade e auditabilidade em tempo real de toda a contabilidade distribuída pública.',
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const dynamicElements = document.querySelectorAll('.dynamic-content');

    const updateContent = (mode) => {
        // Fade out
        dynamicElements.forEach(el => el.classList.add('fade-out'));

        setTimeout(() => {
            const data = contentData[mode];

            document.getElementById('hero-title').innerHTML = data.heroTitle;
            document.getElementById('hero-desc').textContent = data.heroDesc;
            document.getElementById('cycle-title').textContent = data.cycleTitle;
            document.getElementById('step-1-title').textContent = data.step1Title;
            document.getElementById('step-1-desc').textContent = data.step1Desc;
            document.getElementById('step-2-title').textContent = data.step2Title;
            document.getElementById('step-2-desc').textContent = data.step2Desc;
            document.getElementById('step-3-title').textContent = data.step3Title;
            document.getElementById('step-3-desc').textContent = data.step3Desc;
            document.getElementById('pillar-1-title').textContent = data.pillar1Title;
            document.getElementById('pillar-1-desc').textContent = data.pillar1Desc;
            document.getElementById('pillar-2-title').textContent = data.pillar2Title;
            document.getElementById('pillar-2-desc').textContent = data.pillar2Desc;
            document.getElementById('pillar-3-title').textContent = data.pillar3Title;
            document.getElementById('pillar-3-desc').textContent = data.pillar3Desc;
            document.getElementById('pillar-4-title').textContent = data.pillar4Title;
            document.getElementById('pillar-4-desc').textContent = data.pillar4Desc;

            // Fade in
            dynamicElements.forEach(el => el.classList.remove('fade-out'));
        }, 400);
    };

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return;

            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const mode = btn.getAttribute('data-mode');
            updateContent(mode);
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Formulario de Assinatura
    const sigForm = document.getElementById('signature-form');
    if (sigForm) {
        sigForm.addEventListener('submit', (e) => {
            e.preventDefault();
            sigForm.style.display = 'none';
            document.getElementById('signature-success').style.display = 'block';
        });
    }
});
