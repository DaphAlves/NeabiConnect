
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script carregado!");

    
    const form = document.querySelector("form");
    
    if (form) {
        form.addEventListener("submit", (e) => {
           
            const email = form.querySelector('input[name="email"]').value;
            const senha = form.querySelector('input[name="senha"]').value;

          
            if (!email || !senha) {
                e.preventDefault(); 
                alert("Por favor, preencha todos os campos!");
                return;
            }

            console.log("Formulário enviado com:", { email, senha });
        });
    }
});
